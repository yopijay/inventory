// Libraries
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WebRoute from './core/router/Route';

// Layouts

const Core = () => {
    return (
        <div>
            <Router>
                <WebRoute />
            </Router>
        </div>
    );
}

export default Core;