import React from "react";

import App from "./App"
import ProductPage from "./pages/ProductPage";

export default [
    {
        component: App,
        routes:[
            {
                path: "/product",
                component: ProductPage
            }
        ]
    }
];