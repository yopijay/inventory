// Libraries
import React from 'react';
import { TableCell, tableCellClasses, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/styles';

const Header = () => {

    const StyledTableCell = styled(TableCell)(({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#487eb0',
            color: '#e6f3f8',
            fontSize: 15,
            fontWeight: 'bold'
        }
    }));

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>Series No.</StyledTableCell>
                <StyledTableCell>Project</StyledTableCell>
                <StyledTableCell>Customer</StyledTableCell>
                <StyledTableCell>Tested By</StyledTableCell>
                <StyledTableCell align= "center">Status</StyledTableCell>
                <StyledTableCell align= "center">Date Created</StyledTableCell>
                <StyledTableCell align= "center">Action</StyledTableCell>
            </TableRow>
        </TableHead>
    );
}

export default Header;