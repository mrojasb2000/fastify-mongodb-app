const fastify = require('fastify')({
    logger: true
})
require('./utils/mongoose')
const productRoutes = require('./routes/products.route')
const swagger = require('./utils/swagger')
fastify.register(require("fastify-swagger"), swagger.options);

productRoutes.forEach(route => {
    fastify.route(route)
})

fastify.get('/', async (request, reply)=> {
    reply.send('Hello World!')
})

const start = async () => {
    await fastify.listen({ port: 3000 })
    fastify.log.info(`Server is running on port: ${fastify.server.address().port}`)
}

start();