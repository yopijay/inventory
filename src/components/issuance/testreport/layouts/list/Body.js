// Libraries
import React from 'react';
import { Box, TableBody, TableCell, tableCellClasses, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/styles';

// Core
import PDF from '../../../../../core/global/PDF';

// Assets
import Logo from '../../../../../assets/images/logo.png';

// Icons
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// Loader
import { SnakeLoader } from '../../../../../core/loader/Loader';


const Body = (props) => {
    const { data, isLoad } = props;

    const StyledTableCell = styled(TableCell)(({
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        }
    }));

    return (
        <TableBody>
            {
                !isLoad ? (
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
                                            <Link to= { `/issuance/test-report/form/update/${rows.id}` } style= {{ textDecoration: 'none' }}>
                                                <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#487eb0" 
                                                    borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                    <ModeEditOutlineIcon style= {{ fontSize: '110%' }} />
                                                </Box>
                                            </Link>
                                        </Box>
                                        <Box sx= {{ margin: '5px' }}>
                                            <Link to= { `/issuance/test-report/form/view/${rows.id}` } style= {{ textDecoration: 'none' }}>
                                                <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#487eb0" 
                                                    borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                    <VisibilityIcon style= {{ fontSize: '110%' }} />
                                                </Box>
                                            </Link>
                                        </Box>
                                        <Box sx= {{ margin: '5px' }}>
                                            <PDF name= { `${rows.project} - Test Report` } logo= {{ img: Logo, w: 13, h: 10, type: 'PNG' }} type= "test-report"
                                                    element= { <PictureAsPdfIcon style= {{ fontSize: '150%', color: '#ffffff', padding: '-4px -10px' }} /> } />
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
                ) : (
                    <TableRow>
                        <StyledTableCell align= "center" colSpan= "6">
                            <Box sx= {{ display: 'flex' , flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" />
                            </Box>
                        </StyledTableCell>
                    </TableRow>
                )
            }
        </TableBody>
    );
}

Body.propTypes = {
    data: PropTypes.array.isRequired
}

export default Body;