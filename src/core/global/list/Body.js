// Libraries
import React, { useEffect, useState } from 'react';
import { TableBody, TableCell, tableCellClasses, TableRow } from '@mui/material';
import { styled } from '@mui/styles';

const Body = ({ data }) => {
    const [ cols, setCols ] = useState([]);

    const StyledTableCell = styled(TableCell)(({
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        }
    }));

    useEffect(() => {
        let _body = [];
        for(let count = 0; count < data.length; count++) {
            let _keys = Object.keys(data[count]);
            let _row = [];

            for(let item = 0; item < _keys.length; item++) {
                if(_keys[item] !== 'id') {
                    _row.push({ value: _keys[item] === 'status' ? data[count][_keys[item]] > 0 ? 'Active' : 'Inactive' : 
                                        _keys[item] === 'civil_status' ? `${(data[count][_keys[item]]).charAt(0).toUpperCase()}${(data[count][_keys[item]]).slice(1)}` : data[count][_keys[item]], 
                                        props: { align: `${_keys[item] === 'total_no_of_brands' || _keys[item] === 'status' || _keys[item] === 'total_no_of_assets'
                                                                    || _keys[item] === 'total_asset' || _keys[item] === 'civil_status' || _keys[item] === 'quantity'
                                                                    || _keys[item] === 'assigned_assets' || _keys[item] === 'unassigned_assets' ? 'center' : 'left'}` } });
                }
            }

            _body.push(_row);
        }

        setCols(_body);
    }, [data]);

    return (
        <TableBody>
            {
                cols.map((row, index) => (
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key= { index }>
                        <StyledTableCell align= "center">{ (index + 1) }</StyledTableCell>
                        {
                            row.map((col, index) => (
                                <StyledTableCell { ...(col.props) } key= { index }>{ col.value }</StyledTableCell>
                            ))
                        }
                    </TableRow>
                ))
            }
        </TableBody>
    );
}

export default Body;