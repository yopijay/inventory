// Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Box, Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

// Core
import Ctrl from '../controls/Controls';

// Context
import { DialogContext } from '../../context/DialogContext';

// Assets
import Logo from '../../../assets/images/logo.png';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PrintIcon from '@mui/icons-material/Print';
import ArticleIcon from '@mui/icons-material/Article';
import Export from './Export';
import { excel } from '../../request/Request';

const Dialog = (props) => {
    const { content, name } = props;
    const theme = useTheme();
    const fullscreen = useMediaQuery(theme.breakpoints.down('lg'));
    const { isOpen, setIsOpen } = useContext(DialogContext);
    const [ xlsx, setXlsx ] = useState([]);
    // eslint-disable-next-line
    const [ isLoad, setIsLoad ] = useState(true);

    useEffect(() => {
        excel(setXlsx, name, setIsLoad);
    }, []);

    return (
        <MuiDialog open= { isOpen } fullScreen= { fullscreen } maxWidth= "lg" fullWidth>
            <DialogTitle><Ctrl.Typography color= "" text= "Preview" sx= {{ fontSize: { xs: '90%', sm: '95%', md: '100%' }, textTransform: 'uppercase' }} /></DialogTitle>
            <DialogContent>
                <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 5px', 
                                        overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #e17055', cursor: 'pointer' }}>
                        <PictureAsPdfIcon sx= {{ fontSize: '250%', padding: '6px', backgroundColor: '#e17055', color: '#FFFFFF' }} />
                        <Ctrl.Typography text= "Generate PDF" color= "#e17055" sx= {{ padding: '0 10px' }} />
                    </Box>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 5px', 
                                        overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #487eb0', cursor: 'pointer' }}>
                        <PrintIcon sx= {{ fontSize: '250%', padding: '6px', backgroundColor: '#487eb0', color: '#FFFFFF' }} />
                        <Ctrl.Typography text= "Print" color= "#487eb0" sx= {{ padding: '0 10px' }} />
                    </Box>
                    <Export filename= { `${name.charAt(0).toUpperCase()}${name.replaceAll('_', ' ').slice(1)}` } data= { xlsx } 
                        column= { xlsx !== undefined ? (Object.keys(xlsx)).length !== 0 ? Object.keys(xlsx[0]) : [] : [] }
                        element= { 
                            <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', margin: '0 5px', 
                                                overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #1b8a0d', cursor: 'pointer' }}>
                                <ArticleIcon sx= {{ fontSize: '250%', padding: '6px', backgroundColor: '#1b8a0d', color: '#FFFFFF' }} />
                                <Ctrl.Typography text= "Export to Excel" color= "#1b8a0d" sx= {{ padding: '0 10px' }} />
                            </Box> } />
                </Box>
                <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', padding: '20px 15px' }}>
                    <Box sx= {{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '25px' }}>
                        <Box sx= {{ marginRight: '20px' }}><img src= { Logo } alt= "Brand" width= "50px" height= "50px" /></Box>
                        <Box sx= {{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
                            <Box><Ctrl.Typography text= "KC Industrial Corp." sx= {{ fontSize: { xs: '100%', sm: '110%', md: '130%' }, fontWeight: 'bold' }} /></Box>
                            <Box sx= {{ marginTop: '-5px'}}><Ctrl.Typography text= "Santa Mesa Heights, Quezon City, Metro Manila" sx= {{ fontSize: { xs: '90%', sm: '95%', md: '100%' } }} /></Box>
                        </Box>
                    </Box>
                    <Box>{ content }</Box>
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