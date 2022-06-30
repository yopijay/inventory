// Libraries
import { toast } from "react-toastify";

// Global
import { _axios } from "../global/Function";
import Env from '../global/constants/Env.json';

let env = 'prod';
export const getall = async (set, table, loader) => {
    await _axios(`${Env[env].url}/getall/${table}`, 'get').then(res => { set(res); loader(false); }).catch(err => { console.log(err); loader(false); });
}

export const reports = async (set, table, loader) => {
    await _axios(`${Env[env].url}/report/${table}`, 'get').then(res => { set(res); loader(false); }).catch(err => { console.log(err); loader(false); });
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
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: 'colored'
        });
    });
}

export const get = async (id, table, set, setValues, loader) => {
    let data = await _axios(`${Env[env].url}/get/${table}/${id}`, 'get').then(res => {
        setValues(data);
        
        for(let count = 0; count < Object.keys(data[0]).length; count++) {
            let _name = Object.keys(data[0])[count];
            set(_name, data[0][_name]);
        }
    
        loader(false);
    }).catch(err => { console.log(err); loader(false) });
}

export const options = async(table, cols, set, loader) => {
    await _axios(`${Env[env].url}/option/${table}/${cols}`, 'get').then(res => { set(res); loader(false); }).catch(err => { console.log(err); loader(false); });
}

export const optionsPer = async(table, cols, set, id = null, loader) => {
    await _axios(`${Env[env].url}/option/per/${table}/${cols}/${id !== undefined ? id : '1'}`, 'get').then(res => { set(res); loader(false); }).catch(err => { console.log(err); loader(false); });
}

export const excel = async(set, table, loader) => {
    await _axios(`${Env[env].url}/excel/${table}`, 'get').then(res => { set(res); loader(false); }).catch(err => { console.log(err); loader(false); });
}