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
                                        <Ctrl.TextField name= {`electrical_operation.irt.before.vdc` } register= { register(`electrical_operation.irt.before.vdc`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.before.r_stg_n` } register= { register(`electrical_operation.irt.before.r_stg_n`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.before.s_rtg_n` } register= { register(`electrical_operation.irt.before.s_rtg_n`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.before.t_rsg_n` } register= { register(`electrical_operation.irt.before.t_rsg_n`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.before.rstn_g` } register= { register(`electrical_operation.irt.before.rstn_g`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.before.n_g` } register= { register(`electrical_operation.irt.before.n_g`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.before.remarks` } register= { register(`electrical_operation.irt.before.remarks`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
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
                                        <Ctrl.TextField name= {`electrical_operation.irt.after.vdc` } register= { register(`electrical_operation.irt.after.vdc`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.after.r_stg_n` } register= { register(`electrical_operation.irt.after.r_stg_n`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.after.s_rtg_n` } register= { register(`electrical_operation.irt.after.s_rtg_n`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.after.t_rsg_n` } register= { register(`electrical_operation.irt.after.t_rsg_n`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.after.rstn_g` } register= { register(`electrical_operation.irt.after.rstn_g`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.after.n_g` } register= { register(`electrical_operation.irt.after.n_g`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100px">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= {`electrical_operation.irt.after.remarks` } register= { register(`electrical_operation.irt.after.remarks`) }
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