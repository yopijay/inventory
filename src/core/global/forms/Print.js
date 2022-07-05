// Libraries
import React from 'react';
import ReactToPrint from 'react-to-print';
import { Box } from '@mui/material';

const Print = (props) => {
    const { content, name, element } = props;
    return (
        <ReactToPrint
            documentTitle= { name }
            trigger= {  () => <Box sx= {{ padding: '8px 10px', color: "#FFFFFF", backgroundColor: "#487eb0",
            borderRadius: '4px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>{ element }</Box> } content= { content } />
    )
}

export default Print;