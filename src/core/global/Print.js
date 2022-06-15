// Libraries
import React from 'react';
import ReactToPrint from 'react-to-print';

const Print = (props) => {
    const { content, name, element } = props;
    return (
        <ReactToPrint
            documentTitle= { name }
            trigger= { element } content= { content } />
    )
}

export default Print;