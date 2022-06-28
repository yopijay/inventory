// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Box, TableBody, TableCell, tableCellClasses, TableRow } from '@mui/material';
import { styled } from '@mui/styles';

// Core
import PDF from '../../../core/global/PDF';
import Export from '../../../core/global/Export';
import Print from '../../../core/global/Print';

// Loader
import { SnakeLoader } from '../../../core/loader/Loader';

// Assets
import Logo from '../../../assets/images/profile.jpg';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import LocalPrintshopSharpIcon from '@mui/icons-material/LocalPrintshopSharp';

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
                                <StyledTableCell>{ rows.series_no }</StyledTableCell>
                                <StyledTableCell>{ rows.fullname }</StyledTableCell>
                                <StyledTableCell>{ rows.department }</StyledTableCell>
                                <StyledTableCell>{ rows.position }</StyledTableCell>
                                <StyledTableCell>{ rows.birthdate }</StyledTableCell>
                                <StyledTableCell align= "center">{ rows.total_asset } </StyledTableCell>
                                <StyledTableCell align= "center">
                                    <Box sx= {{ display: 'flex', flexDirectin: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Box sx= {{ margin: '5px' }}>
                                            <PDF name= { `${rows.name} Report` } element= { <PictureAsPdfIcon style= {{ fontSize: '150%', color: '#ffffffff' }} /> } 
                                                        logo= {{ img: Logo, w: 10, h: 10, type: 'JPEG' }} />
                                        </Box>
                                        <Box sx= {{ margin: '5px' }}>
                                            <Print name= "Category Report" 
                                                element= { <LocalPrintshopSharpIcon style= {{ fontSize: '150%', color: '#ffffffff' }} /> } content={ [] } />
                                        </Box>
                                        <Box sx= {{ margin: '5px' }}>
                                            <Export element= { <ArticleSharpIcon style= {{ fontSize: '150%', color: '#ffffffff' }} /> } filename= { `${rows.name} Report` } data= { [] } column= { [] } />
                                        </Box>
                                    </Box>
                                </StyledTableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <StyledTableCell align= "center" colSpan= "5">No categories found!</StyledTableCell>
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