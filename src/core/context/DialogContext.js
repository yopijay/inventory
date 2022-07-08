// LIbraries
import React, { createContext, useState } from 'react';

export const DialogContext = createContext();

export const DialogProvider = (props) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ id, setId ] = useState();

    return (
        <DialogContext.Provider value= {{ isOpen, setIsOpen, id, setId }}>
            { props.children }
        </DialogContext.Provider>
    );
}