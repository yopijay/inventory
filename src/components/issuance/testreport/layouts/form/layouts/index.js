// Libraries
import React, { useState } from 'react';
import { Box, Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, AccordionDetails as MuiAccordionDetails } from '@mui/material';
import { styled } from '@mui/styles';

// Assets
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

// Constants
import { Navs } from '../../../../../../core/global/constants/TestReport';

const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props} />))(({
        border: 'solid 1px #dcdde1',
        borderRadius: '5px',
        '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}{...props}/>))(({ theme }) => ({
    backgroundColor:'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: '8px'
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '10px',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Index = () => {
    const [ expanded, setExpanded ] = useState('Electrical Operation');

    return (
        <Box>
            {
                Navs().map((test, index) => (
                    <Accordion expanded={expanded === test.name} onChange={() => setExpanded(test.name)} key= { index }>
                        <AccordionSummary aria-controls={ `panel${index}d-content` } id={ `panel${index}d-header` }>{ test.name }</AccordionSummary>
                        <AccordionDetails>{ test.component }</AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    );
}

export default Index;