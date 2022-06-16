// Libraries
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Link, Route, Routes, useParams } from 'react-router-dom';

// Core
import Ctrl from '../../../../../core/global/controls/Controls';

// Constants
import { Navs } from '../../../../../core/global/constants/TestReport';

const Index = () => {
    const { type } = useParams();
    // eslint-disable-next-line
    const [ biActive, setBiActive ] = useState(localStorage.getItem('biActive') !== null ? localStorage.getItem('biActive') : false);

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" sx= {{ marginBottom: '20px' }}>
            <Grid item xs= { 12 } style= {{ borderRadius: '8px', border: 'solid 1px #ecf0f1', padding: '30px 25px', backgroundColor: '#ffffff' }}>
                <Ctrl.Typography text= { `${type !== undefined ? type.toUpperCase() : ''} TEST REPORT`} style= {{ color: '#2c3e50', fontWeight: 'bold', fontSize: '150%' }} />
                <Routes>
                    <Route exact path= "/" element= {
                        <Box>
                            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                <Grid item xs= { 3 } sx= {{ display: { xs: 'none', md: 'block' } }}></Grid>
                                <Grid item xs= { 12 } md= { 6 }>
                                    <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: '30px' }}>
                                        {
                                            Navs().map((rprt, index) => (
                                                <Box margin= "5px" key= { index }>
                                                    <Link to= { `/maintenance/test-report/form/${type}/${rprt.path}` } style= {{ textDecoration: 'none' }}>
                                                        <Box sx= {{ padding: '8px 15px 6px 15px', color: '#0984e3', border: "solid 1px #0984e3", borderRadius: '4px', display: "flex",
                                                            flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontSize: '98%', textAlign: 'center', textTransform: 'uppercase', 
                                                            '&: hover': { backgroundColor: '#0984e3', transition: 'all 0.3s ease-in-out', color: '#ffffff' }  }}>{ rprt.name }</Box>
                                                    </Link>
                                                </Box>
                                            ))
                                        }
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box width= "100%" marginTop= "30px" display= "flex" flexDirection= "row" justifyContent= "flex-end" aligItems= "center">
                                <Link to= "/maintenance/test-report" style= {{ textDecoration: 'none' }}>
                                    <Box padding= "6px 15px" color= "#ffffff" bgcolor= "#e74c3c" 
                                        borderRadius= "4px" display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center" 
                                        style= {{ fontSize: '98%' }}>CANCEL</Box>
                                </Link>
                            </Box>
                        </Box>
                    } />
                    {
                        Navs().map((routes, index) => (
                            <Route exact path= { `/${routes.path}` } element= { routes.component } key= { index } />
                        ))
                    }
                </Routes>
            </Grid>
        </Grid>
    );
}

export default Index;