class ProductsService {
  constructor(productRepository, productError) {
    this.productRepository = productRepository;
    this.productError = productError;
  }

  getProduct(productKey) {

    if(!productKey)  throw new ProductError("INVALID", "No product key provided")

    const { productError: ProductError} = this;

    const product = this.productRepository.product[productKey];

    if(!product === null)throw new ProductError("NOT_FOUND", "Incorrect product key provided")
   
    return product;
  }
}

module.exports = {ProductsService};