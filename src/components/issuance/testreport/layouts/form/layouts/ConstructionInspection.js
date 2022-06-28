// Libraries
import React, { useContext, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';

// Layouts
import Drawings from './constructioninspection/Drawings';
import Paint from './constructioninspection/Paint';
import Busbar from './constructioninspection/Busbar';
import PowerCable from './constructioninspection/PowerCable';

// Context
import { TestReportContext } from '../../../../../../core/context/TestReportContext';

const ConstructionInspection = () => {
    const { register, getValues } = useContext(TestReportContext);
    // eslint-disable-next-line
    const defaultVal = getValues().basic_information;

    const [ isNameplate, setIsNameplate ] = useState(false);
    const [ isDevicenos, setIsDevicenos ] = useState(false);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }}>
            <Grid item xs= { 12 }>
                <Drawings />
                <Paint />
                <Busbar />
                <PowerCable />
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Typography text= "c.5" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                        <Ctrl.Typography text= "Correct quantity and labels of nameplates" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= { `construction_inspection.nameplate` } size= "large" 
                            checked= { defaultVal !== undefined ? defaultVal.nameplate > 0 ? true : isNameplate : isNameplate }
                            register= { register(`construction_inspection.nameplate`, {
                                onChange: () => setIsNameplate(!isNameplate)
                            }) } />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 20px'                                      }}>
                        <Ctrl.Typography text= "Correct quantity and labels of device nos." sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                        <Ctrl.Checkbox name= { `construction_inspection.devicenos` } size= "large" 
                            checked= { defaultVal !== undefined ? defaultVal.devicenos > 0 ? true : isDevicenos : isDevicenos }
                            register= { register(`construction_inspection.devicenos`, {
                                onChange: () => setIsDevicenos(!isDevicenos)
                            }) } />
                    </Box>
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Ctrl.Typography text= "Remarks" sx= {{ transition: 'all 0.2s ease-in-out', textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
                    </Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', width: '100%' }}>
                        <Ctrl.TextField name= { `construction_inspection.remarks` } register= { register(`construction_inspection.remarks`) }
                            variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Remarks..." />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ConstructionInspection;