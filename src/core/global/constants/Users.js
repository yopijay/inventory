import { days, months, years } from "./Date";

export const Users = () => ({
    fname: {
        label: 'First name',
        grid: {
            xs: 12,
            sm: 4
        },
        props: {
            name: 'fname',
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
    mname: {
        label: 'Middle name',
        grid: {
            xs: 12,
            sm: 4
        },
        props: {
            name: 'mname',
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
    lname: {
        label: 'Last name',
        grid: {
            xs: 12,
            sm: 4
        },
        props: {
            name: 'lname',
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
    bmonth: {
        label: '*Birth Month',
        grid: {
            xs: 12,
            sm: 4
        },
        props: {
            name: "bmonth", 
            size: "small",
            padding: "12px 15px 8px 15px",
            color: "#FFFFFF"
        },
        child: [],
        type: 'select',
        color: '#2c3e50',
        option: months()
    },
    bday: {
        label: '*Birth Day',
        grid: {
            xs: 12,
            sm: 4
        },
        props: {
            name: "bday", 
            size: "small",
            padding: "12px 15px 8px 15px",
            color: "#FFFFFF"
        },
        child: [],
        type: 'select',
        color: '#2c3e50',
        option: days()
    },
    byear: {
        label: '*Birth Year',
        grid: {
            xs: 12,
            sm: 4
        },
        props: {
            name: "byear", 
            size: "small",
            padding: "12px 15px 8px 15px",
            color: "#FFFFFF"
        },
        child: [],
        type: 'select',
        color: '#2c3e50',
        option: years()
    },
    address: {
        label: 'Address',
        grid: {
            xs: 12
        },
        props: {
            name: 'address',
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
            xs: 12
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
        color: '#2c3e50',
        labelSize: 15,
        type: 'checkbox'
    }
})