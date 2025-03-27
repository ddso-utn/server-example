export class MockProductRepository {
    products = [
        {name: "Coca", price: 5},
        {name: "Harina", price: 2}
    ]

    findAll() {
        return this.products
    }
}