// LIbraries
import React, { createContext, useState } from 'react';

export const DialogContext = createContext();

export const DialogProvider = (props) => {
    const [ isOpen, setIsOpen ] = useState(true);

    return (
        <DialogContext.Provider value= {{ isOpen, setIsOpen }}>
            { props.children }
        </DialogContext.Provider>
    );
}