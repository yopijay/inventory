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
                                data.map((ctgry, index) => (
                                    <Grid item key= { index }>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                                            <Grid item md= { 2 }>
                                                <Ctrl.Typography text= { ctgry.series_no } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%', textAlign: 'center' }} />
                                            </Grid>
                                            <Grid item md= { 2 }>
                                                <Ctrl.Typography text= { ctgry.name } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 3 }>
                                                <Ctrl.Typography text= { ctgry.description } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 1 }>
                                                <Ctrl.Typography text= { ctgry.status === 1 ? 'Active' : 'Inactive' } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 2 }>
                                                <Ctrl.Typography 
                                                    text= { `${ new Date(ctgry.date_created).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(ctgry.date_created).getDate() }, ${ new Date(ctgry.date_created).getFullYear() } 
                                                                ${ new Date(ctgry.date_created).getHours() % 12 }:${ new Date(ctgry.date_created).getMinutes() }
                                                                ${ new Date(ctgry.date_created).getHours() >= 12 ? 'PM' : 'AM' }` } 
                                                    color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 2 }>
                                                <Box sx= {{ display: 'flex', flexDirectin: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                    <Box sx= {{ margin: '0 5px' }}>
                                                        <Link to= "/maintenance/category/form" style= {{ textDecoration: 'none' }} onClick= { () => { setType('update'); setId(ctgry.id); } }>
                                                            <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#3498db" 
                                                                borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                                <ModeEditOutlineIcon style= {{ fontSize: '110%' }} />
                                                            </Box>
                                                        </Link>
                                                    </Box>
                                                    <Box sx= {{ margin: '0 5px' }}>
                                                        <Link to= "/maintenance/category/form" style= {{ textDecoration: 'none' }} onClick= { () => { setType('view'); setId(ctgry.id); } }>
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