// Libraries
import React from 'react';
import { Box, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/styles';

// Core
import Ctrl from '../../../../../../../core/global/controls/Controls';

// Assets
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledTableCell = styled(TableCell)(({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#487eb0',
        color: '#e6f3f8',
        fontSize: 15,
        fontWeight: 'bold'
    }
}));

const List = () => {
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
                        <TableRow>
                            <TableCell align= "center">1</TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "comp_device" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Device" />
                                    </Box>
                                    {/* <Box padding= "0 10px" marginTop= "5px">
                                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                                    </Box> */}
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 5px' }}>
                                        <Ctrl.Select name= "comp_symbol_id" fullWidth variant= "standard" InputProps= {{ disableUnderline: true }} defaultValue= "" options= { [] } />
                                    </Box>
                                    {/* <Box padding= "0 10px" marginTop= "5px">
                                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                                    </Box> */}
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 5px' }}>
                                        <Ctrl.Select name= "comp_description_id" fullWidth variant= "standard" InputProps= {{ disableUnderline: true }} defaultValue= "" options= { [] } />
                                    </Box>
                                    {/* <Box padding= "0 10px" marginTop= "5px">
                                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                                    </Box> */}
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= "comp_quantity" type= "number" variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Quantity" />
                                    </Box>
                                    {/* <Box padding= "0 10px" marginTop= "5px">
                                        <Ctrl.Typography className= "f-14" text= { errors.name === undefined ? '' : errors.name.message } color= "red" />
                                    </Box> */}
                                </Box>
                            </TableCell>
                            <TableCell align= "center">
                                <Box sx= {{ display: 'flex', flexDirectin: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx= {{ margin: '5px' }}>
                                        <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#487eb0" 
                                            borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center"><AddIcon style= {{ fontSize: '110%' }} /></Box>
                                    </Box>
                                    <Box sx= {{ margin: '5px' }}>
                                        <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#487eb0" 
                                            borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center"><RemoveIcon style= {{ fontSize: '110%' }} /></Box>
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

export default List;