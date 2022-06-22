// Libraries
import React, { useEffect } from 'react';
import { Box, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/styles';
import { useParams } from 'react-router';

// Layouts
import Items from './Items';
import { useFieldArray } from 'react-hook-form';

const StyledTableCell = styled(TableCell)(({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#487eb0',
        color: '#e6f3f8',
        fontSize: 15,
        fontWeight: 'bold'
    }
}));

const Index = (props) => {
    const { type } = useParams();
    const { register, control, getValues, errors } = props;
    const { fields, append, remove } = useFieldArray({ control, name: 'items' });

    useEffect(() => {
        append({});
        if (type === 'new') remove(2);
    }, []);
    
    return (
        <Box sx= {{ boxShadow: 2, borderRadius: '5px', overflow: 'hidden' }}>
            <TableContainer sx= {{ maxHeight: '200px' }}>
                <Table aria-label= "Assets Issued" size= "small" sx= {{ minWidth: 650 }} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align= "center">No</StyledTableCell>
                            <StyledTableCell>Device</StyledTableCell>
                            <StyledTableCell>Symbol</StyledTableCell>
                            <StyledTableCell>Description</StyledTableCell>
                            <StyledTableCell align= "center">Quantity</StyledTableCell>
                            <StyledTableCell align= "center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            fields.map(({ id }, index) => (
                                <Items key= { id } register= { register } index= { index } append= { append } remove= { remove } getValues= { getValues } errors= { errors } />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Index;