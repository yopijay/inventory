// Libraries
import { toast } from "react-toastify";

// Global
import { _axios } from "../global/Function";
import Env from '../global/constants/Env.json';

let env = 'prod';
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

export const save = async (id, data, type, table, redirect, setError, loader) => {
    loader(true);
    await _axios(`${Env[env].url}/${type}/${table}${id !== undefined ? `/${id}` : ''}`, 'post', data).then(res => {
        loader(false);
        if(res.result === 'error') {
            (res.error).forEach((err, index) => {
                setError(err.name, { type: index === 0 ? 'focus' : '', message: err.message }, { shouldFocus: index === 0 });
            });
        }
        else {
            toast.success(res.message, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: 'colored',
                onClose: () => {
                    setTimeout(() => {
                        window.location.href = `${redirect}`
                    }, 4000);
                }
            });
        }
    }).catch(err => {
        loader(false);
        toast.error('Something went wrong!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            transition: 'slide',
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'colored'
        });
    });
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