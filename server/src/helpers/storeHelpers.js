import axios from 'axios';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { matchRoutes } from "react-router-config";

import reducers from "../client/reducers";

export default (req) => {

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8765',
        headers: { cookie: req.get('cookie') || '' }
    });

    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

    return store;
}

export const loadStore = (routes, httpContext, store) => {

    const {req, res} = httpContext;
  
    const promises = matchRoutes(routes, req.path).reduce((dispatchPromises ,{route}) => {
       
        const latestdispatchPromise = dispatchNeeds(route.component.needs, store);
        
        return [...dispatchPromises, ...latestdispatchPromise];
    }, []);
  
    return Promise.all(promises);
}

const dispatchNeeds = (needs, store) => needs? needs.map(need => store.dispatch(need())): [];
