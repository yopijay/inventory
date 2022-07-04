// Libraries
import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Core
import { Box } from '@mui/material';

const PDF = (props) => {
    const { name, element, content, orientation = 'portrait', logo = null, type } = props;

    const generatePdf = () => {
        const doc = new jsPDF({ orientation: orientation });
        const totalPagesExp = '{total_pages_count_string}';
        
        // Company logo
        if(logo !== null) doc.addImage(logo.img, logo.type, 14, 7, logo.w, logo.h);

        // Company name
        doc.setTextColor('#2d3436');
        doc.setFontSize(15);
        doc.text('KC Industrial Corp.', 29, 12);

        doc.setTextColor('#2d3436');
        doc.setFontSize(10);
        doc.text('Santa Mesa Heights, Quezon City, Metro Manila', 29, 16);

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

            switch(type) {
                case 'report':
                        // Table name
                        doc.setFontSize(12);
                        doc.setTextColor('#636e72');
                        doc.text(`${name} list`, 14, 30);
    
                        autoTable(doc, {
                            theme: 'grid',
                            startY: 33,
                            head: [headers],
                            body: body,
                            rowPageBreak: 'auto',
                            showHead: 'firstPage',
                            headStyles: { textColor: '#ecf0f1', fillColor: '#487eb0', cellWidth: 'auto' },
                            bodyStyles: { valign: 'top' },
                            columnStyles: {
                                text: { cellWidth: 'wrap' },
                                total_no_of_brands: { halign: 'center' },
                                total_no_of_assets: { halign: 'center' },
                                total_asset: { halign: 'center' },
                                assigned_assets: { halign: 'center' },
                                unassigned_assets: { halign: 'center' },
                                id: { halign: "center" }
                            },
                            didParseCell: (hook) => {
                                if (hook.section === 'head') {
                                    if (hook.column.dataKey === 'id' || hook.column.dataKey === 'total_no_of_brands' || hook.column.dataKey === 'total_no_of_assets'
                                    || hook.column.dataKey === 'total_asset' || hook.column.dataKey === 'assigned_assets' || hook.column.dataKey === 'unassigned_assets') {
                                        hook.cell.styles.halign = 'center';
                                    }
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
                    break;

                case 'test-report':
                        doc.setFontSize(14);
                        doc.setTextColor('#636e72');
                        doc.text(`TEST REPORT`, 14, 30);
                    break;

                default: console.log('KC Industrial Corp.')
            }
    
            if (typeof doc.putTotalPages === 'function') {
                doc.putTotalPages(totalPagesExp);
            }
        }

        doc.save(`${name} - ${orientation.toUpperCase()}.pdf`);
    }

    return (
        <Box sx= {{ padding: '8px 10px', color: "#FFFFFF", backgroundColor: "#e17055",
                            borderRadius: '4px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick= { generatePdf }>
            { element }
        </Box>
    );
}

export default PDF;