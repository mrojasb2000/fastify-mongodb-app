const productController = require('../controllers/product.controller')

const routes = [{
    method: 'GET',
    url: '/products',
    handler: productController.getProducts
},
{
    method: 'GET',
    url: '/products/:id',
    handler: productController.getProductById
},
{
    method: 'POST',
    url: '/products',
    handler: productController.createProduct
},
{
    method: 'PUT',
    url: '/products/:id',
    handler: productController.updateProduct
},
{
    method: 'DELETE',
    url: '/products/:id',
    handler: productController.deleteProduct
},]

module.exports = routes;