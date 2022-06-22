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

const AccordionSummary = styled((props) => (<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}{...props}/>))(({
    backgroundColor:'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: '8px'
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({
    padding: '10px',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Index = (props) => {
    const { register, control, getValues, errors } = props;
    const [ expanded, setExpanded ] = useState('Construction Inspection');

    return (
        <Box>
            {
                Navs(register, control, getValues, errors).map((test, index) => (
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