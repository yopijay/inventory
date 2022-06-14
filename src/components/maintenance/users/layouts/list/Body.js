// Libraries
import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';

// Icons
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Loader
import { SnakeLoader } from '../../../../../core/loader/Loader';

const Body = (props) => {
    const { data, isLoad } = props;

    return (
        <Box>
            { 
                (!isLoad) ? 
                    data.length !== 0 ? (
                        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ padding: '10px 15px' }}>
                            {
                                data.map((user, index) => (
                                    <Grid item key= { index }>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                                            <Grid item sm= { 2 } md= { 2 } lg= { 2 } sx= {{ display: { xs: 'none', sm: 'block' } }}>
                                                <Ctrl.Typography text= { user.series_no } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item xs= { 8 } sm= { 4 } md= { 3 } lg= { 3 }>
                                                <Ctrl.Typography text= { `${user.lname}, ${user.fname} ${user.mname}` } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item sm= { 4 } md= { 3 } lg= { 2 } sx= {{ display: { xs: 'none', sm: 'block' } }}>
                                                <Ctrl.Typography text= { user.description } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 2 } lg= { 1 } sx= {{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}>
                                                <Ctrl.Typography text= { user.status === 1 ? 'Active' : 'Inactive' } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item lg= { 2 } sx= {{ display: { xs: 'none', lg: 'block' } }}>
                                                <Ctrl.Typography 
                                                    text= { `${ new Date(user.date_created).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(user.date_created).getDate() }, ${ new Date(user.date_created).getFullYear() } 
                                                                ${ new Date(user.date_created).getHours() % 12 }:${ new Date(user.date_created).getMinutes() }
                                                                ${ new Date(user.date_created).getHours() >= 12 ? 'PM' : 'AM' }` }  
                                                    color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item xs= { 4 } sm= { 2 } md= { 2 } lg= { 2 } sx= {{ textAlign: 'center' }}>
                                                <Box sx= {{ display: 'flex', flexDirectin: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Box sx= {{ margin: '5px' }}>
                                                        <Link to= { `/maintenance/users/form/update/${user.id}` } style= {{ textDecoration: 'none' }}>
                                                            <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#3498db" 
                                                                borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                                <ModeEditOutlineIcon style= {{ fontSize: '110%' }} />
                                                            </Box>
                                                        </Link>
                                                    </Box>
                                                    <Box sx= {{ margin: '5px' }}>
                                                        <Link to= { `/maintenance/users/form/view/${user.id}` } style= {{ textDecoration: 'none' }}>
                                                            <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#3498db" 
                                                                borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                                <VisibilityIcon style= {{ fontSize: '110%' }} />
                                                            </Box>
                                                        </Link>
                                                    </Box>
                                                </Box>
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
                    <Grid container direction= "row" justifyContent= "center" alignItems= "center">
                        <Grid item sx= {{ marginTop: '10px' }}><SnakeLoader bg= "#b2bec3" size= "7px" distance= "7px" /></Grid>
                    </Grid>
                )
            }
        </Box>
    );
}

export default Body;