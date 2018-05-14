import "babel-polyfill";
import express from 'express';
import Routes from "./client/Routes";
import proxy from "express-http-proxy";

import renderer from "./helpers/renderer";
import createStore, { loadStore } from "./helpers/storeHelpers";

const app = express();


app.use(
    '/api',
    proxy('http://localhost:8765', {
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
      }
    })
  );

app.use(express.static('public'));
app.get("*", (req, res) => {

   const store = createStore(req);

   loadStore(Routes,{req, res}, store).then(() => {

        res.send(renderer(req, store));
   });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
})