// Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';
import { get } from '../../../../../../core/request/Request';

// Layouts
import Drawings from './components/Drawings';
import CircuitBreaker from './components/CircuitBreaker';
import LBS from './components/LBS';
import MagneticSwitch from './components/MagneticSwitch';
import Capacitor from './components/Capacitor';
import Auxillaries from './components/auxillaries';
import Remarks from './components/Remarks';
import List from './components/list/index';

// Context
import { TestReportContext } from '../../../../../../core/context/TestReportContext';

// Loader
import { SnakeLoader } from '../../../../../../core/loader/Loader';

const Components = () => {
    const { type, id } = useParams();
    const { register, setValue } = useContext(TestReportContext);
    const [ isLoad, setIsLoad ] = useState(type !== 'new');

    useEffect(() => {
        if(id !== undefined) {
            get(id, 'component', setValue, setIsLoad, 'component');
            get(id, 'component_items', setValue, setIsLoad, 'items');
        }
    }, []);

    return (
        <Box>
            {
                !isLoad ? (
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
                        <Grid item xs= { 12 }>
                            <List />
                        </Grid>
                        <Grid item xs= { 12 }>
                            <Drawings />
                            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                                <CircuitBreaker />
                                <LBS />
                                <MagneticSwitch />
                                <Capacitor />
                                <Auxillaries />
                                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" padding= "0 10px">
                                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <Ctrl.Typography text= "b.16" sx= {{ margin: '0 15px 0 0', transition: 'all 0.2s ease-in-out', whiteSpace: 'normal' }} />
                                        <Ctrl.Typography text= "Other" sx= {{ minWidth: '230px', transition: 'all 0.2s ease-in-out' }} />
                                    </Box>
                                    <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                        <Ctrl.TextField name= { `component.others` } register= { register(`component.others`) } variant= "standard" 
                                            fullWidth InputProps= {{ disableUnderline: true }} placeholder= "Others..." disabled= { type === 'view' } />
                                    </Box>
                                </Box>
                            </Box>
                            <Remarks />
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

export default Components;