// Libraries
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Context
import { NavProvider } from './core/context/NavContext';

// Layouts
import WebRoute from './core/router/Route';

const Core = () => {
    return (
        <div>
            <Router>
                <NavProvider>
                    <WebRoute />
                </NavProvider>
            </Router>
        </div>
    );
}

export default Core;