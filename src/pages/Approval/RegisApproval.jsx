import * as React from "react";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../../App.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Divider, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function RegisApprove() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const shop = shops.find((shop) => shop.id === id);
  const [openImage, setOpenImage] = useState(false);
  const sampleImageUrl = shop?.imgUrl?.certificateUrl;
  const navigate = useNavigate();
  const handleConfirmation = async (status) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/confirmationShop`,
        {
          uid: id,
          status: status,
        }
      );

      if (res.data.status === "success") {
        // ert("ดำเนินการสำเร็จ");
        fetchRegistrationShops();
        navigate("/users");
        window.location.reload();
        al;
      } else if (res.data.status === "rejected") {
        // alert("การลงทะเบียนถูกปฏิเสธ");
        fetchRegistrationShops();
        navigate("/users");
        window.location.reload();
      } else {
        throw new Error(res.data.message || "Operation failed");
      }
    } catch (error) {
      console.error("Error during confirmation:", error);
      alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
  };

  const fetchRegistrationShops = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/fetchRegisterShops/`
      );
      console.log("Fetched Shops:", res.data);
      setShops(res.data.data);
    } catch (error) {
      console.error("Failed to fetch shops", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrationShops();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }
  const formatTime = (timeString) => {
    if (!timeString) return "-";
    const match = timeString.match(/\(([^)]+)\)/);
    return match ? match[1] : timeString;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#D3D3D3", p: 2 }}>
          <div className="text-center text-3xl">
            ข้อมูลของร้านค้าที่รอลงทะเบียน
          </div>
          <Box
            sx={{
              flexGrow: 1,
              border: "2px solid gray",
              borderRadius: 1,
              padding: 2,
              bgcolor: "#BEBEBE",
            }}
            className="mt-4"
          >
            <Box sx={{ p: 2 }}>
              <div className="text-center text-3xl">ข้อมูลร้านค้า</div>
            </Box>
            {shop && (
              <Grid container spacing={2}>
                <Grid size={6}>
                  <div>ชื่อร้านค้า</div>
                  <Item>{shop?.shopName || shop.name}</Item>
                </Grid>
                <Grid size={6}>
                  <div>สาขา</div>
                  <Item>{shop?.branch || "-"}</Item>
                </Grid>
                <Grid size={6}>
                  <div>อีเมล์</div>
                  <Item>{shop.email}</Item>
                </Grid>
                <Grid size={8}>
                  <div>เลขที่อยู่ / ข้อมูลสถานที่</div>
                  <Item>
                    {shop.shopkeeperLocation.district}{" "}
                    {shop.shopkeeperLocation.postcode}{" "}
                    {shop.shopkeeperLocation.province}{" "}
                    {shop.shopkeeperLocation.subdistrict}
                  </Item>
                </Grid>
                <Grid size={4}>
                  <div>จังหวัด</div>
                  <Item>{shop.shopLocation_th.province}</Item>
                </Grid>
                <Grid size={3}>
                  <div>อำเภอ / เขต</div>
                  <Item>{shop.shopLocation_th.district}</Item>
                </Grid>
                <Grid size={3}>
                  <div>ตำบล / แขวง</div>
                  <Item>{shop.shopLocation_th.subdistrict}</Item>
                </Grid>
                <Grid size={2}>
                  <div>รหัสไปรษณีย์</div>
                  <Item>{shop.shopLocation_th.postcode}</Item>
                </Grid>
                <Grid size={3}>
                  <div>เบอร์ติดต่อ</div>
                  <Item>{shop.tel}</Item>
                </Grid>
                <Grid size={3}>
                  <div>เวลาเปิด</div>
                  <Item>
                    {formatTime(shop.shopTime?.openAt || shop.openAt)}
                  </Item>
                </Grid>
                <Grid size={3}>
                  <div>เวลาปิด</div>
                  <Item>
                    {formatTime(shop.shopTime?.closeAt || shop.closeAt)}
                  </Item>
                </Grid>
              </Grid>
            )}
            <div className="flex justify-center items-center mt-6">
              <Button
                variant="contained"
                startIcon={<CloudUploadIcon />}
                onClick={() => setOpenImage(true)}
              >
                ดูรูปใบทะเบียนพาณิชย์
              </Button>
            </div>
            <Divider sx={{ borderBottomWidth: "2px", margin: "2rem" }} />

            <Box>
              <div className="text-center text-3xl mt-4">
                ข้อมูลของ คนดูแล / เจ้าของ
              </div>
            </Box>
            <Box sx={{}} className="mt-4">
              {shop && (
                <Grid container spacing={2}>
                  <Grid size={4}>
                    <div>ชื่อ</div>
                    <Item>{shop.shopkeeperData.name}</Item>
                  </Grid>
                  <Grid size={4}>
                    <div>นามสกุล</div>
                    <Item>{shop.shopkeeperData.surname}</Item>
                  </Grid>
                  <Grid size={4}>
                    <div>สัญชาติ</div>
                    <Item>{shop.shopkeeperData.nationality}</Item>
                  </Grid>

                  <Grid size={6}>
                    <div>เลขที่อยู่ / ข้อมูลสถานที่</div>
                    <Item>{shop.shopkeeperLocation.district}</Item>
                  </Grid>
                  <Grid size={2}>
                    <div>จังหวัด</div>
                    <Item>{shop.shopkeeperLocation.province}</Item>
                  </Grid>
                  <Grid size={2}>
                    <div>อำเภอ / เขต</div>
                    <Item>{shop.shopkeeperLocation.district}</Item>
                  </Grid>
                  <Grid size={2}>
                    <div>ตำบล / แขวง</div>
                    <Item>{shop.shopkeeperLocation.subdistrict}</Item>
                  </Grid>
                  <Grid size={1}>
                    <div>รหัสไปรษณีย์</div>
                    <Item>{shop.shopkeeperLocation.postcode}</Item>
                  </Grid>
                </Grid>
              )}
              <div className="flex justify-center items-center mt-6">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    endIcon={<DeleteIcon />}
                    sx={{
                      backgroundColor: "red",
                      "&:hover": { backgroundColor: "darkred" },
                    }}
                    onClick={() => handleConfirmation("REJECT")}
                  >
                    ปฏิเสธการลงทะเบียน
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      backgroundColor: "green",
                      "&:hover": { backgroundColor: "darkgreen" },
                    }}
                    onClick={() => handleConfirmation("APPROVE")}
                  >
                    ยืนยันการลงทะเบียน
                  </Button>
                </Stack>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>

      <Dialog
        open={openImage}
        onClose={() => setOpenImage(false)}
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          รูปใบทะเบียนพาณิชย์
          <IconButton
            aria-label="close"
            onClick={() => setOpenImage(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <img
            src={sampleImageUrl}
            alt="business-license"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
