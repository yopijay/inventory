// Libraries
import React, { useContext } from 'react';
import { Box, Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

// Core
import Ctrl from '../controls/Controls';

// Context
import { DialogContext } from '../../context/DialogContext';

const Dialog = (props) => {
    const { content } = props;
    const theme = useTheme();
    const fullscreen = useMediaQuery(theme.breakpoints.down('md'));
    const { isOpen, setIsOpen } = useContext(DialogContext);

    return (
        <MuiDialog open= { isOpen } fullScreen= { fullscreen } maxWidth= "lg" fullWidth>
            <DialogTitle><Ctrl.Typography color= "" text= "Preview" sx= {{ fontSize: { xs: '90%', sm: '95%', md: '100%' }, textTransform: 'uppercase' }} /></DialogTitle>
            <DialogContent>
                { content }
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