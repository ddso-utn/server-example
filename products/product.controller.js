export class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository
        console.log(this.productRepository)
    }

    findAll(req, res) {
        const products = this.productRepository.findAll()
        res.send(products)
    }
}