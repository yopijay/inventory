// Libraries
import React from 'react';
import { IconButton as MuiIconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({
    root: {
        marginTop: 0,
        marginBottom: 0,
        '&:focus': {
            outline: 'none'
        }
    }
}));

const IconButton = ( props ) => {
    const classes = useStyles();
    const { icon, event, text, ...other } = props;

    return (
        <MuiIconButton classes= {{ root: classes.root }} onClick= { event } { ...other }>{ icon } { text }</MuiIconButton>
    );
}

export default IconButton;