import axios from 'axios';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { matchRoutes } from "react-router-config";

import reducers from "../client/Reducers";

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

    const prefetchingRequests = matchRoutes(routes, req.path).reduce((dispatchPromises ,{route, match}) => {
    
        const latestdispatchPromise =  loadComponentData(route, req.url, store, match.params? match.params: null);
        
        return [...dispatchPromises, ...latestdispatchPromise];
    }, []);
  
    return Promise.all(prefetchingRequests);
}



const loadComponentData = (route, requestUrl, store, routeParams) => {

    const {component } = route;

    if(component && component.needs && component.needs.length > 0)
    {
        return  component.needs.map(need => store.dispatch(need(routeParams)))
    }
    return [];
}
