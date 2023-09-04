const Product = require('../models/product.model');

const getProducts = async (request, reply) => {
    return await Product.find();
}

const getProductById = async (request, reply) => {
    const data = await Product.findById(request.params.id);
    reply.send(data ? data: "Product not found")
}

const createProduct = async (request, reply) => {
    try {
        const newProduct = new Product(request.body);
        await newProduct.save()
        reply.code(201).send(newProduct);
    } catch (err) {
        console.log(err)
    }
}

const updateProduct = async (request, reply) => {
    try {
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, {new: true});
        reply.code(200).send(product);
    } catch (err) {
       console.log(err)
    }
}

const deleteProduct = async (request, reply) => {
    try {
        await Product.findByIdAndDelete(request.params.id)
        reply.code(204).send("Product deleled");
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}