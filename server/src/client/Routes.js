import React from "react";

import App from "./App"
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";

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