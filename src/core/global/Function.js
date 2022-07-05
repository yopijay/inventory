// Libraries
import axios from 'axios';
import { options } from '../request/Request';
import autoTable from 'jspdf-autotable';

// Constants
import { days, months, years } from "./constants/Date";

export const _axios = (url, method, data = null) => {
    return new Promise(resolve => {
        var config = { 
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'GET, POST'
              },
            data: data
        }

        axios(config).then(function(response) {
            return resolve(response.data);
        }).catch(function(error) {
            console.log(`Ito yung error mo ${error}`);
        });
    });
}

export const formatValue = (type, value) => {
    let i = 0;
    let lastReplacedIndex = -1;

    const _format = {
        phone: '### #### ####',
        card: '#### #### #### ####',
        zipcode: '####',
        cardexpiration: '##/##',
        cvc: '###',
    }

    let mask = (_format[type]).replace(/#/g, (_, j) => {
        if(i >= value.length) {
            return '#';
        }

        lastReplacedIndex = j;
        return value[i++];
    });

    return mask.substring(0, lastReplacedIndex + 1);
}

export const getDefaultValue = (name, values) => {
    return {
        value: name === 'bmonth' ? new Date().getMonth() + 1 : 
                name === 'bday' ? new Date().getDate() : 
                name === 'byear' ? new Date().getFullYear() :
                name === 'category_id' ? "1" :
                name === 'brand_id' ? "1" :
                name === 'position' ? 'Admin' : '',
        options: name === 'bmonth' ? months() : 
                    name === 'bday' ? days(parseInt((values === undefined ? new Date().getMonth() + 1 : values.birthMonth), 10), (values === undefined ? new Date().getFullYear() : values.byear)) : 
                    name === 'byear' ? years() : 
                    name === 'category_id' ? options(name.split('_')[0], ['id', 'name']).then(result => { return result }) :
                    name === 'brand_id' ? options(name.split('_')[0], ['id', 'name']) :
                    name === 'position' ? 'Zxc' : ''
    };
}

export const header = (data) => {
    let keys = Array.isArray(data) ? Object.keys(data[0]) : Object.keys(data);
    let headers = {};
    for(let count = 0; count < keys.length; count++) {
        if(keys[count] !== 'id') {
            headers[keys[count]] = `${keys[count].charAt(0).toUpperCase()}${keys[count].replaceAll('_', ' ').slice(1)}`;
        }
        else {
            headers[keys[count]] = keys[count];
        }
    }

    return headers;
}

export const body = (data, isEven = false) => {
    let body = [];

    for(let count = 0; count < data.length; count++) {
        let _row = data[count];
        let _key = Object.keys(data[count]);
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
                case 'id': 
                    _val = isEven ? (count + 1) * 2 : (count + 1);
                    break;
                default:
                    _val = _row[_key[item]] === null ? '' : _row[_key[item]];
                    break;
            }
            _value.push((_val).toString());
        }
        body.push(_value);
    }

    return body;
}

export const table = (doc, _header, _body, top = 0, right = 0, bottom = 0, left = 0) => {
    
    return autoTable(doc, {
        theme: 'grid',
        head: [_header],
        body: _body,
        startY: top,
        rowPageBreak: 'auto',
        showHead: 'firstPage',
        margin: { top: top, right: right, bottom: bottom, left: left },
        headStyles: { textColor: '#ecf0f1', fillColor: '#487eb0', cellWidth: 'auto' },
        bodyStyles: { valign: 'top' },
        columnStyles: {
            text: { cellWidth: 'wrap' },
            quantity: { halign: 'center' },
            total_no_of_brands: { halign: 'center' },
            total_no_of_assets: { halign: 'center' },
            total_asset: { halign: 'center' },
            assigned_assets: { halign: 'center' },
            unassigned_assets: { halign: 'center' },
            status: { halign: 'center' },
            id: { halign: "center" }
        },
        didParseCell: (hook) => {
            if (hook.section === 'head') {
                if (hook.column.dataKey === 'id' || hook.column.dataKey === 'total_no_of_brands' || hook.column.dataKey === 'total_no_of_assets'
                || hook.column.dataKey === 'total_asset' || hook.column.dataKey === 'assigned_assets' || hook.column.dataKey === 'unassigned_assets' 
                || hook.column.dataKey === 'quantity'|| hook.column.dataKey === 'status') {
                    hook.cell.styles.halign = 'center';
                }
            }
        }
    });
}

export const getDate = (date) => {
    const year = date.getFullYear();
    const month = `${ (date.getMonth() + 1) >= 10 ? '' : '0' }${ date.getMonth() + 1 }`;
    const day = `${date.getDate() >= 10 ? '' : '0'}${date.getDate()}`;
    const hr = `${ (date.getHours()) >= 10 ? '' : '0' }${ date.getHours() }`;
    const min = `${ (date.getMinutes()) >= 10 ? '' : '0' }${date.getMinutes()}`;

    return {
        date: `${year}-${month}-${day}T${hr}:${min}`,
        formatted: `${date.toLocaleString('default', { month: 'long' })} ${day}, ${year} ${ (date.getHours() % 12) >= 10 ? '' : '0' }${ date.getHours() % 12 }:${min} ${hr > 12 ? 'PM' : 'AM'}`
    }
}