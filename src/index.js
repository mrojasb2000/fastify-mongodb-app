const productRoute = require('./routes/products.route')

const fastify = require('fastify')({
    logger: true
})

fastify.route(productRoute)

fastify.get('/', async (request, reply)=> {
    reply.send('Hello World!')
})



const start = async () => {
    await fastify.listen({ port: 3000 })
    fastify.log.info(`Server is running on port: ${fastify.server.address().port}`)
}

start();