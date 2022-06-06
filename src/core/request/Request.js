// Libraries

// Global
import { _axios } from "../global/Function";
import Env from '../global/constants/Env.json';

let env = 'local';

export const getall = async (set, table) => {
    let all = await _axios(`${Env[env].url}/getall/${table}`, 'get');
    set(all);
}

export const count = async (set, table) => {
    let count = await _axios(`${Env[env].url}/count/${table}`, 'get');
    set(count[0].count);
}

export const save = async (id, data, type, table) => {
    let save = await _axios(`${Env[env].url}/${type}/${table}${id !== undefined ? `/${id}` : ''}`, 'post', data);
    if(save === 'success') window.location.href = `/${table === 'assigned_asset' ? 'assets/assign' : table}`;
}

export const get = async (id, table, set, setValues) => {
    let data = await _axios(`${Env[env].url}/get/${table}/${id}`, 'get');
    setValues(data);
    
    for(let count = 0; count < Object.keys(data[0]).length; count++) {
        let _name = Object.keys(data[0])[count];
        set(_name, data[0][_name]);
    }
}

export const sum = async(set, table, col) => {
    let sum = await _axios(`${Env[env].url}/sum/${table}/${col}`, 'get');
    set(sum);
}

export const options = async(table, cols, set) => {
    let options = await _axios(`${Env[env].url}/option/${table}/${cols}`, 'get');
    set(options);
}

export const optionsPer = async(table, cols, id) => {
    return await _axios(`${Env[env].url}/option/per/${table}/${cols}/${id !== undefined ? id.toString() : '1'}`, 'get');
}