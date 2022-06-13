// Libraries
import React from 'react';
import ReactToPrint from 'react-to-print';

const Print = (props) => {
    const { content, name } = props;
    return (
        <ReactToPrint
            documentTitle= { name }
            trigger= { () => <button style= {{ backgroundColor: '#00b894', 
                                                            border: 'none', padding: '9px 15px', color: '#ffffff', fontSize: '110%', fontFamily: 'Gilroy Light', borderRadius: '5px' }}>PRINT</button>
            } content= { content } />
    )
}

export default Print;