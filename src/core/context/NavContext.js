// Libraries
import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = (props) => {
    const [ isActive, setIsActive ] = useState(localStorage.getItem('nav') !== null ? localStorage.getItem('nav') : 'Home');
    const [ expand, setExpand ] = useState(localStorage.getItem('nav') !== null ? 
                                                                    localStorage.getItem('nav') === 'Categories' || localStorage.getItem('nav') === 'Brands' ||
                                                                    localStorage.getItem('nav') === 'Users' || localStorage.getItem('nav') === 'Assets'? 'Maintenance' :
                                                                    localStorage.getItem('nav') === 'Assign Assets' ? 'Issuance' : '' : '');

    return (
        <NavContext.Provider value= {[ isActive, setIsActive, expand, setExpand ]}>
            { props.children }
        </NavContext.Provider>
    );
}