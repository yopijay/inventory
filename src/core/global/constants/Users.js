import { days, months, years } from "./Date";
import { civil_status } from "./Status";

export const Users = () => ({
    fname: {
        label: '*First name',
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
        label: '*Last name',
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
    civil_status: {
        label: '*Civil Status',
        grid: {
            xs: 12,
            sm: 4
        },
        props: {
            name: "civil_status", 
        },
        type: 'select',
        option: civil_status()
    },
    position_id: {
        label: '*Position',
        grid: {
            xs: 12,
            sm: 4
        },
        props: {
            name: "position_id", 
        },
        type: 'select',
        option: []
    },
    department_id: {
        label: '*Department',
        grid: {
            xs: 12,
            sm: 4
        },
        props: {
            name: "department_id", 
        },
        type: 'select',
        option: []
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