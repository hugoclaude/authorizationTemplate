import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { AuthProvider } from '../context/authProvider';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);