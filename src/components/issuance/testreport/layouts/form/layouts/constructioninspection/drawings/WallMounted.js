// Libraries
import React, { useState } from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const WallMounted = (props) => {
    const { register, getValues } = props;
    const defaultVal = getValues().construction_inspection;

    const [ isWM, setIsWM ] = useState(false);

    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Ctrl.Checkbox name= { `construction_inspection.wall_mounted.wm` } register= { register(`construction_inspection.wall_mounted.wm`, { onChange: () => setIsWM(!isWM) }) }
                    size= "large" checked= { defaultVal !== undefined ? defaultVal.wall_mounted.wm > 0 ? true : isWM : isWM } />
                <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Wall-Mounted" /></Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0',
                overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Box" /></Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "W:" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `construction_inspection.wall_mounted.box.w` } register= { register(`construction_inspection.wall_mounted.box.w`) }
                            type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "H:" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `construction_inspection.wall_mounted.box.h` } register= { register(`construction_inspection.wall_mounted.box.h`) }
                            type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "D:" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `construction_inspection.wall_mounted.box.d` } register= { register(`construction_inspection.wall_mounted.box.d`) }
                            type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0',
                overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, paddingLeft: '15px' }}>
                <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Cover" /></Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "W:" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `construction_inspection.wall_mounted.cover.w` } register= { register(`construction_inspection.wall_mounted.cover.w`) }
                            type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "L:" /></Box>
                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                        <Ctrl.TextField name= { `construction_inspection.wall_mounted.cover.l` } register= { register(`construction_inspection.wall_mounted.cover.l`) }
                            type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                            InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default WallMounted;