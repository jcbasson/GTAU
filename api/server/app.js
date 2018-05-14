const url = require('url');
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class GTAUApp {
  constructor(getDelay, productController, productError) {
    this.getDelay = getDelay;
    this.productController = productController;
    this.server = null;
    this.productError = productError;
  }

  init(port) {
    const app = express();

    // Product endpoints
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/product', (req, res) => this.serve(res, this.productController.findByKey(req.query)));

    // Error handling
    app.use((err, req, res, next) => {

      const {productError: ProductError} = this;
      
      if (err instanceof ProductError) {
        this.serveError(res, productController.handleError(err));
        return;
      }

      next(err);
    });

    this.server = app.listen(port, () => console.log(`server running on port ${port}`));
  }

  close() {
    this.server && this.server.close();
    this.server = null;
  }

  serve(res, data) {
    setTimeout(() => res.send(data), this.getDelay());
  }

  serveError(res, {status, data}) {
    res.status(status).send(data);
  }
}


module.exports = {GTAUApp};
