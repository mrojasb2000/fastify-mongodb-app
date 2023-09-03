const fastify = require('fastify')({
    logger: true
})

const start = async () => {
    await fastify.listen({ port: 3000 })
    fastify.log.info(`Server is running on port: ${fastify.server.address().port}`)
}

start();