// Libraries
import React from 'react';

// Core
import { Box } from '@mui/material';

const PDF = ({ name, content, element }) => {

    const generatePdf = () => {
    }

    return (
        <Box onClick= { generatePdf }>
            { element }
        </Box>
    );
}

export default PDF;