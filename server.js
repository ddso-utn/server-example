import { ProductController } from "./products/product.controller.js"

export class Server {

    #controllers = {}
    #app

    constructor(app, port = 3000) {
        this.#app = app
        this.port = port
    }

    get app() { return this.#app }

    addController(name, controller) {
        this.#controllers[name] = controller
    }

    getController(name) {
        const controller = this.#controllers[name]
        if (!controller) { throw new Error("Controller missing for the given route.") }
        return this.#controllers[name]
    }

    configureRoutes() {
        this.app.get("/products", (req, res) => this.getController(ProductController.name).findAll(req,res))
        this.app.get("/users", (req, res) => this.getController(UserController.name).findAll(req, res))
    }

    launch() {
        this.app.listen(this.port, () => {console.log("Server running in port " + this.port)})
    }
}