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

const IRTable = () => {
    return (
        <Box sx= {{ boxShadow: 2, borderRadius: '5px', overflow: 'hidden', marginTop: '10px' }}>
            <TableContainer sx= {{ maxHeight: '200px' }}>
                <Table aria-label= "Insulation Resistance Test" size= "small" sx= {{ minWidth: 650 }} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align= "center">DESIGNATION</StyledTableCell>
                            <StyledTableCell align= "center">TIME (min.)</StyledTableCell>
                            <StyledTableCell align= "center">VDC</StyledTableCell>
                            <StyledTableCell align= "center">R-STG-N MΩ</StyledTableCell>
                            <StyledTableCell align= "center">S-RTG-N MΩ</StyledTableCell>
                            <StyledTableCell align= "center">T-RSG-N MΩ</StyledTableCell>
                            <StyledTableCell align= "center">RSTN-G MΩ</StyledTableCell>
                            <StyledTableCell align= "center">N-G MΩ</StyledTableCell>
                            <StyledTableCell align= "center">REMARKS</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align= "center">BEFORE</TableCell>
                            <TableCell align= "center">1</TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_before_vdc" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_before_rstgn" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_before_srtgn" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_before_trsgn" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_before_rstng" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_before_ng" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_before_remarks" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align= "center">AFTER</TableCell>
                            <TableCell align= "center">1</TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_after_vdc" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_after_rstgn" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_after_srtgn" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_after_trsgn" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_after_rstng" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_after_ng" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "eo_ir_after_rremarks" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
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

export default IRTable;