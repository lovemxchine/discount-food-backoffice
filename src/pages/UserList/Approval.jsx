import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../../App.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

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

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "#D3D3D3", p: 2 }}>
          <div className="text-center text-3xl">ข้อมูลร้านค้า</div>
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
            <Grid container spacing={2}>
              <Grid size={6}>
                <div>ชื่อร้านค้า</div>
                <Item>size=6</Item>
              </Grid>
              <Grid size={6}>
                <div>สาขา</div>
                <Item>size=6</Item>
              </Grid>
              <Grid size={6}>
                <div>อีเมล์</div>
                <Item>size=6</Item>
              </Grid>
              <Grid size={8}>
                <div>เลขที่อยู่ / ข้อมูลสถานที่</div>
                <Item>size=8</Item>
              </Grid>
              <Grid size={4}>
                <div>จังหวัด</div>
                <Item>size=4</Item>
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
              <Grid size={3}>
                <div>เบอร์ติดต่อ</div>
                <Item>size=3</Item>
              </Grid>
              <Grid size={3}>
                <div>เวลาเปิด</div>
                <Item>size=3</Item>
              </Grid>
              <Grid size={3}>
                <div>เวลาปิด</div>
                <Item>size=3</Item>
              </Grid>
            </Grid>
            <div className="flex justify-center items-center mt-6">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                รูปใบทะเบียนพาณิชย์
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => console.log(event.target.files)}
                  multiple
                />
              </Button>
            </div>
            <Divider sx={{ borderBottomWidth: "2px", margin: "2rem" }} />

            <Box>
              <div className="text-center text-3xl mt-4">ข้อมูลร้านค้า</div>
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
                <Grid size={1}>
                  <div>รหัสไปรษณีย์</div>
                  <Item>size=1</Item>
                </Grid>
              </Grid>
              <div className="flex justify-center items-center mt-6">
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    endIcon={<DeleteIcon />}
                    sx={{
                      backgroundColor: "red",
                      "&:hover": { backgroundColor: "darkred" },
                    }}
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
                  >
                    ยืนยันการลงทะเบียน
                  </Button>
                </Stack>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
