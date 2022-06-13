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
    const { data } = props;

    return (
        <Box>
            { 
                (data !== undefined) ? 
                    data.length !== 0 ? (
                        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= {{ padding: '10px 15px' }}>
                            {
                                data.map((ctgry, index) => (
                                    <Grid item key= { index }>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                                            <Grid item sm= { 3 } md= { 2 } lg= { 2 } sx= {{ display: { xs: 'none', sm: 'block' } }}>
                                                <Ctrl.Typography text= { ctgry.series_no } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%', textAlign: 'center' }} />
                                            </Grid>
                                            <Grid item xs= { 8 } sm= { 6 } md= { 4 } lg= { 3 }>
                                                <Ctrl.Typography text= { ctgry.name } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item md= { 3 } lg= { 2 } sx= {{ display: { xs: 'none', md: 'block' } }}>
                                                <Ctrl.Typography text= { ctgry.description } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item sm= { 1 } md= { 1 } lg= { 1 } sx= {{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
                                                <Ctrl.Typography text= { ctgry.status === 1 ? 'Active' : 'Inactive' } color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item lg= { 2 } sx= {{ display: { xs: 'none', lg: 'block' } }}>
                                                <Ctrl.Typography 
                                                    text= { `${ new Date(ctgry.date_created).toLocaleString('default', { month: 'long' }) }
                                                                ${ new Date(ctgry.date_created).getDate() }, ${ new Date(ctgry.date_created).getFullYear() } 
                                                                ${ new Date(ctgry.date_created).getHours() % 12 }:${ new Date(ctgry.date_created).getMinutes() }
                                                                ${ new Date(ctgry.date_created).getHours() >= 12 ? 'PM' : 'AM' }` } 
                                                    color= "#34495e" 
                                                    style= {{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }} />
                                            </Grid>
                                            <Grid item xs= { 4 } sm= { 2 } md= { 2 } lg= { 2 }>
                                                <Box sx= {{ display: 'flex', flexDirectin: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Box sx= {{ margin: '5px' }}>
                                                        <Link to= { `/maintenance/category/form/update/${ctgry.id}` } style= {{ textDecoration: 'none' }}>
                                                            <Box padding= "8px 10px" color= "#ffffff" bgcolor= "#3498db" 
                                                                borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                                                <ModeEditOutlineIcon style= {{ fontSize: '110%' }} />
                                                            </Box>
                                                        </Link>
                                                    </Box>
                                                    <Box sx= {{ margin: '5px' }}>
                                                        <Link to= { `/maintenance/category/form/view/${ctgry.id}` } style= {{ textDecoration: 'none' }}>
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