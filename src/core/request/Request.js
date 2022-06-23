// Libraries

// Global
import { _axios } from "../global/Function";
import Env from '../global/constants/Env.json';

let env = 'local';

export const getall = async (set, table, loader) => {
    let all = await _axios(`${Env[env].url}/getall/${table}`, 'get');
    set(all);
    loader(false);
}

export const reports = async (set, table, loader) => {
    let reports = await _axios(`${Env[env].url}/report/${table}`, 'get');
    set(reports);
    loader(false);
}

export const count = async (set, table) => {
    let count = await _axios(`${Env[env].url}/count/${table}`, 'get');
    set(count[0].count);
}

export const save = async (id, data, type, table, redirect, setError) => {
    let save = await _axios(`${Env[env].url}/${type}/${table}${id !== undefined ? `/${id}` : ''}`, 'post', data);
    if(save.result === 'error') {
        setError( 'name', { type: 'focus', message: save.message }, { shouldFocus: true } );
    }
    else {
        window.location.href = `${redirect}`
    }
}

export const get = async (id, table, set, setValues, loader) => {
    let data = await _axios(`${Env[env].url}/get/${table}/${id}`, 'get');
    setValues(data);
    
    for(let count = 0; count < Object.keys(data[0]).length; count++) {
        let _name = Object.keys(data[0])[count];
        set(_name, data[0][_name]);
    }

    loader(false);
}

export const sum = async(set, table, col) => {
    let sum = await _axios(`${Env[env].url}/sum/${table}/${col}`, 'get');
    set(sum);
}

export const options = async(table, cols, set, loader) => {
    let options = await _axios(`${Env[env].url}/option/${table}/${cols}`, 'get');
    set(options);

    loader(false);
}

export const optionsPer = async(table, cols, set, id = null, loader) => {
    let options = await _axios(`${Env[env].url}/option/per/${table}/${cols}/${id !== undefined ? id : '1'}`, 'get');
    set(options);

    loader(false);
}