// Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

// Assets
import './assets/font/font.css';
import './assets/css/global.css';
import './assets/css/scrollbar.css';

// Layouts
import Core from './Core';

const pageTheme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'Gilroy Light'
        ]
    },
    palette: {
        primary: {
            main: '#DF7B09'
        },
        secondary: {
            main: '#FFFFFF'
        }
    }
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
    <ThemeProvider theme= { pageTheme }>
        <CssBaseline />
        <Core />
    </ThemeProvider>
</React.StrictMode>);