import React from "react";

import App from "./App"
import ProductPage from "./Pages/Product/ProductPage";
import NotFoundPage from "./Pages/NotFoundPage";

export default [
    {
        component: App,
        routes:[
            {
                key: "product",
                numberOfParamsInUrl: 1,
                path: "/product/:productKey",
                component: ProductPage,
            },
            {
                path: "*",
                component: NotFoundPage,
                exact: true
            }
        ]
    }
];