// Libraries
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Layouts
import Main from '../../components';

const WebRoute = () => {
    return (
        <div>
            <Routes>
                <Route exact path= '*' element= { <Main /> }></Route>
            </Routes>
        </div>
    );
}

export default WebRoute;