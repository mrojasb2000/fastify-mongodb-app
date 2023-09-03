const route = {
    method: 'GET',
    url: '/products',
    handler: (request, reply) => {
        reply.send('Products');
    }
}

module.exports = route;