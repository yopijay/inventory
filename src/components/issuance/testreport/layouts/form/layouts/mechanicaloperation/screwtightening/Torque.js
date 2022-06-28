// Libraries
import React, { useContext } from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

// Constants
import { Torque as Torq } from '../../../../../../../../core/global/constants/MechanicalOperation';

// Context
import { TestReportContext } from '../../../../../../../../core/context/TestReportContext';

const Torque = () => {
    const { register, getValues } = useContext(TestReportContext);
    // eslint-disable-next-line
    const defaultVal = getValues().mechanical_operation;

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', paddingLeft: '10px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Typography text= "d.42" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                <Ctrl.Typography text= "Bolt Tightening Torque" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: '20px' }}>
                {
                    Torq().map((row, index) => (
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }} key= { index }>
                            {
                                (row.item).map((items, index) => (
                                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '10px 0' }} key= { index }>
                                        <Ctrl.Checkbox name= { `torq${items.name}Chck` } size= "large" checked= { false } />
                                        <Ctrl.Typography text= { `${items.label}` } sx= {{ margin: '0 10px 0 0', transition: 'all 0.2s ease-in-out' }} />
                                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                            <Ctrl.TextField name= { `torq${items.name}Txt` } sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">N-m</InputAdornment> }} />
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    ))
                }
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '10px' }}>
                    <Ctrl.Typography text= "Other Bolt Sizes" sx= {{ minWidth: '150px', transition: 'all 0.2s ease-in-out' }} />
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '10px 30px' }}>
                        <Ctrl.Checkbox name= "torqOther1Chck" size= "large" checked= { false } />
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= "torqOther1Txt" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">N-m</InputAdornment> }} />
                        </Box>
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '10px 30px' }}>
                        <Ctrl.Checkbox name= "torqOther2Chck" size= "large" checked= { false } />
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= "torqOther2Txt" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">N-m</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Torque;