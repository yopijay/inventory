// Libraries
import React from 'react';
import { Avatar, Box, Toolbar } from '@mui/material';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

// Asset
import Cover from '../../../../assets/images/cover.jpg';
import DP from '../../../../assets/images/profile.jpg';

const Profile = () => {

    return (
        <Box sx= {{ width: '100%', overflow: 'hidden' }}>
            <Toolbar sx= {{ display: { xs: 'none', md: 'block' } }} />
            <Box sx= {{ borderRadius: { xs: 0, md: '6px' },  width: '100%', height: '130px', margin: { md: '20px 0 0 0' }, overflow: 'hidden',
                                '@media(max-width: 770px)': { marginTop: '55px' } }}>
                <img src= { Cover } alt= "cover" width= "100%" height= "100%" />
            </Box>
            <Box sx= {{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: { xs: 'flex-start', md: 'center' }, alignItems: 'center', margin: { xs: '-37px 0 0 10px', md: '-37px 0 0 0' } }}>
                <Avatar src= { DP } alt= "profile" sx= {{ width: '75px', height: '75px' }} />
            </Box>
            <Box sx= {{ margin: '20px 0 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                <Ctrl.Typography text= "Paul John Judan" color= "text.secondary" 
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, fontWeight: 'bold', paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out', 
                        textOverflow: 'ellipsis', whiteSpace: 'nowrap',  }} />
                <Ctrl.Typography text= "IT Programmer" 
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap',  }} />
                <Ctrl.Typography text= "IT/MIS"  
                    sx= {{ fontSize: { xs: '.95rem', sm: '1rem', md: '1.05rem' }, paddingLeft: { xs: '15px', md: 0 }, transition: 'all 0.2s ease-in-out', textOverflow: 'ellipsis', whiteSpace: 'nowrap',  }} />
            </Box>
            <Box sx= {{ width: '100%', height: '1px', backgroundColor: '#dcdde1', margin: '30px 0' }} />
        </Box>
    );
}

export default Profile;