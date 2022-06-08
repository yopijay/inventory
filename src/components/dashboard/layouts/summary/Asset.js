// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Core
import Ctrl from '../../../../core/global/controls/Controls';

// Request
import { sum } from '../../../../core/request/Request';

const Asset = () => {
    let [ asset, setCountAsset ] = useState();
    let [ assetAssigned, setCountAssetAssigned ] = useState();

    useEffect(() => {
        sum(setCountAsset, 'assets', 'quantity');
        sum(setCountAssetAssigned, 'assigned_asset', 'quantity');
    }, []);

    let unAssigned = asset !== undefined && assetAssigned !== undefined ? 
                                asset[0].total !== null && assetAssigned[0].total !== null ? 
                                    (parseInt(asset[0].total) - parseInt(assetAssigned[0].total)) : '0' : '0';

    return (
        <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Grid item>
                <Box width= "100%" height= "170px" 
                    bgcolor= "#1abc9c" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "flex-start" borderRadius= "6px" padding= "20px 18px">
                    <Ctrl.Typography color= "#FFFFFF" text= "TOTAL ASSETS" style= {{ fontSize: '130%' }} />
                    <Box display= "flex" flexDirection= "row" width= "100%" justifyContent= "center" alignItems= "center">
                        <Ctrl.Typography color= "#bdc3c7" text= { asset !== undefined ? asset[0].total !== null ? asset[0].total : '0' : '0' } style= {{ fontSize: '450%' }} />
                    </Box>
                </Box>
            </Grid>
            <Grid item>
                <Box width= "100%" height= "170px" 
                    bgcolor= "#1abc9c" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "flex-start" borderRadius= "6px" padding= "20px 18px">
                    <Ctrl.Typography color= "#FFFFFF" text= "ASSETS ASSIGNED" style= {{ fontSize: '130%' }} />
                    <Box display= "flex" flexDirection= "row" width= "100%" justifyContent= "center" alignItems= "center">
                        <Ctrl.Typography color= "#bdc3c7" text= { assetAssigned !== undefined ? assetAssigned[0].total !== null ? assetAssigned[0].total : '0' : '0' } style= {{ fontSize: '450%' }} />
                    </Box>
                </Box>
            </Grid>
            <Grid item>
                <Box width= "100%" height= "170px" 
                    bgcolor= "#1abc9c" display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "flex-start" borderRadius= "6px" padding= "20px 18px">
                    <Ctrl.Typography color= "#FFFFFF" text= "ASSETS UNASSIGNED" style= {{ fontSize: '130%' }} />
                    <Box display= "flex" flexDirection= "row" width= "100%" justifyContent= "center" alignItems= "center">
                        <Ctrl.Typography color= "#bdc3c7" text= { unAssigned } style= {{ fontSize: '450%' }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Asset;