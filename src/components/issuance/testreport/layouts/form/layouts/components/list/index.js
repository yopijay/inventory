// Libraries
import React, { useContext, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/styles';
import { useParams } from 'react-router-dom';

// Layouts
import Items from './Items';
import { useFieldArray } from 'react-hook-form';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const StyledTableCell = styled(TableCell)(({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#487eb0',
        color: '#e6f3f8',
        fontSize: 15,
        fontWeight: 'bold'
    }
}));

const Index = () => {
    const { type } = useParams();
    const { register, control, getValues, errors } = useContext(TestReportContext);
    const { fields, append, remove } = useFieldArray({ control, name: 'items' });

    useEffect(() => {
        if(type === 'new') append();
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
                            { type !== 'view' ? <StyledTableCell align= "center">Action</StyledTableCell> : '' }
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