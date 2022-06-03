// Request
import { options } from '../../request/Request';

export const Brand = () => ({
    category_id: {
        label: '*Category',
        grid: {
            xs: 12
        },
        props: {
            name: "category_id", 
            size: "small",
            padding: "12px 15px 8px 15px",
            color: "#FFFFFF"
        },
        child: [],
        type: 'select',
        option: options('category', ['id', 'name'])
    },
    name: {
        label: '*Name',
        grid: {
            md: 12
        },
        props: {
            name: 'name',
            border: 'solid 1px #bdc3c7',
            radius: '5px',
            padding: '12px 15px 8px 15px',
            size: 'small',
            fullWidth: true
        },
        child: [],
        format: 'text',
        color: '#2c3e50',
        labelSize: 15,
        type: 'textfield'
    },
    description: {
        label: 'Description',
        grid: {
            md: 12
        },
        props: {
            name: 'description',
            border: 'solid 1px #bdc3c7',
            radius: '5px',
            padding: '12px 15px 8px 15px',
            size: 'small',
            fullWidth: true
        },
        child: [],
        format: 'text',
        color: '#2c3e50',
        labelSize: 15,
        type: 'textfield'
    },
    status: {
        label: 'Status',
        grid: {
            md: 12
        },
        props: {
            name: 'status',
            border: '',
            radius: '5px',
            padding: '12px 15px 8px 15px',
            size: 'small',
            placeholder: 'Active'
        },
        child: [],
        labelSize: 15,
        type: 'checkbox'
    }
});