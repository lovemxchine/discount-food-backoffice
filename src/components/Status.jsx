import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import { useEffect, useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StatusCard = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [active, setActive] = useState([]);
  const [user, setUsers] = useState([]);
  const [inactive, setInactive] = useState([]);

  const fetchRegistrationShops = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}:3000/admin/fetchRegisterShops/`
      );
      console.log("Regis Shops:", res.data);
      setShops(res.data.data);
    } catch (error) {
      console.error("Failed to fetch shops", error);
    }
  };

  const fetchActivesShops = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}:3000/customer/availableShop/`
      );
      console.log("Active Shops:", res.data);
      setActive(res.data.data);
    } catch (error) {
      console.error("Failed to fetch shops", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}:3000/admin/customer`
      );
      console.log("Users:", res.data);
      setUsers(res.data.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  const fetchInactive = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}:3000/admin/fetchShop`
      );
      const filtered = res.data.data.filter(
        (shop) => shop.status === "inactive"
      );
      setInactive(filtered);
    } catch (error) {
      console.error("Failed to fetch shops", error);
    }
  };

  useEffect(() => {
    fetchRegistrationShops();
    fetchActivesShops();
    fetchUsers();
    fetchInactive();
  }, []);

  const cardData = [
    {
      title: "ร้านค้ารอลงทะเบียน",
      count: shops.length,
      icon: <StorefrontIcon />,
      bgColor: "#2196F3",
      route: "/users/registrationshops",
    },
    {
      title: "ร้านค้าในระบบ",
      count: active.length,
      icon: <StorefrontIcon />,
      bgColor: "#4CAF50",
      route: "/users/activeshops",
    },
    {
      title: "ผู้ใช้งานในระบบ",
      count: user.length,
      icon: <PeopleIcon />,
      bgColor: "#4CAF50",
      route: "/users/systemusers",
    },
    {
      title: "ร้านค้าระงับชั่วคราว",
      count: inactive.length,
      icon: <StorefrontIcon />,
      bgColor: "#F44336",
      route: "/users/suspendedshops",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
              <Avatar
                sx={{
                  bgcolor: item.bgColor,
                  width: 56,
                  height: 56,
                  mr: 2,
                }}
              >
                {item.icon}
              </Avatar>
              <Box>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item?.count || "..."}
                </Typography>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ mt: 1 }}
                  onClick={() => navigate(item.route)}
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
};

export default StatusCard;
