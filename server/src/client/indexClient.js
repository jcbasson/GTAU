//Startup point for the client side application
import "babel-polyfill";
import axios from "axios";
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { renderRoutes }  from 'react-router-config';

import Routes from "./Routes";
import reducers from "./Reducers";

const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'));