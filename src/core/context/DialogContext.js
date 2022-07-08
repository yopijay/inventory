// LIbraries
import React, { createContext, useState } from 'react';

export const DialogContext = createContext();

export const DialogProvider = (props) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ id, setId ] = useState();
    const [ data, setData ] = useState([]);
    const [ isLoad, setIsload ] = useState(true);

    return (
        <DialogContext.Provider value= {{ isOpen, setIsOpen, id, setId, data, setData, isLoad, setIsload }}>
            { props.children }
        </DialogContext.Provider>
    );
}