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

export default function RegisterShops() {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();

  const fetchRegistrationShops = async () => {
    try {
      const res = await axios.get(
        `http://${import.meta.env.VITE_API_URL}:3000/admin/fetchRegisterShops`
      );
      console.log("Fetched Shops:", res.data);
      setShops(res.data.data);
    } catch (error) {
      console.error("Failed to fetch shops", error);
    }
  };
  useEffect(() => {
    fetchRegistrationShops();
  }, []);

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
          {shops.map((shop, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {shop.shopName}
              </StyledTableCell>
              <StyledTableCell align="right">{shop.branch}</StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                {shop.shopkeeperLocation?.province || "-"}
              </StyledTableCell>
              <StyledTableCell
                onClick={() =>
                  navigate(`/users/approval/registrationshops/${shop.id}`)
                }
                align="right"
              >
                รายละเอียดเพิ่มเติม
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
