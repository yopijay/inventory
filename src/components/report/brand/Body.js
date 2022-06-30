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
                                <StyledTableCell>{ rows.series_no }</StyledTableCell>
                                <StyledTableCell>{ rows.category_name }</StyledTableCell>
                                <StyledTableCell>{ rows.name }</StyledTableCell>
                                <StyledTableCell align= "center">{ rows.total_no_of_assets } </StyledTableCell>
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
                ) : (
                    <TableRow>
                        <StyledTableCell align= "center" colSpan= "5">
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