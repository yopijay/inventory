export const Customer = () => ({
    name: {
        label: '*Name',
        grid: {
            xs: 12
        },
        props: {
            name: 'name'
        },
        type: 'textfield'
    },
    description: {
        label: 'Description',
        grid: {
            xs: 12
        },
        props: {
            name: 'description'
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
});