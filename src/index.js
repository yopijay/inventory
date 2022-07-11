// Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Assets
import './assets/font/font.css';
import './assets/css/global.css';
import './assets/css/scrollbar.css';

// Layouts
import Core from './Core';

// Theme
import { pageTheme } from './core/global/design/Theme';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
    <ThemeProvider theme= { pageTheme }>
        <CssBaseline />
        <Core />
        <ToastContainer />
    </ThemeProvider>
</React.StrictMode>);