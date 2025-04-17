import React from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const data = [
  {
    title: "tesco lotus's",
    subtitle: "ซีคอนสยาม",
    startend: "10.00-22.00",
    delivery: "มีบริการจัดส่ง",
  },
  {
    title: "tesco lotus's",
    subtitle: "ซีคอนสยาม",
    startend: "10.00-22.00",
    delivery: "มีบริการจัดส่ง",
  },
  {
    title: "tesco lotus's",
    subtitle: "ซีคอนสยาม",
    startend: "10.00-22.00",
    delivery: "มีบริการจัดส่ง",
  },
  {
    title: "tesco lotus's",
    subtitle: "ซีคอนสยาม",
    startend: "10.00-22.00",
    delivery: "มีบริการจัดส่ง",
  },
  {
    title: "tesco lotus's",
    subtitle: "ซีคอนสยาม",
    startend: "10.00-22.00",
    delivery: "มีบริการจัดส่ง",
  },
  {
    title: "tesco lotus's",
    subtitle: "ซีคอนสยาม",
    startend: "10.00-22.00",
    delivery: "มีบริการจัดส่ง",
  },
];

function StoresPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, p: 4, }}>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Card
              sx={{
                height: "100%",
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Typography 
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#333", flexGrow: 1, marginRight:"4rem"}}
                  >
                    {item.title}
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Inventory2Icon
                      sx={{ fontSize: 20, color: "primary.main" }}
                    /> 
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 500, color: "text.secondary", }}
                    >
                      {item.delivery}
                    </Typography>
                  </Stack>
                </Box>

                <Divider sx={{ mb: 2 }} />

                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 500, mb: 1, color: "#555" }}
                >
                  สาขา: {item.subtitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 400, color: "text.secondary" }}
                >
                  ระยะเวลาเปิด - ปิด: {item.startend}
                </Typography>
              </Box>

              <Box display="flex" justifyContent="flex-end" mt={3}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/users/stores_details")}
                  sx={{ textTransform: "none", fontWeight: 500 }}
                >
                  ดูรายละเอียด
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StoresPage;
