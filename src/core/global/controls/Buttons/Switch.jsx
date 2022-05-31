// Libraries
import { withStyles, Switch as MuiSwitch, FormControlLabel } from '@material-ui/core';
import React from 'react';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#00BE81',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#00BE81',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <MuiSwitch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

const Switch = ( props ) => {
const { label, event, name, value, ...other } = props;

const isDefault = (name, value) => ({
    target: {
    name, value
    }
});

    return (
        <FormControlLabel 
            control={ 
                <IOSSwitch checked= { value === true || value === 'true' ? true : false } onChange={ (e) => event(isDefault(name, e.target.checked)) } name= { name } /> 
            } label= { label } { ...other }/>
    );
}

export default Switch;