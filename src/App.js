import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultLayout from '~/layouts/DefaultLayout';
function App() {
    return (
        <Router>
            <DefaultLayout />
        </Router>
    );
}

export default App;
