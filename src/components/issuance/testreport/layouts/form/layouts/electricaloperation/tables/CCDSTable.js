// Libraries
import React from 'react';
import { Box, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/styles';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const StyledTableCell = styled(TableCell)(({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#487eb0',
        color: '#e6f3f8',
        fontSize: 15,
        fontWeight: 'bold'
    }
}));

const CCDSTable = () => {
    return (
        <Box sx= {{ boxShadow: 2, borderRadius: '5px', overflow: 'hidden', marginTop: '10px' }}>
            <TableContainer sx= {{ maxHeight: '200px' }}>
                <Table aria-label= "Insulation Resistance Test" size= "small" sx= {{ minWidth: 650 }} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align= "center">DESIGNATION</StyledTableCell>
                            <StyledTableCell align= "center">TIME (min.)</StyledTableCell>
                            <StyledTableCell align= "center">VAC KV</StyledTableCell>
                            <StyledTableCell align= "center">L - G</StyledTableCell>
                            <StyledTableCell align= "center">REMARKS</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align= "center">CLOSE</TableCell>
                            <TableCell align= "center">1</TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100%">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ccds_close_vackv" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100%">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ccds_close_lg" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100%">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ccds_close_remarks" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default CCDSTable;