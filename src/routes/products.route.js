const routes = [{
    method: 'GET',
    url: '/products',
    handler: (request, reply) => {
        reply.send('Products');
    }
},
{
    method: 'GET',
    url: '/products/:id',
    handler: (request, reply) => {
        const { id } = request.params;
        reply.send(`Products with ID: ${id}`);
    }
}]

module.exports = routes;