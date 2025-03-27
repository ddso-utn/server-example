import request from 'supertest'
import { buildTestServer } from './utils/server.js'
import { MockProductRepository } from '../../products/product.repository.js'
import { ProductController } from '../../products/product.controller.js'

const server = buildTestServer()

const productRepository = new MockProductRepository()
const productController = new ProductController(productRepository)

server.addController(ProductController.name, productController)

describe('GET /products', () => {
    it('should return a 200 status and 2 products', async () => {
      const response = await request(server.app).get('/products');
      
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
    });
});