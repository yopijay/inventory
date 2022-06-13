// Libraries
import React from 'react';
import { Avatar, Box, Grid, Toolbar } from '@mui/material';

// Asset
import Cover from '../../../../assets/images/cover.jpg';
import DP from '../../../../assets/images/profile.jpg';

const Profile = () => {

    return (
        <Box>
            <Toolbar sx= {{ display: { xs: 'none', md: 'block' } }} />
            <Box sx= {{ overflow: 'hidden', borderRadius: { xs: 0, md: '6px' },  width: '100%', height: '130px', margin: { md: '20px 0 0 0' },
                                '@media(max-width: 770px)': { marginTop: '60px' } }}>
                <img src= { Cover } alt= "cover" width= "100%" height= "100%" />
            </Box>
            <Box sx= {{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: { xs: 'flex-start', md: 'center' }, alignItems: 'center', margin: { xs: '-37px 0 0 10px', md: '-37px 0 0 0' } }}>
                <Avatar src= { DP } alt= "profile" sx= {{ width: '75px', height: '75px' }} />
            </Box>
            <Box sx= {{ margin: '20px 0 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                <Box sx= {{ fontWeight: 'bold', color: '#2f3640', fontSize: '110%', paddingLeft: { xs: '15px', md: 0 } }}>Paul John Judan</Box>
                <Box sx= {{ color: '#353b48', fontSize: '105%', paddingLeft: { xs: '15px', md: 0 } }}>IT Programmer</Box>
                <Box sx= {{ color: '#353b48', fontSize: '105%', paddingLeft: { xs: '15px', md: 0 } }}>IT/MIS</Box>
            </Box>
            <Box sx= {{ width: '100%', height: '1px', backgroundColor: '#dcdde1', margin: '30px 0' }} />
        </Box>
    );
}

export default Profile;