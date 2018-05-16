import axios from 'axios';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { matchRoutes } from "react-router-config";

import { extractUrlParamsBasedOnRoute } from "./urlHelpers";
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

    const promises = matchRoutes(routes, req.path).reduce((dispatchPromises ,{route}) => {
    
        const latestdispatchPromise =  loadComponentData(route, req.url, store);
        
        return [...dispatchPromises, ...latestdispatchPromise];
    }, []);
  
    return Promise.all(promises);
}



const loadComponentData = (route, requestUrl, store) => {

    const {component } = route;

    if(component && component.needs && component.needs.length > 0)
    {
        const params = route.numberOfParamsInUrl &&  route.numberOfParamsInUrl > 0 ? extractUrlParamsBasedOnRoute(requestUrl, route): undefined;
        return  component.needs.map(need => store.dispatch(need(params)))
    }
    return [];
}
