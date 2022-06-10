// Libraries
import React from 'react';
import jsPDF from 'jspdf';

const PDF = (props) => {
    const { name, content } = props;

    const generatePdf = () => {
        let doc = new jsPDF({ orientation: 'landscape' });
        let rows = Object.keys(content);
        let keys = Object.keys(content[0]);
        let headers = [];
        let body = [];

        for (let count = 0; count < keys.length; count++) {
            headers.push({
                id: `${keys[count].replace('_', ' ').charAt(0).toUpperCase() + keys[count].replace('_', ' ').slice(1)}`,
                name: keys[count],
                prompt: `${keys[count].replace('_', ' ').charAt(0).toUpperCase() + keys[count].replace('_', ' ').slice(1)}`,
                width: 65,
                align: 'center',
                padding: '0 10px'
            });
        }
        
        for (let count = 0; count < rows.length; count++) {
            let _row = content[count];
            let _key = Object.keys(content[count]);

            for(let item = 0; item < _key.length; item++) {
                let _val = '';

                switch(_key[item]) {
                    case 'status':
                        _val = _row[_key[item]] === 1 ? 'Active' : 'Inactive';
                        break;
                    case 'created_by':
                        _val = _row[_key[item]] !== ',  '  ? _row[_key[item]] : '-'
                        break;
                    case 'updated_by':
                        _val = _row[_key[item]] !== ',  '  ? _row[_key[item]] : '-'
                        break;
                    default:
                        _val = _row[_key[item]];
                        break;
                }
                
                _row[_key[item]] = (_row[_key[item]] !== null ? _val : '-').toString();
            }

            body.push(_row);
        }

        doc.table(1, 1, body, headers, { autoSize: true });
        doc.save(`${name}.pdf`);
    }

    return (
        <button 
            style= {{ backgroundColor: '#00b894', 
                            border: 'none', padding: '9px 15px', color: '#ffffff', fontSize: '110%', fontFamily: 'Gilroy Light', borderRadius: '5px' }}
            onClick= { generatePdf }>PDF</button>
    );
}

export default PDF;