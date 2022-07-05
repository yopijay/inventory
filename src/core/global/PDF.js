// Libraries
import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Core
import { Box } from '@mui/material';
import { body, getDate, header, table } from './Function';

const PDF = (props) => {
    const { name, element, content, orientation = 'portrait', logo = null, type } = props;

    const generatePdf = () => {
        const doc = new jsPDF({ orientation: orientation, unit: 'px', format: 'letter', putOnlyUsedFonts: true });
        // doc.page = 1;
        
        // // Header
        // if(logo !== null) doc.addImage(logo.img, logo.type, 20, 10, logo.w, logo.h); // Company Logo
        // doc.setFontSize(15).setTextColor('#2d3436').setFont('helvetica', '', 'bold').text('KC Industrial Corp.', 42, 20); // Company name
        // doc.setFontSize(10).setTextColor('#2d3436').setFont('helvetica', '', 'normal').text('Santa Mesa Heights, Quezon City, Metro Manila', 42, 28); // Company address

        // page size w= 459 h= 594
        // if(content !== undefined) {
        //     switch(type) {
        //         case 'report':
        //                 doc.setFontSize(12).setTextColor('#636e72').setFont('helvetica', '', 'bold').text(`${name}`, 20, 50);
        //                 table(doc, header(content), body(content), 55, 20, 0, 20);
        //             break;
        //         case 'test-report':
        //                 let bi = content.basic_information;
        //                 let gs = content.general_specification;
        //                 let c = content.component;
        //                 let items = content.items;
        //                 let ci = content.construction_inspection;
        //                 let mo = content.mechanical_operation;
        //                 let eo = content.electrical_opration;

        //                 doc.setFontSize(13).setTextColor('#636e72').setFont('helvetica', '', 'bold').text(`TEST REPORT`, 20, 50);
        //                 // Start of Basic Information
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(`PROJECT`, 20, 65);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(doc.splitTextToSize(`: ${bi.project}`, 135.5), 70, 65);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(`CUSTOMER`, 20, 82);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(doc.splitTextToSize(`: ${bi.name}`, 135.5), 70, 82);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(`SERIAL NO.`, 229.5, 65);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(doc.splitTextToSize(`: ${bi.serial_no}`, 139.5), 310, 65);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(`DATE PERFORMED`, 229.5, 82);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(doc.splitTextToSize(`: ${getDate(new Date(bi.date_performed)).formatted}`, 139.5), 310, 82);
        //                 // End of Basic Information
        //                 // Start General Specification
        //                 doc.setFontSize(12).setTextColor('#636e72').setFont('helvetica', '', 'bold').text(`A. GENERAL SPECIFICATION`, 20, 110);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(`PANEL NAME`, 20, 127);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(doc.splitTextToSize(`: ${gs.panel_name}`, 113.5), 92, 127);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(`ENLOSURE TYPE`, 20, 140);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(doc.splitTextToSize(`: ${gs.enclosure_type}`, 113.5), 92, 140);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(`COLOR`, 20, 153);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(doc.splitTextToSize(`: ${gs.color}`, 113.5), 92, 153);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(`SYSTEM VOLTAGE`, 229.5, 127);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(doc.splitTextToSize(`: ${gs.voltage}`, 117.5), 310, 127);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(`PHASE / WIRE`, 229.5, 140);
        //                 doc.setFontSize(11).setTextColor('#636e72').setFont('helvetica', '', 'normal').text(doc.splitTextToSize(`: ${gs.wire}`, 117.5), 310, 140);
        //                 // End of General Specification
        //                 // Start of Components
        //                 doc.setFontSize(12).setTextColor('#636e72').setFont('helvetica', '', 'bold').text(`B. COMPONENTS LIST`, 20, 170);
        //                 let _odd = [];
        //                 let _even = [];
                        
        //                 for(let count = 0; count < items.length; count++) {
        //                     if(count % 2 !== 0) {
        //                         _odd.push(items[count]);
        //                     }
        //                     else {
        //                         _even.push(items[count]);
        //                     }
        //                 }
                        
        //                 table(doc, header(_even, true), body(_even), 177, 230, 0, 20);
        //                 table(doc, header(_odd, true), body(_odd, true), 177, 20, 0, 230);
        //                 // End of Components
        //             break;
        //         default:
        //             break;
        //     }
        // }

        window.open(doc.output('bloburl'));
        // doc.autoPrint();
        // doc.save(`${name} - ${orientation.toUpperCase()}.pdf`);
    }

    return (
        <Box sx= {{ padding: '8px 10px', color: "#FFFFFF", backgroundColor: "#e17055",
                            borderRadius: '4px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick= { generatePdf }>
            { element }
        </Box>
    );
}

export default PDF;