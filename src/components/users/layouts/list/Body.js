// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

// Icons
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Body = (props) => {
    const { data, setType, setId } = props;

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
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%', textAlign: 'center' }} />
                                            </Grid>
                                            <Grid item md= { 4 }>
                                                <Ctrl.Typography text= { `${user.lname}, ${user.fname} ${user.mname}` } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 2 }>
                                                <Ctrl.Typography text= { user.description } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { user.status === 1 ? 'Active' : 'Inactive' } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 2 }>
                                                <Ctrl.Typography 
                                                    text= { `${ new Date(user.date_created).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(user.date_created).getDate() }, ${ new Date(user.date_created).getFullYear() } 
                                                                ${ new Date(user.date_created).getHours() % 12 }:${ new Date(user.date_created).getMinutes() }
                                                                ${ new Date(user.date_created).getHours() >= 12 ? 'PM' : 'AM' }` }  
                                                    color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 2 }>
                                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
                                                    <Grid item md= { 3 }>
                                                        <Link to= "/users/form" style= {{ textDecoration: 'none' }} onClick= { () => { setType('update'); setId(user.id); } }>
                                                            <Box padding= "10px 0" color= "#ffffff" bgcolor= "#3498db" 
                                                                borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                                <ModeEditOutlineIcon style= {{ fontSize: '110%' }} />
                                                            </Box>
                                                        </Link>
                                                    </Grid>
                                                    <Grid item md= { 3 }>
                                                        <Link to= "/users/form" style= {{ textDecoration: 'none' }} onClick= { () => { setType('view'); setId(user.id); } }>
                                                            <Box padding= "10px 0" color= "#ffffff" bgcolor= "#3498db" 
                                                                borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                                <VisibilityIcon style= {{ fontSize: '110%' }} />
                                                            </Box>
                                                        </Link>
                                                    </Grid>
                                                </Grid>
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
                                <Ctrl.Typography text= "No user found!" color= "#bdc3c7" style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                            </Grid>
                        </Grid>
                    )
                 : (
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center" spacing= { 1 }>
                        <Grid item>
                            <Ctrl.Typography text= "No user found!" color= "#bdc3c7" style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                        </Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default Body;