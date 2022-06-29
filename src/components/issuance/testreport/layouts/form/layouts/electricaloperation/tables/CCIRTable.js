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

const CCIRTable = () => {
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
                            <StyledTableCell align= "center">VDC V</StyledTableCell>
                            <StyledTableCell align= "center">L - G</StyledTableCell>
                            <StyledTableCell align= "center">REMARKS</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align= "center">BEFORE</TableCell>
                            <TableCell align= "center">1</TableCell>
                            <TableCell align= "center">500</TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100%">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ccirt.before.lg` } register= { register(`electrical_operation.ccirt.before.lg`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100%">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ccirt.before.remarks` } register= { register(`electrical_operation.ccirt.before.remarks`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align= "center">AFTER</TableCell>
                            <TableCell align= "center">1</TableCell>
                            <TableCell align= "center">500</TableCell>
                            <TableCell align= "center">
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100%">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ccirt.after.lg` } register= { register(`electrical_operation.ccirt.after.lg`) }
                                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell align= "center">
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" width= "100%">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `electrical_operation.ccirt.after.remarks` } register= { register(`electrical_operation.ccirt.after.remarks`) }
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

export default CCIRTable;