import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Redux/Store'
import AppContainer from "./AppContainer";




ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter >
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
