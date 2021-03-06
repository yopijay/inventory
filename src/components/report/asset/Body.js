// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Box, TableBody, TableCell, tableCellClasses, TableRow } from '@mui/material';
import { styled } from '@mui/styles';

// Loader
import { SnakeLoader } from '../../../core/loader/Loader';

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
                                <StyledTableCell align= "center">{ (index + 1) }</StyledTableCell>
                                <StyledTableCell>{ rows.series_no }</StyledTableCell>
                                <StyledTableCell>{ rows.name }</StyledTableCell>
                                <StyledTableCell align= "center">{ rows.total_asset }</StyledTableCell>
                                <StyledTableCell align= "center">{ rows.assigned_assets } </StyledTableCell>
                                <StyledTableCell align= "center">{ rows.unassigned_assets } </StyledTableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <StyledTableCell align= "center" colSpan= "6">No assets found!</StyledTableCell>
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