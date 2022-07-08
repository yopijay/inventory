// Libraries
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const C12 = () => {
    const { register, getValues } = useContext(TestReportContext);
    const defaultVal = getValues().construction_inspection;

    const [ isGutter, setIsGutter ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
            <Ctrl.Typography text= "c.12" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
            <Ctrl.Typography text= "Allowable gutter space/bending clearance" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
            <Ctrl.Checkbox name= { `construction_inspection.draw.gutter` } size= "large" 
                checked= { defaultVal !== undefined ? defaultVal.draw.gutter > 0 ? true : isGutter : isGutter }
                register= { register(`construction_inspection.draw.gutter`, {
                    onChange: () => setIsGutter(!isGutter)
                }) } />
        </Box>
    );
}

export default C12;