import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  Divider,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function StoresPage() {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log("test", import.meta.env.VITE_API_URL);
  console.log(apiUrl)
  const fetchAvailableShops = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://${apiUrl}/customer/availableShop/`);
      setShops(res.data.data);
    } catch (error) {
      console.error("โหลดข้อมูลร้านค้าล้มเหลว:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailableShops();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4}>
        {loading ? (
          <Typography>กำลังโหลดข้อมูลร้านค้าที่เปิดขายอยู่...</Typography>
        ) : shops.length === 0 ? (
          <Typography>ไม่พบร้านค้าที่เปิดขายสินค้า</Typography>
        ) : (
          shops.map((shop, index) => (
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
                    <Avatar
                      src={shop.imgUrl?.shopUrl}
                      alt={shop.name}
                      sx={{ width: 48, height: 48, mr: 2 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#333", flexGrow: 1 }}
                    >
                      {shop.name || "ชื่อร้านค้า"}
                    </Typography>
                  </Box>

                  <Divider sx={{ mb: 2 }} />

                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 500, mb: 1, color: "#555" }}
                  >
                    สาขา: {shop.branch || "-"}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 400, color: "text.secondary" }}
                  >
                    เวลาเปิด-ปิด: {shop.openAt || "-"} - {shop.closeAt || "-"}
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="flex-end" mt={3}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      navigate("/users/stores_details", { state: { shop } })
                    }
                    sx={{ textTransform: "none", fontWeight: 500 }}
                  >
                    ดูรายละเอียด
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default StoresPage;
