// Libraries
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

// Core
import Ctrl from '../controls/Controls';
import Export from './Export';
import Print from './Print';

// Context
import { DialogContext } from '../../context/DialogContext';

// Assets
import Logo from '../../../assets/images/logo.png';
import PrintIcon from '@mui/icons-material/Print';
import ArticleIcon from '@mui/icons-material/Article';

// Request
import { excel } from '../../request/Request';

const Dialog = (props) => {
    const { content, name } = props;
    const theme = useTheme();
    const fullscreen = useMediaQuery(theme.breakpoints.down('lg'));
    const { isOpen, setIsOpen } = useContext(DialogContext);
    const [ xlsx, setXlsx ] = useState([]);
    const _print = useRef();
    // eslint-disable-next-line
    const [ isLoad, setIsLoad ] = useState(true);

    useEffect(() => {
        excel(setXlsx, name, setIsLoad);
    }, []);

    return (
        <MuiDialog open= { isOpen } fullScreen= { fullscreen } maxWidth= "lg" fullWidth>
            <DialogTitle>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Print name= { `${name.charAt(0).toUpperCase()}${name.replaceAll('_', ' ').slice(1)}` } content= { () => _print.current }
                        element= { 
                            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: `${name !== 'test_report' ? '0 5px' : '0' }`, 
                                                overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #487eb0', cursor: 'pointer' }}>
                                <PrintIcon sx= {{ fontSize: '200%', padding: '6px', backgroundColor: '#487eb0', color: '#FFFFFF' }} />
                                <Ctrl.Typography text= "Print" color= "#487eb0" sx= {{ padding: '0 10px' }} />
                            </Box> } />
                    {
                        name !== 'test_report' ? (
                            <Export filename= { `${name.charAt(0).toUpperCase()}${name.replaceAll('_', ' ').slice(1)}` } data= { xlsx } 
                                column= { xlsx !== undefined ? (Object.keys(xlsx)).length !== 0 ? Object.keys(xlsx[0]) : [] : [] }
                                element= { 
                                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 5px', 
                                                        overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #1b8a0d', cursor: 'pointer' }}>
                                        <ArticleIcon sx= {{ fontSize: '250%', padding: '6px', backgroundColor: '#1b8a0d', color: '#FFFFFF' }} />
                                        <Ctrl.Typography text= "Export to Excel" color= "#1b8a0d" sx= {{ padding: '0 10px', display: { xs: 'none', sm: 'block' } }} />
                                    </Box> } />
                        ) : ( '' )
                    }
                </Box>
            </DialogTitle>
            <DialogContent sx= {{ '&::-webkit-scrollbar': { display: 'none' } }}>
                <Box sx= {{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Ctrl.Typography text= "PREVIEW NOT AVAILABLE IN SMALL DEVICES" sx= {{ fontSize: { xs: '130%', sm: '150%', md: '180%' }, fontWeight: 'bold',
                                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'wrap', color: '#b2bec3', textAlign: 'center' }} />
                </Box>
                <Box sx= {{ display: { xs: 'none', md: 'block' } }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', '@media print': { margin: '30px !important' } }} ref= { _print }>
                        <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '25px' }}>
                            <Box sx= {{ marginRight: { xs: '10px', md: '20px' } }}><img src= { Logo } alt= "Brand" width= "50px" height= "50px" /></Box>
                            <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                                <Box sx= {{ marginTop: '-5px', paddingRight: '10px' }}>
                                    <Ctrl.Typography text= "KC Industrial Corp." sx= {{ fontSize: { xs: '100%', sm: '110%', md: '130%' }, fontWeight: 'bold',
                                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                                </Box>
                                <Box sx= {{ marginTop: '-5px', paddingRight: '10px' }}>
                                    <Ctrl.Typography text= "Santa Mesa Heights, Quezon City, Metro Manila" sx= {{ fontSize: { xs: '90%', sm: '95%', md: '100%' },
                                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box>{ content }</Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box sx= {{ display: 'flex', flexDirection: "row", justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Ctrl.Button color= "primary" sx= {{ width: '200px' }} onClick= { () => setIsOpen(false) } 
                        text= {
                            <Ctrl.Typography color= "#ffffff" text= "Close" 
                                sx= {{ padding: { xs: '1.9px 0' }, fontSize: { xs: '90%', sm: '95%', md: '100%' }, borderRadius: '4px', width: '100%', textAlign: 'center' }} /> } variant= "contained" />
                </Box>
            </DialogActions>
        </MuiDialog>
    );
}

export default Dialog;