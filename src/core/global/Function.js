// Libraries
import axios from 'axios';

// Constants
import { days, months, years } from "./constants/Date";

export const _axios = (url, method, data = null) => {
    return new Promise(resolve => {
        var config = { 
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json',
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

export const options = async (table, cols, set) => {
    const option = await _axios(`https://kcic-inventory-api.herokuapp.com/option/${table}/${cols}`, 'get');
    set(option);
}

export const getDefaultValue = (name, values, set) => {
    return {
        value: name === 'bmonth' ? new Date().getMonth() + 1 : 
                name === 'bday' ? new Date().getDate() : 
                name === 'byear' ? new Date().getFullYear() :
                name === 'category_id' ? 1 :
                name === 'brand_id' ? 1 :
                name === 'asset_id' ? 1 :
                name === 'user_id' ? 1 :
                name === 'position' ? 'Admin' : '',
        options: name === 'bmonth' ? months() : 
                    name === 'bday' ? days(parseInt((values === undefined ? new Date().getMonth() + 1 : values.birthMonth), 10), (values === undefined ? new Date().getFullYear() : values.byear)) : 
                    name === 'byear' ? years() : 
                    name === 'category_id' ? options('category', ['id', 'name'], set) :
                    name === 'brand_id' ? options('brand', ['id', 'name'], set) :
                    name === 'asset_id' ? options('assets', ['id', 'name'], set) :
                    name === 'user_id' ? options('users', ['id', "CONCAT(lname, ', ', fname, ' ', mname) AS name"], set) :
                    name === 'position' ? 'Zxc' : ''
    };
}