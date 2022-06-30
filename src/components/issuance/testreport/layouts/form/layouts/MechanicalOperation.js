// Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';
import { get } from '../../../../../../core/request/Request';

// Layouts
import CircuitBreaker from './mechanicaloperation/CircuitBreaker';
import LoadBreaker from './mechanicaloperation/LoadBreaker';
import MagneticSwitch from './mechanicaloperation/MagneticSwitch';
import ScrewTightening from './mechanicaloperation/ScrewTightening';

// Context
import { TestReportContext } from '../../../../../../core/context/TestReportContext';

// Loader
import { SnakeLoader } from '../../../../../../core/loader/Loader';

const MechanicalOperation = () => {
    const { type, id } = useParams();
    const { register, setValue } = useContext(TestReportContext);
    const [ isLoad, setIsLoad ] = useState(type !== 'new');

    useEffect(() => {
        if(id !== undefined) {
            get(id, 'mechanical_operation', setValue, setIsLoad, 'mechanical_operation');
        }
    }, []);

    return (
        <Box>
            {
                !isLoad ? (
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }}>
                        <Grid item xs= { 12 }>
                            <CircuitBreaker />
                            <LoadBreaker />
                            <MagneticSwitch />
                            <ScrewTightening />
                            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                                <Ctrl.Typography text= "Remarks" sx= {{ transition: 'all 0.2s ease-in-out',  textTransform: 'uppercase', whiteSpace: 'normal', fontWeight: 'bold' }} />
                                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px', width: '100%' }}>
                                    <Ctrl.TextField name= { `mechanical_operation.remarks` } register= { register(`mechanical_operation.remarks`) }
                                        variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Remarks..." />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        <Grid item sx= {{ marginTop: '10px' }}><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default MechanicalOperation;