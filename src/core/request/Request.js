// Libraries

// Global
import { _axios } from "../global/Function";

export const getall = async (set, table) => {
    let all = await _axios(`https://kcic-inventory-api.herokuapp.com/getall/${table}`, 'get');
    set(all);
}

export const count = async (set, table) => {
    let count = await _axios(`https://kcic-inventory-api.herokuapp.com/count/${table}`, 'get');
    set(count[0].count);
}

export const save = async (id, data, type, table) => {
    let save = await _axios(`https://kcic-inventory-api.herokuapp.com/${type}/${table}/${id}`, 'post', data);
    if(save === 'success') window.location.href = `/${table === 'assigned_asset' ? 'assets/assign' : table}`;
}

export const get = async (id, table, set, setValues) => {
    let data = await _axios(`https://kcic-inventory-api.herokuapp.com/get/${table}/${id}`, 'get');
    setValues(data);
    
    for(let count = 0; count < Object.keys(data[0]).length; count++) {
        let _name = Object.keys(data[0])[count];
        set(_name, data[0][_name]);
        if(_name === 'status') set('status', data[0]['status'] === 1 ? true : false);
    }
}

export const sum = async(set, table, col) => {
    let sum = await _axios(`https://kcic-inventory-api.herokuapp.com/sum/${table}/${col}`, 'get');
    set(sum);
}