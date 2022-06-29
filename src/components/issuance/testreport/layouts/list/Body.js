// Libraries
import React from 'react';
import { Box, TableBody, TableCell, tableCellClasses, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/styles';

// Icons
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Loader
import { SnakeLoader } from '../../../../../core/loader/Loader';

const Body = (props) => {
    const { data } = props;

    const StyledTableCell = styled(TableCell)(({
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        }
    }));

    try {
        return (
            <TableBody>
                {
                    data.length !== 0 ? (
                        data.map((rows, index) => (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key= { index }>
                                <StyledTableCell>{ rows.serial_no }</StyledTableCell>
                                <StyledTableCell>{ rows.project }</StyledTableCell>
                                <StyledTableCell>{ rows.customer }</StyledTableCell>
                                <StyledTableCell>{ rows.tested_by }</StyledTableCell>
                                <StyledTableCell align= "center">{ `${ new Date(rows.date_created).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(rows.date_created).getDate() }, ${ new Date(rows.date_created).getFullYear() } 
                                                                ${ new Date(rows.date_created).getHours() % 12 }:${ new Date(rows.date_created).getMinutes() }
                                                                ${ new Date(rows.date_created).getHours() >= 12 ? 'PM' : 'AM' }` } </StyledTableCell>
                                <StyledTableCell align= "center">
                                    <Box sx= {{ display: 'flex', flexDirectin: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Box sx= {{ margin: '5px' }}>
                                            <Link to= { `/maintenance/brand/form/update/${rows.id}` } style= {{ textDecoration: 'none' }}>
                                                <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#487eb0" 
                                                    borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                    <ModeEditOutlineIcon style= {{ fontSize: '110%' }} />
                                                </Box>
                                            </Link>
                                        </Box>
                                        <Box sx= {{ margin: '5px' }}>
                                            <Link to= { `/maintenance/brand/form/view/${rows.id}` } style= {{ textDecoration: 'none' }}>
                                                <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#487eb0" 
                                                    borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                    <VisibilityIcon style= {{ fontSize: '110%' }} />
                                                </Box>
                                            </Link>
                                        </Box>
                                    </Box>    
                                </StyledTableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <StyledTableCell align= "center" colSpan= "6">No test reports found!</StyledTableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        );
    } catch (error) {
        return ( <TableBody><TableRow><StyledTableCell><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></StyledTableCell></TableRow></TableBody> )
    }
}

Body.propTypes = {
    data: PropTypes.array.isRequired
}

export default Body;