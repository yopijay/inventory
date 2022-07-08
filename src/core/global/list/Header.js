// Libraries
import React, { useEffect, useState } from 'react';
import { TableCell, tableCellClasses, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/styles';

const Header = ({ data }) => {
    const [ cols, setCols ] = useState([]);

    const StyledTableCell = styled(TableCell)(({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#487eb0',
            color: '#e6f3f8',
            fontSize: 15,
            fontWeight: 'bold'
        }
    }));

    useEffect(() => {
        let _keys = data.length > 0 ? Object.keys(data[0]) : Object.keys(data);
        let _headers = [];
        
        for(let count = 0; count < _keys.length; count++) {
            if(_keys[count] !== 'id') {
                _headers.push({ name: `${(_keys[count]).charAt(0).toUpperCase()}${(_keys[count]).replaceAll('_', ' ').slice(1)}`, 
                                            props: { align: `${_keys[count] === 'total_no_of_brands' || _keys[count] === 'status' || _keys[count] === 'total_no_of_assets'
                                                                        || _keys[count] === 'total_asset' || _keys[count] === 'civil_status' || _keys[count] === 'quantity'
                                                                        || _keys[count] === 'assigned_assets' || _keys[count] === 'unassigned_assets' ? 'center' : 'left'}` } });
            }
        }
        setCols(_headers);
    }, [data]);

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell align= "center">No.</StyledTableCell>
                {
                    cols.map((item, index) => (
                        <StyledTableCell key= { index } { ...(item.props) }>{ item.name }</StyledTableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    );
}

export default Header;