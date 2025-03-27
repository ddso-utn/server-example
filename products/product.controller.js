export class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository
    }

    findAll(req, res) {
        const products = this.productRepository.findAll()
        res.send(products)
    }
}