// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';

const Body = (props) => {
    const { data } = props;

    return (
        <Box>
            { 
                (data !== undefined) ? 
                    data.length !== 0 ? (
                        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                            {
                                data.map((user, index) => (
                                    <Grid item key= { index }>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { user.series_no } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 2 }>
                                                <Ctrl.Typography text= { user.fullname } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { user.department_name } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { user.position_name } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { user.birthdate } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { user.total } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} textAlign= "center" />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { user.status === 1 ? 'Active' : 'Inactive' } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { user.created_by === ',  ' ? '-' : user.created_by } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography 
                                                    text= { user.date_created === null ? '-' : `${ new Date(user.date_created).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(user.date_created).getDate() }, ${ new Date(user.date_created).getFullYear() } 
                                                                ${ new Date(user.date_created).getHours() % 12 }:${ new Date(user.date_created).getMinutes() }
                                                                ${ new Date(user.date_created).getHours() >= 12 ? 'PM' : 'AM' }` }  
                                                    color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { user.updated_by === ',  ' ? '-' : user.updated_by } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography 
                                                    text= { user.date_updated === null ? '-' : `${ new Date(user.date_updated).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(user.date_updated).getDate() }, ${ new Date(user.date_updated).getFullYear() } 
                                                                ${ new Date(user.date_updated).getHours() % 12 }:${ new Date(user.date_updated).getMinutes() }
                                                                ${ new Date(user.date_updated).getHours() >= 12 ? 'PM' : 'AM' }` }  
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
                                <Ctrl.Typography text= "No assgined asset found!" color= "#bdc3c7" style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                            </Grid>
                        </Grid>
                    )
                 : (
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center" spacing= { 1 }>
                        <Grid item>
                            <Ctrl.Typography text= "No assgined asset found!" color= "#bdc3c7" style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                        </Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default Body;