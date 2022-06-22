// Libraries
import React, { useState } from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const FreeStanding = (props) => {
    const { register, getValues } = props;
    const defaultVal = getValues().construction_inspection;

    const [ isFS, setIsFS ] = useState(false); 

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, marginTop: '10px' }}>
            <Ctrl.Checkbox name= { `construction_inspection.free_standing.fs` } register= { register(`construction_inspection.free_standing.fs`, { onChange: () => setIsFS(!isFS) }) }
                size= "large" checked= { defaultVal !== undefined ? defaultVal.free_standing.fs > 0 ? true : isFS : isFS } />
            <Box sx= {{ margin: '0 10px', minWidth: '230px' }}><Ctrl.Typography color= "#2c3e50" text= "Free-Standing" /></Box>
            <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "W:" /></Box>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                    <Ctrl.TextField name= { `construction_inspection.free_standing.w` } register= { register(`construction_inspection.free_standing.w`) }
                        type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                        InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                </Box>
            </Box>
            <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "H:" /></Box>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                    <Ctrl.TextField name= { `construction_inspection.free_standing.h` } register= { register(`construction_inspection.free_standing.h`) }
                        type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                        InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                </Box>
            </Box>
            <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "D:" /></Box>
                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                    <Ctrl.TextField name= { `construction_inspection.free_standing.d` } register= { register(`construction_inspection.free_standing.d`) }
                        type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                        InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                </Box>
            </Box>
        </Box>
    );
}

export default FreeStanding;