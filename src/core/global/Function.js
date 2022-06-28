// Libraries
import axios from 'axios';
import { options } from '../request/Request';

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
    console.log(data);
}

export const getDate = (date) => {
    const year = date.getFullYear();
    const month = `${ (date.getMonth() + 1) >= 10 ? '' : '0' }${ date.getMonth() + 1 }`;
    const day = date.getDate();
    const hr = `${ (date.getHours()) >= 10 ? '' : '0' }${ date.getHours() }`;
    const min = `${ (date.getMinutes()) >= 10 ? '' : '0' }${date.getMinutes()}`;

    return {
        date: `${year}-${month}-${day}T${hr}:${min}`,
        formatted: `${date.toLocaleString('default', { month: 'long' })} ${day}, ${year} ${ (date.getHours() % 12) >= 10 ? '' : '0' }${ date.getHours() % 12 }:${min}`
    }
}