// Libraries
import React, { useContext } from 'react';
import { Box, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/styles';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

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

const IRTable = () => {
    const { register, getValues } = useContext(TestReportContext);
    // eslint-disable-next-line
    const defaultVal = getValues().electrical_operation;

    return (
        <Box sx= {{ boxShadow: 2, borderRadius: '5px', overflow: 'hidden', marginTop: '10px' }}>
            <TableContainer sx= {{ maxHeight: '200px' }}>
                <Table aria-label= "Insulation Resistance Test" size= "small" sx= {{ minWidth: 650 }} stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align= "center" colSpan= "6"></StyledTableCell>
                            <StyledTableCell align= "center" colSpan= "4">{ `PASSING RANGE <10 mA` }</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell align= "center">DESIGNATION</StyledTableCell>
                            <StyledTableCell align= "center">TIME (min.)</StyledTableCell>
                            <StyledTableCell align= "center">VAC KV</StyledTableCell>
                            <StyledTableCell align= "center">R-STG mA</StyledTableCell>
                            <StyledTableCell align= "center">S-RTG mA</StyledTableCell>
                            <StyledTableCell align= "center">T-RSG mA</StyledTableCell>
                            <StyledTableCell align= "center">RST-G mA</StyledTableCell>
                            <StyledTableCell align= "center">RST-N mA</StyledTableCell>
                            <StyledTableCell align= "center">NG mA</StyledTableCell>
                            <StyledTableCell align= "center">REMARKS</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align= "center">CLOSE</TableCell>
                            <TableCell align= "center">1</TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ds.close.vackv` } register= { register(`electrical_operation.ds.close.vackv`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ds.close.r_stg` } register= { register(`electrical_operation.ds.close.r_stg`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ds.close.s_rtg` } register= { register(`electrical_operation.ds.close.s_rtg`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ds.close.t_rsg` } register= { register(`electrical_operation.ds.close.t_rsg`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ds.close.rst_g` } register= { register(`electrical_operation.ds.close.rst_g`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ds.close.rst_n` } register= { register(`electrical_operation.ds.close.rst_n`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ds.close.ng` } register= { register(`electrical_operation.ds.close.ng`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ds.close.remarks` } register= { register(`electrical_operation.ds.close.remarks`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
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