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

export const save = async (id, data, type, table, redirect, setError, loader, navigate) => {
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
                onClose: () => navigate(`${redirect}`, { replace: true })
            });
        }
    }).catch(err => {
        loader(false);
        console.log(err);
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

export const get = async (id, table, set, loader, obj) => {
    await _axios(`${Env[env].url}/get/${table}/${id}`, 'get').then(res => {
        for(let count = 0; count < Object.keys(res[0]).length; count++) {
            let _name = Object.keys(res[0])[count];

            if(obj !== undefined) {
                if(_name !== 'id') {
                    if(table === 'component_items') {
                        for(let count = 0; count < res.length; count++) {
                            for(let _items = 0; _items < Object.keys(res[count]).length; _items++) {
                                let _name = Object.keys(res[count])[_items];

                                if(_name !== 'component_id') {
                                    set(`${obj}[${count}][${_name}]`, res[count][_name]);
                                }
                            }
                        }
                    }
                    else {
                        set(`${obj}[${_name}]`, res[0][_name]);
                    }
                }
            }
            else {
                set(_name, res[0][_name]);
            }
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