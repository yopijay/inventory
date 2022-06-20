// Libraries
import React from 'react';
import { Box, InputAdornment } from '@mui/material';

// Core
import Ctrl from '../../../../../../../../core/global/controls/Controls';

const WallMounted = () => {
    return (
        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', margin: '0 20px' }}>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Box>
                    <Ctrl.Checkbox name= "wallMounted" radius= "5px" size= "large" checked= { false } />
                </Box>
                <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Wall-Mounted" /></Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0 5px 20px', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Box" /></Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "W:" /></Box>
                    <Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "wmBoxW" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "H:" /></Box>
                    <Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "wmBoxH" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "D:" /></Box>
                    <Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "wmBoxD" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '5px 0 5px 20px', overflowX: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ margin: '0 10px', minWidth: '200px' }}><Ctrl.Typography color= "#2c3e50" text= "Cover" /></Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "W:" /></Box>
                    <Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "wmCoverW" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx= {{ margin: '0 20px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box sx= {{ margin: '0 10px' }}><Ctrl.Typography color= "#2c3e50" text= "L:" /></Box>
                    <Box>
                        <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '10px 15px' }}>
                            <Ctrl.TextField name= "wmCoverH" type= "number" sx= {{ minWidth: '70px', maxWidth: '50px' }} variant= "standard" 
                                InputProps= {{ disableUnderline: true, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default WallMounted;