const Product = require('../models/product.model');

const getProducts = async (request, reply) => {
    const products = await Product.find();
    return products;
}

const getProductById = async (request, reply) => {
    const { id } = request.params;
    const product = await Product.findById(id);
    if (product == null) {
        reply.code(404).send("Product not found")
    } 
    return product
}

const createProduct = async (request, reply) => {
    const newProduct = new Product(request.body);
    await newProduct.save()
    reply.code(201).send(newProduct);
}

const updateProduct = async (request, reply) => {
   const product = await Product.findByIdAndUpdate(request.params.id, request.body, {new: true});
   return product
}

const deleteProduct = async (request, reply) => {
    await Product.findByIdAndDelete(request.params.id)
    reply.code(204).send("Product deleled");
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}