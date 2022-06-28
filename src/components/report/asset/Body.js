// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../core/global/controls/Controls';

const Body = (props) => {
    const { data } = props;

    return (
        <Box>
            { 
                (data !== undefined) ? 
                    data.length !== 0 ? (
                        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                            {
                                data.map((brnd, index) => (
                                    <Grid item key= { index }>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                                            <Grid item md= { 2 }>
                                                <Ctrl.Typography text= { brnd.series_no } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 3 }>
                                                <Ctrl.Typography text= { brnd.name } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { brnd.total_asset } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} textAlign= "center" />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { brnd.assigned_quantity } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}  textAlign= "center" />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { brnd.unassigned_quantity } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}  textAlign= "center" />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { brnd.created_by === ',  ' ? '-' : brnd.created_by } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography 
                                                    text= { brnd.date_created === null ? '-' : `${ new Date(brnd.date_created).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(brnd.date_created).getDate() }, ${ new Date(brnd.date_created).getFullYear() } 
                                                                ${ new Date(brnd.date_created).getHours() % 12 }:${ new Date(brnd.date_created).getMinutes() }
                                                                ${ new Date(brnd.date_created).getHours() >= 12 ? 'PM' : 'AM' }` }  
                                                    color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { brnd.updated_by === ',  ' ? '-' : brnd.updated_by } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography 
                                                    text= { brnd.date_updated === null ? '-' : `${ new Date(brnd.date_updated).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(brnd.date_updated).getDate() }, ${ new Date(brnd.date_updated).getFullYear() } 
                                                                ${ new Date(brnd.date_updated).getHours() % 12 }:${ new Date(brnd.date_updated).getMinutes() }
                                                                ${ new Date(brnd.date_updated).getHours() >= 12 ? 'PM' : 'AM' }` }  
                                                    color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    )
                     : (
                        <Grid container direction= "row" justifyContent= "center" alignItems= "center" spacing= { 1 }>
                            <Grid item>
                                <Ctrl.Typography text= "No Brand found!" color= "#bdc3c7" style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                            </Grid>
                        </Grid>
                    )
                 : (
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center" spacing= { 1 }>
                        <Grid item>
                            <Ctrl.Typography text= "No Brand found!" color= "#bdc3c7" style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                        </Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default Body;