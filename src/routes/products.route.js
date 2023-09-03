const Product = require('../models/product.model');

const routes = [{
    method: 'GET',
    url: '/products',
    handler: async (request, reply) => {
        const products = await Product.find();
        reply.send(`Products: ${products}`);
    }
},
{
    method: 'GET',
    url: '/products/:id',
    handler: (request, reply) => {
        const { id } = request.params;
        reply.send(`Products with ID: ${id}`);
    }
},
{
    method: 'POST',
    url: '/products',
    handler: (request, reply) => {
        reply.send(`creating a new product`);
    }
},
{
    method: 'PUT',
    url: '/products/:id',
    handler: (request, reply) => {
        const { id } = request.params;
        reply.send(`Updating a products with ID: ${id}`);
    }
},
{
    method: 'DELETE',
    url: '/products/:id',
    handler: (request, reply) => {
        const { id } = request.params;
        reply.send(`Removing a products with ID: ${id}`);
    }
},]

module.exports = routes;