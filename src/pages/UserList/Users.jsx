import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress, Box, Typography } from '@mui/material';
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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function UsersCustomer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 
  

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/customer");
      setUsers(res.data.data); 
    } catch (error) {
      console.error("Failed to fetch users", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ชื่อ</StyledTableCell>
            <StyledTableCell align="right">นามสกุล</StyledTableCell>
            <StyledTableCell align="right">อีเมล์</StyledTableCell>
            <StyledTableCell align="right">เบอร์ติดต่อ</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {user.fname|| '-'}
                </StyledTableCell>
                <StyledTableCell align="right">{user.lname || '-'}</StyledTableCell>
                <StyledTableCell align="right">{user.email || '-'}</StyledTableCell>
                <StyledTableCell align="right">{user.tel || '-'}</StyledTableCell>
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
