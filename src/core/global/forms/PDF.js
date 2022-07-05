// Libraries
import React from 'react';

// Core
import { Box } from '@mui/material';
import { pdf } from '../../request/Request';

const PDF = ({ name, content, element }) => {

    const generatePdf = () => {
        let data = [];
        data.push({ content: content().outerHTML, name: name })

        pdf(data);
        // window.open(doc.output('bloburl'));
        // console.log(content().toDataURL('image/jpeg', 1.0));
        // doc.save(`${name} - ${orientation.toUpperCase()}.pdf`);
    }

    return (
        <Box onClick= { generatePdf }>
            { element }
        </Box>
    );
}

export default PDF;