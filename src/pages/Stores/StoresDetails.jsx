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
import { Divider, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

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

export default function SimpleContainer() {
  const [status, setStatus] = useState("");

  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const shop = shops.find((shop) => shop.id === id);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");

  const fetchRegistrationShops = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/fetchShop`
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

  const handleUpdateStatus = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/admin/updateStatus`, {
        uid: id,
        status,
      });
      setSnackMsg("อัปเดตสถานะสำเร็จ");
      setOpenSnack(true);
      await fetchRegistrationShops();
    } catch (err) {
      console.error(err);
      setSnackMsg(
        err.response?.data?.status ?? "อัปเดตไม่สำเร็จ โปรดลองอีกครั้ง"
      );
      setOpenSnack(true);
    }
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
                <Grid size={4}>
                  <div>ชื่อร้านค้า</div>
                  <Item>{shop.name || "-"}</Item>
                </Grid>
                <Grid size={4}>
                  <div>สาขา</div>
                  <Item>{shop.branch || "-"}</Item>
                </Grid>
                <Grid size={4}>
                  <div>อีเมล์</div>
                  <Item>{shop.email || "-"}</Item>
                </Grid>
                <Grid size={6}>
                  <div>เลขที่อยู่ / ข้อมูลสถานที่</div>
                  <Item>{shop.shopLocation_th.district || "-"}</Item>
                </Grid>
                <Grid size={3}>
                  <div>จังหวัด</div>
                  <Item>{shop.shopLocation_th.province || "-"}</Item>
                </Grid>
                <Grid size={3}>
                  <div>อำเภอ / เขต</div>
                  <Item>{shop.shopLocation_th.district || "-"}</Item>
                </Grid>
                <Grid size={3}>
                  <div>ตำบล / แขวง</div>
                  <Item>{shop.shopLocation_th.subdistrict || "-"}</Item>
                </Grid>
                <Grid size={2}>
                  <div>รหัสไปรษณีย์</div>
                  <Item>{shop.shopLocation_th.postcode || "-"}</Item>
                </Grid>
                <Grid size={2}>
                  <div>เบอร์ติดต่อ</div>
                  <Item>{shop.tel || "-"}</Item>
                </Grid>
                <Grid size={2}>
                  <div>เวลาเปิด</div>
                  <Item>{shop.openAt || "-"}</Item>
                </Grid>
                <Grid size={2}>
                  <div>เวลาปิด</div>
                  <Item>{shop.closeAt || "-"}</Item>
                </Grid>
              </Grid>
            )}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <label htmlFor="status-select" className="font-medium">
                สถานะ :
              </label>

              <select
                id="status-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-white border border-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- เลือกสถานะ --</option>
                <option value="active">ใช้งานปกติ</option>
                <option value="inactive">ระงับชั่วคราว</option>
                <option value="disable">ระงับถาวร</option>
              </select>

              <Button
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ px: 2, py: 1, borderRadius: 2, textTransform: "none" }}
                disabled={!status}
                onClick={handleUpdateStatus}
              >
                ยืนยันการแก้ไข
              </Button>
            </div>
            <Snackbar
              open={openSnack}
              autoHideDuration={3000}
              onClose={() => setOpenSnack(false)}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert severity="info" variant="filled">
                {snackMsg}
              </Alert>
            </Snackbar>

            <Divider sx={{ borderBottomWidth: "2px", margin: "2rem" }} />
            <Box>
              <div className="text-center text-3xl mt-4">
                ข้อมูลของ คนดูแล / เจ้าของ
              </div>
            </Box>
            <Box sx={{}} className="mt-4">
              {shop && (
                <Grid container spacing={2}>
                  <Grid size={2}>
                    <div>คำนำหน้า</div>
                    <Item>{shop.prefix || "-"}</Item>
                  </Grid>
                  <Grid size={3}>
                    <div>ชื่อ</div>
                    <Item>{shop.username || "-"}</Item>
                  </Grid>
                  <Grid size={3}>
                    <div>นามสกุล</div>
                    <Item>{shop.surname || "-"}</Item>
                  </Grid>
                  <Grid size={1}>
                    <div>สัญชาติ</div>
                    <Item>{shop.nationality || "-"}</Item>
                  </Grid>
                  <Grid size={1}>
                    <div>ศาสนา</div>
                    <Item>{shop.religion || "-"}</Item>
                  </Grid>
                  <Grid size={2}>
                    <div>วัน เดือน ปีเกิด</div>
                    <Item>{shop.Dateofbirth || "-"}</Item>
                  </Grid>
                  <Grid size={6}>
                    <div>เลขที่อยู่ / ข้อมูลสถานที่</div>
                    <Item>{shop.shopkeeperLocationz || "-"}</Item>
                  </Grid>
                  <Grid size={2}>
                    <div>จังหวัด</div>
                    <Item>{shop.shopkeeperLocation.province || "-"}</Item>
                  </Grid>
                  <Grid size={2}>
                    <div>อำเภอ / เขต</div>
                    <Item>{shop.shopkeeperLocation.district || "-"}</Item>
                  </Grid>
                  <Grid size={2}>
                    <div>ตำบล / แขวง</div>
                    <Item>{shop.shopkeeperLocation.subdistrict || "-"}</Item>
                  </Grid>
                  <Grid size={2}>
                    <div>รหัสไปรษณีย์</div>
                    <Item>{shop.shopkeeperLocation.postcode || "-"}</Item>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
