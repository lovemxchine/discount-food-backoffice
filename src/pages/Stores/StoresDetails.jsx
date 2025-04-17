import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../../App.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


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
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
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
            <Grid container spacing={2}>
              <Grid size={4}>
                <div>ชื่อร้านค้า</div>
                <Item>size=4</Item>
              </Grid>
              <Grid size={4}>
                <div>สาขา</div>
                <Item>size=4</Item>
              </Grid>
              <Grid size={4}>
                <div>อีเมล์</div>
                <Item>size=4</Item>
              </Grid>
              <Grid size={6}>
                <div>เลขที่อยู่ / ข้อมูลสถานที่</div>
                <Item>size=6</Item>
              </Grid>
              <Grid size={3}>
                <div>จังหวัด</div>
                <Item>size=3</Item>
              </Grid>
              <Grid size={3}>
                <div>อำเภอ / เขต</div>
                <Item>size=3</Item>
              </Grid>
              <Grid size={3}>
                <div>ตำบล / แขวง</div>
                <Item>size=3</Item>
              </Grid>
              <Grid size={2}>
                <div>รหัสไปรษณีย์</div>
                <Item>size=2</Item>
              </Grid>
              <Grid size={2}>
                <div>เบอร์ติดต่อ</div>
                <Item>size=2</Item>
              </Grid>
              <Grid size={2}>
                <div>เวลาเปิด</div>
                <Item>size=2</Item>
              </Grid>
              <Grid size={2}>
                <div>เวลาปิด</div>
                <Item>size=2</Item>
              </Grid>
            </Grid>
            <div className="flex justify-center items-center mt-6 space-x-4">
              <label
                htmlFor="status-select"
                className="font-medium"
              >
                สถานะ :
              </label>

              <select
                id="status-select"
                value={status}
                onChange={handleChange}
                className="bg-white border border-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="normal">ใช้งานปกติ</option>
                <option value="temporary">ระงับการใช้งานชั่วคราว</option>
                <option value="permanent">ระงับการใช้งานถาวร</option>
              </select>

              <Button
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: "bg-blue-400", 
                  "&:hover": { backgroundColor: "bg-blue-800" },
                  paddingX: "16px",
                  paddingY: "8px",
                  borderRadius: "8px",
                  textTransform: "none",
                }}
              >
                ยืนยันการแก้ไข
              </Button>
            </div>

            <Divider sx={{ borderBottomWidth: "2px", margin: "2rem" }} />
            <Box>
              <div className="text-center text-3xl mt-4">
                ข้อมูลของ คนดูแล / เจ้าของ
              </div>
            </Box>
            <Box sx={{}} className="mt-4">
              <Grid container spacing={2}>
                <Grid size={1}>
                  <div>คำนำหน้า</div>
                  <Item>size=1</Item>
                </Grid>
                <Grid size={3}>
                  <div>ชื่อ</div>
                  <Item>size=3</Item>
                </Grid>
                <Grid size={3}>
                  <div>นามสกุล</div>
                  <Item>size=3</Item>
                </Grid>
                <Grid size={1}>
                  <div>สัญชาติ</div>
                  <Item>size=1</Item>
                </Grid>
                <Grid size={1}>
                  <div>ศาสนา</div>
                  <Item>size=1</Item>
                </Grid>
                <Grid size={2}>
                  <div>วัน เดือน ปีเกิด</div>
                  <Item>size=2</Item>
                </Grid>
                <Grid size={6}>
                  <div>เลขที่อยู่ / ข้อมูลสถานที่</div>
                  <Item>size=6</Item>
                </Grid>
                <Grid size={2}>
                  <div>จังหวัด</div>
                  <Item>size=2</Item>
                </Grid>
                <Grid size={2}>
                  <div>อำเภอ / เขต</div>
                  <Item>size=2</Item>
                </Grid>
                <Grid size={2}>
                  <div>ตำบล / แขวง</div>
                  <Item>size=2</Item>
                </Grid>
                <Grid size={2}>
                  <div>รหัสไปรษณีย์</div>
                  <Item>size=2</Item>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
