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
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "ร้านค้ารอลงทะเบียน",
    count: 20,
    icon: <StorefrontIcon />,
    bgColor: "#2196F3",
  },
  {
    title: "ร้านค้าในระบบ",
    count: 20,
    icon: <StorefrontIcon />,
    bgColor: "#4CAF50",
  },
  {
    title: "ผู้ใช้งานในระบบ",
    count: 20,
    icon: <PeopleIcon />,
    bgColor: "#4CAF50",
  },
  {
    title: "ร้านค้าระงับชั่วคราว",
    count: 20,
    icon: <StorefrontIcon />,
    bgColor: "#F44336",
  },
];

const StatusCard = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {data.map((item, index) => (
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
                  {item.count}
                </Typography>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ mt: 1 }}
                  onClick={() => navigate("/users/detail")}
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
