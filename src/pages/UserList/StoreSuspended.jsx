import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function SuspendedShops() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchInactiveShops = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}:3000/admin/fetchShop`
      );
      const filtered = res.data.data.filter(
        (shop) => shop.status === "inactive"
      );
      setShops(filtered);
    } catch (error) {
      console.error("Failed to fetch shops", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInactiveShops();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ชื่อร้านค้า</StyledTableCell>
            <StyledTableCell align="right">สาขา</StyledTableCell>
            <StyledTableCell align="right">จังหวัด</StyledTableCell>
            <StyledTableCell align="right">เพิ่มเติม</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shops.length > 0 ? (
            shops.map((shop, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {shop.name || "-"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {shop.branch || "-"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {shop.shopkeeperLocation?.province || "-"}
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  sx={{ cursor: "pointer", color: "blue" }}
                  onClick={() =>
                    navigate(`/users/approval/inactiveshops/${shop.id}`)
                  }
                >
                  รายละเอียดเพิ่มเติม
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={4} align="center">
                <Typography>ไม่พบร้านค้า</Typography>
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
