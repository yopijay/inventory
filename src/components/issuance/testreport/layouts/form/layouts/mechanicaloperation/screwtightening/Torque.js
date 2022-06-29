// Libraries
import React, { useContext, useState } from 'react';
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
    const [ isTorque, setIsTorque ] = useState({ 'm16': false, 'm8': false, '3-8': false, 'm12': false, 'm6': false, '1-4': false, 'm10': false, 'm5': false, '316': false, 'other1': false, 'other2': false });

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
                                        <Ctrl.Checkbox name= { `mechanical_operation.screw_tightening.torque.nm_${items.name}.chck` } size= "large"
                                            checked= { defaultVal !== undefined ? 
                                                                defaultVal.screw_tightening.torque[`nm_${items.name}`].chck > 0 ? true : isTorque[`${items.name}`] : isTorque[`${items.name}`] }
                                            register= { register(`mechanical_operation.screw_tightening.torque.nm_${items.name}.chck`, {
                                                onChange: () => setIsTorque({ ...isTorque, [`${items.name}`] : !isTorque[`${items.name}`] })
                                            }) } />
                                        <Ctrl.Typography text= { `${items.label}` } sx= {{ margin: '0 10px 0 0', transition: 'all 0.2s ease-in-out' }} />
                                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                            <Ctrl.TextField name= { `mechanical_operation.screw_tightening.torque.nm_${items.name}.txt` } 
                                                register= { register(`mechanical_operation.screw_tightening.torque.nm_${items.name}.txt`) } 
                                                sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
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
                        <Ctrl.Checkbox name= { `mechanical_operation.screw_tightening.torque.nm_other1.chck` } size= "large"
                            checked= { defaultVal !== undefined ? 
                                                defaultVal.screw_tightening.torque.nm_other1.chck > 0 ? true : isTorque.other1 : isTorque.other1 }
                            register= { register(`mechanical_operation.screw_tightening.torque.nm_other1.chck`, {
                                onChange: () => setIsTorque({ ...isTorque, other1 : !(isTorque.other1) })
                            }) }  />
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', marginRight: '10px' }}>
                            <Ctrl.TextField name= { `mechanical_operation.screw_tightening.torque.nm_other1.num` } 
                                register= { register(`mechanical_operation.screw_tightening.torque.nm_other1.num`) } 
                                sx= {{ width: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true }} />
                        </Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= { `mechanical_operation.screw_tightening.torque.nm_other1.txt` } 
                                register= { register(`mechanical_operation.screw_tightening.torque.nm_other1.txt`) } 
                                sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">N-m</InputAdornment> }} />
                        </Box>
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '10px 30px' }}>
                        <Ctrl.Checkbox name= { `mechanical_operation.screw_tightening.torque.nm_other2.chck` } size= "large"
                            checked= { defaultVal !== undefined ? 
                                                defaultVal.screw_tightening.torque.nm_other2.chck > 0 ? true : isTorque.other2 : isTorque.other2 }
                            register= { register(`mechanical_operation.screw_tightening.torque.nm_other2.chck`, {
                                onChange: () => setIsTorque({ ...isTorque, other2 : !(isTorque.other2) })
                            }) }  />
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', marginRight: '10px' }}>
                            <Ctrl.TextField name= { `mechanical_operation.screw_tightening.torque.nm_other2.num` } 
                                register= { register(`mechanical_operation.screw_tightening.torque.nm_other2.num`) } 
                                sx= {{ width: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true }} />
                        </Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                            <Ctrl.TextField name= { `mechanical_operation.screw_tightening.torque.nm_other2.txt` } 
                                register= { register(`mechanical_operation.screw_tightening.torque.nm_other2.txt`) } 
                                sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">N-m</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Torque;