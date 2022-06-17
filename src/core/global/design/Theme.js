// Libraries
import { createTheme } from "@mui/material";

export const pageTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1440,
            xl: 2560
        }
    },
    palette: {
        primary: {
            main: '#487eb0',
            light: '#82b9dc',
            dark: '#31517e',
            contrastText: '#e6f3f8'
        },
        secondary: {
            main: '#40739e',
            light: '#70bfe0',
            dark: '#34557b',
            contrastText: '#e3f4fa'
        },
        error: {
            main: '#e84118',
            light: '#ff8664',
            dark: '#c12c09',
            contrastText: '#fbe8e7'
        },
        warning: {
            main: '#fbc531',
            light: '#fcd153',
            dark: '#f76c12',
            contrastText: '#fef7e1'
        },
        info: {
            main: '#00a8ff',
            light: '#4dc4ff',
            dark: '#0d57a4',
            contrastText: '#e1f5ff'
        },
        success: {
            main: '#4cd137',
            light: '#8ce079',
            dark: '#007400',
            contrastText: '#ecfae8'
        },
        excel: {
            main: '#1b8a0d'
        },
        text: {
            primary: '#353b48',
            secondary: '#2f3640',
            disabled: '#dcdde1'
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'Gilroy Light'
        ],
        fontSize: 13
    },
});