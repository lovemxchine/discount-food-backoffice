import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../../App.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function SimpleContainer({ report }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              flexGrow: 1,
            }}
            className="mt-4"
          >
            <Grid container spacing={2}>
              <Grid size={12}>
                <div className="text-center mt-4 font-bold text-xl">
                  หัวข้อเรื่อง
                </div>
                <Item>{report.title}</Item>
              </Grid>
              <Grid size={6}>
                <div className="text-center mt-4 font-bold">ชื่อผู้รายงาน</div>
                <Item>{report.sender}</Item>
              </Grid>
              <Grid size={6}>
                <div className="text-center mt-4 font-bold">ชื่อร้านค้า</div>
                <Item>{report.shopName}</Item>
              </Grid>
              <Grid size={12}>
                <div className="text-center mt-4 font-bold">เนื้อหา</div>
                <Item>{report.description}</Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
