// Libraries
import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const PDF = (props) => {
    const { name, content, orientation = 'portrait', logo = null } = props;

    const generatePdf = () => {
        const doc = new jsPDF({ orientation: orientation });
        const totalPagesExp = '{total_pages_count_string}';

        // Company logo
        // addImage(src, type, x, y, width, height)
        if(logo !== null) doc.addImage(logo.img, logo.type, 15, 12, logo.w, logo.h);

        // Company name
        doc.setTextColor('#2d3436');
        doc.setFontSize(17);
        doc.text('KC Industrial Corp.', 30, 20);

        // Table name
        doc.setFontSize(12);
        doc.setTextColor('#636e72');
        doc.text(`${name} list`, 20, 35);

        let rows = Object.keys(content);
        let keys = Object.keys(content[0]);
        let headers = {};
        let body = [];

        for (let count = 0; count < keys.length; count++) {
            headers[keys[count]] = keys[count].replace('_', ' ').charAt(0).toUpperCase() + keys[count].replace('_', ' ').slice(1);
        }
        
        for (let count = 0; count < rows.length; count++) {
            let _row = content[count];
            let _key = Object.keys(content[count]);
            let _value = [];
        
            for(let item = 0; item < _key.length; item++) {
                let _val = '';

                switch(_key[item]) {
                    case 'status':
                        _val = _row[_key[item]] === 1 ? 'Active' : 'Inactive';
                        break;
                    case 'created_by':
                        _val = _row[_key[item]] !== ',  '  ? _row[_key[item]] : ' '
                        break;
                    case 'updated_by':
                        _val = _row[_key[item]] !== ',  '  ? _row[_key[item]] : ' '
                        break;
                    default:
                        _val = _row[_key[item]];
                        break;
                }

                _value.push((_row[_key[item]] !== null ? _val : ' ').toString());
            }
            body.push(_value);
        }

        autoTable(doc, {
            theme: 'grid',
            startY: 40,
            head: [headers],
            body: body,
            headStyles: {
                textColor: '#ecf0f1',
                fillColor: '#27ae60',
                cellWidth: 'auto'
            },
            columnStyles: {
                total: {
                    halign: 'center'
                },
                total_asset: {
                    halign: 'center'
                },
                assigned_quantity: {
                    halign: 'center'
                },
                unassigned_quantity: {
                    halign: 'center'
                }
            },
            didDrawPage: (data) => {
                var str = 'Page' + doc.internal.getNumberOfPages();

                if(typeof doc.putTotalPages === 'function') {
                    str = str + ' of ' + totalPagesExp;
                }

                doc.setFontSize(10);
                const pageSize = doc.internal.pageSize;
                const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
                doc.text(str, data.settings.margin.left, pageHeight - 10);
            }
        });

        if (typeof doc.putTotalPages === 'function') {
            doc.putTotalPages(totalPagesExp)
        }

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