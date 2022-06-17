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
        },
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
            fullWidth: true
        },
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
        },
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
        },
        type: 'select',
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
        },
        type: 'select',
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
        },
        type: 'select',
        option: years()
    },
    address: {
        label: 'Address',
        grid: {
            xs: 12
        },
        props: {
            name: 'address',
        },
        type: 'textfield'
    },
    status: {
        label: 'Status',
        grid: {
            xs: 12
        },
        props: {
            name: 'status',
            placeholder: 'Active'
        },
        type: 'checkbox'
    }
})