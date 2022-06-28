// Libraries
import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Core
import Ctrl from './controls/Controls';

const PDF = (props) => {
    const { name, element, content, orientation = 'portrait', logo = null } = props;

    const generatePdf = () => {
        const doc = new jsPDF({ orientation: orientation });
        const totalPagesExp = '{total_pages_count_string}';
        
        // Company logo
        if(logo !== null) doc.addImage(logo.img, logo.type, 15, 12, logo.w, logo.h);

        // Company name
        doc.setTextColor('#2d3436');
        doc.setFontSize(17);
        doc.text('KC Industrial Corp.', 30, 20);

        // Table name
        doc.setFontSize(12);
        doc.setTextColor('#636e72');
        doc.text(`${name} list`, 20, 35);

        if(content !== undefined) {
            let rows = Object.keys(content);
            let keys = Object.keys(content[0]);
            let headers = {};
            let body = [];
    
            for (let count = 0; count < keys.length; count++) {
                headers[keys[count]] = keys[count].replaceAll('_', ' ').charAt(0).toUpperCase() + keys[count].replaceAll('_', ' ').slice(1);
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
                    total_no_of_brands: {
                        halign: 'center'
                    },
                    total_no_of_assets: {
                        halign: 'center'
                    },
                    total_asset: {
                        halign: 'center'
                    },
                    assigned_assets: {
                        halign: 'center'
                    },
                    unassigned_assets: {
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
        }

        doc.save(`${name}.pdf`);
    }

    return (
        <Ctrl.Button color= "pdf" text= { element } 
            variant= "contained" fullWidth onClick= { generatePdf } />
    );
}

export default PDF;