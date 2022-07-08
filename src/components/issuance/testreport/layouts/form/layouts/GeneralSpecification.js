// Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../../core/global/controls/Controls';
import { get } from '../../../../../../core/request/Request';

// Context
import { TestReportContext } from '../../../../../../core/context/TestReportContext';

// Loader
import { SnakeLoader } from '../../../../../../core/loader/Loader';

const GeneralSpecification = () => {
    const { type, id } = useParams();
    const { register, errors, setValue } = useContext(TestReportContext);
    const error = errors.general_specification;
    const [ isLoad, setIsLoad ] = useState(type !== 'new');

    useEffect(() => {
        if(id !== undefined) get(id, 'general_specification', setValue, setIsLoad, 'general_specification');
    }, []);

    return (
        <Box>
            {
                !isLoad ? (
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" sx= {{ paddingBottom: '20px' }} spacing= { 1 }>
                        <Grid item xs= { 12 } sm= { 6 }>
                            <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Box marginBottom= "5px"><Ctrl.Typography text= "Panel Name" color= "text-primary" /></Box>
                                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                    <Ctrl.TextField name= { `general_specification.panel_name` } register= { register(`general_specification.panel_name`, { required: 'This field is required!' }) } 
                                        variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                </Box>
                                <Box padding= "0 10px" marginTop= "5px">
                                    <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.panel_name !== undefined ? error.panel_name.message : '' : '' } color= "red" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs= { 12 } sm= { 6 }>
                            <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Box marginBottom= "5px"><Ctrl.Typography text= "Voltage" color= "text-primary" /></Box>
                                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                    <Ctrl.TextField name= { `general_specification.voltage` } register= { register(`general_specification.voltage`, { required: 'This field is required!' }) } 
                                        variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                </Box>
                                <Box padding= "0 10px" marginTop= "5px">
                                    <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.voltage !== undefined ? error.voltage.message : '' : '' } color= "red" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs= { 12 } sm= { 6 }>
                            <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Box marginBottom= "5px"><Ctrl.Typography text= "Enlosure Type" color= "text-primary" /></Box>
                                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                    <Ctrl.TextField name= { `general_specification.enclosure_type` } register= { register(`general_specification.enclosure_type`, { required: 'This field is required!' }) } 
                                        variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                </Box>
                                <Box padding= "0 10px" marginTop= "5px">
                                    <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.enclosure_type !== undefined ? error.enclosure_type.message : '' : '' } color= "red" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs= { 12 } sm= { 6 }>
                            <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Box marginBottom= "5px"><Ctrl.Typography text= "Phase / Wire" color= "text-primary" /></Box>
                                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                    <Ctrl.TextField name= { `general_specification.wire` } register= { register(`general_specification.wire`, { required: 'This field is required!' }) } 
                                        variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                </Box>
                                <Box padding= "0 10px" marginTop= "5px">
                                    <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.wire !== undefined ? error.wire.message : '' : '' } color= "red" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs= { 12 } sm= { 6 }>
                            <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Box marginBottom= "5px"><Ctrl.Typography text= "Color" color= "text-primary" /></Box>
                                <Box sx= {{ border: 'solid 1px #dcdde1', borderRadius: '5px', padding: '5px 15px' }}>
                                    <Ctrl.TextField name= { `general_specification.color` } register= { register(`general_specification.color`, { required: 'This field is required!' }) } 
                                        variant= "standard" fullWidth InputProps= {{ disableUnderline: true }} />
                                </Box>
                                <Box padding= "0 10px" marginTop= "5px">
                                    <Ctrl.Typography className= "f-14" text= { error !== undefined ? error.color !== undefined ? error.color.message : '' : '' } color= "red" />
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

export default GeneralSpecification;