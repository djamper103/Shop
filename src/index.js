import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,HashRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './Redux/Store'
import AppContainer from "./AppContainer";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const PUBLIC_KEY = "pk_test_51J12GCE9ORF0ZMb0UFA5Q0mkv6CRJvWLTA4jmDp2stqCIsvZWb0oUgdi3Y9tf7IV31RRkFWirBy24V9rcoEXZmp0008sZHH7AK"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter >
            <Provider store={store}>
            <Elements stripe={stripeTestPromise}>
                <AppContainer />
                </Elements>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
