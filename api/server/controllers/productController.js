class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  findByKey({productKey}) {
    
    const product = this.productService.getProduct(productKey);

    return product;
  }
  static handleError(err) {
    let status;
    switch (err.type) {
      case "INVALID":
        status = 400;
        break;
      case "NOT_FOUND":
      default:
        status = 404;
        break;
    }
    return {
      status,
      data: {
        message: err.message,
        error: true
      }
    };
  }
}

module.exports = {ProductController};