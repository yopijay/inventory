export const Category = () => ({
    name: {
        label: '*Name',
        grid: {
            xs: 12
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
            xs: 12
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
});