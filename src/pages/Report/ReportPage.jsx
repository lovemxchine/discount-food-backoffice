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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ReportDetails from "./ReportDetails";
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

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1000px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function CustomizedTables() {
  const [open, setOpen] = React.useState(false);
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState();

  const handleOpen = (report) => {
    setSelectedReport(report);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const fetchAvailableShops = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}:3000/admin/reportShop/`
      );
      console.log(res.data);
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
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>เรื่อง</StyledTableCell>
              <StyledTableCell align="right">คนเขียน</StyledTableCell>
              <StyledTableCell align="right">วันที่รายงาน</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  กำลังโหลดข้อมูล...
                </TableCell>
              </TableRow>
            ) : (
              shops.map((shop, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {shop.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">{shop.sender}</StyledTableCell>
                  <StyledTableCell align="right">
                    {new Date(shop.createdAt).toLocaleDateString("th-TH")}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => handleOpen(shop)}
                    align="right"
                    sx={{ color: "blue", cursor: "pointer" }}
                  >
                    รายละเอียดเพิ่มเติม
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {selectedReport && <ReportDetails report={selectedReport} />}
        </Box>
      </Modal>
    </>
  );
}
