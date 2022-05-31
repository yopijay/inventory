// Libraries
import { RadioGroup, Radio as MuiRadio, FormControlLabel } from '@material-ui/core';
import React from 'react';

const Radio = ( props ) => {
    const { name, value, items, event, ...other } = props;
    return (
        <>
            <RadioGroup row name= { name } value= { value } onChange= { event }>
                {
                    items.map((item, index) => (
                        <FormControlLabel key= { index } value= { item.id } control= { <MuiRadio/> } label= { item.title } { ...other }/>
                    ))
                }
            </RadioGroup>
        </>
    );
}

export default Radio;