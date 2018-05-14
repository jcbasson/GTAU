const express = require('express');
const cors = require('cors');

const nodeModules = { express, cors};
const products = require('./repository/products');
const { ProductRepository } = require('./repository/productRepository');
const { ProductsService } = require('./services/productService');
const { ProductController } = require('./controllers/productController')
const { GTAUApp } = require('./app');
const {ProductError} = require('./models/ProductError');


const getDelay = () => Math.random() * 1000;
const productRepository = new ProductRepository(products);
const productsService = new ProductsService(productRepository, ProductError);
const productController = new ProductController(productsService);


const server = new GTAUApp(nodeModules, getDelay, productController, ProductError);
server.init(8765);