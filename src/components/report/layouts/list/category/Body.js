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
                                data.map((ctgry, index) => (
                                    <Grid item key= { index }>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { ctgry.series_no } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 3 }>
                                                <Ctrl.Typography text= { ctgry.name } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { ctgry.total } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}  textAlign= "center" />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { ctgry.status === 1 ? 'Active' : 'Inactive' } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 2 }>
                                                <Ctrl.Typography text= { ctgry.created_by === ',  ' ? '-' : ctgry.created_by } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography 
                                                    text= { ctgry.date_created === null ? '-' : `${ new Date(ctgry.date_created).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(ctgry.date_created).getDate() }, ${ new Date(ctgry.date_created).getFullYear() } 
                                                                ${ new Date(ctgry.date_created).getHours() % 12 }:${ new Date(ctgry.date_created).getMinutes() }
                                                                ${ new Date(ctgry.date_created).getHours() >= 12 ? 'PM' : 'AM' }` }  
                                                    color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 2 }>
                                                <Ctrl.Typography text= { ctgry.updated_by === ',  ' ? '-' : ctgry.updated_by } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography 
                                                    text= { ctgry.date_updated === null ? '-' : `${ new Date(ctgry.date_updated).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(ctgry.date_updated).getDate() }, ${ new Date(ctgry.date_updated).getFullYear() } 
                                                                ${ new Date(ctgry.date_updated).getHours() % 12 }:${ new Date(ctgry.date_updated).getMinutes() }
                                                                ${ new Date(ctgry.date_updated).getHours() >= 12 ? 'PM' : 'AM' }` }  
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
                                <Ctrl.Typography text= "No category found!" color= "#bdc3c7" style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                            </Grid>
                        </Grid>
                    )
                 : (
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center" spacing= { 1 }>
                        <Grid item>
                            <Ctrl.Typography text= "No category found!" color= "#bdc3c7" style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                        </Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default Body;