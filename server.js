import { ProductController } from "./products/product.controller.js"

export class Server {

    #requiredControllers = [ProductController]
    #controllers = {}
    #app

    constructor(app, port = 3000) {
        this.#app = app
        this.port = port
    }

    get app() { return this.#app }

    setController(controllerClass, controller) {
        this.#controllers[controllerClass.name] = controller
    }

    getController(controllerClass) {
        const controller = this.#controllers[controllerClass.name]
        if (!controller) { throw new Error("Controller missing for the given route.") }
        return controller
    }

    configureRoutes() {
        this.app.use(express.json())
        this.app.get("/products", (req, res) => this.getController(ProductController).findAll(req,res))
        this.app.get("/users", (req, res) => this.getController(UserController).findAll(req, res))
    }

    launch() {
        this.app.listen(this.port, () => {console.log("Server running in port " + this.port)})
    }
}