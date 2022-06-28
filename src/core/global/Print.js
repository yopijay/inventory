// Libraries
import React from 'react';
import ReactToPrint from 'react-to-print';

// Core
import Ctrl from './controls/Controls';

const Print = (props) => {
    const { content, name, element } = props;
    return (
        <ReactToPrint
            documentTitle= { name }
            trigger= {  () => <Ctrl.Button color= "primary" text= { element } variant= "contained" /> } content= { content } />
    )
}

export default Print;