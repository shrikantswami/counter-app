import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import '../../../App.css'
import PageHeaders from '../../PageHeader';
import { Maincontent ,Cbox } from '../../../layout';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

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
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Shrikant Swami ', 'CEO', '05-02-2023 22:03:30', '05-02-2023 22:03:30', 1),
    createData('Shubhada Swami', 'Manager', '05-02-2023 22:03:30', '05-02-2023 22:03:30', 1),
    createData('Pravin Chankote', 'STAFF', '05-02-2023 22:03:30', '05-02-2023 22:03:30', 1),
    createData('Sagar Popade', 'STAFF', '05-02-2023 22:03:30', '05-02-2023 22:03:30', 1),
    createData('Vishnu Talde', 'STAFF', '05-02-2023 22:03:30', '05-02-2023 22:03:30', 1),
  ];
const Users =() => {



return <>
<Maincontent>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
                <TableRow>
                    <Cbox></Cbox>
                    <StyledTableCell>User Names</StyledTableCell>
                    <StyledTableCell align="right">Role</StyledTableCell>
                    <StyledTableCell align="right">Created On</StyledTableCell>
                    <StyledTableCell align="right">Updated On (g)</StyledTableCell>
                    <StyledTableCell align="right">Active (g)</StyledTableCell>
                </TableRow>
          
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
                <Cbox></Cbox>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Maincontent>
    </>

}

export default Users