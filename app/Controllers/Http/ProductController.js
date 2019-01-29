'use strict'

const Product = use('App/Models/Product');


class ProductController {
    async index({ request, response}){
        let products = await Product.all();
        return response.status(200).json(products);
    }

    async store ({ request, response}){
        let product = await Product.create(request.all());
        return response.created(product);
    }

    async show({ params, request, response}){
        let { id } = params;
        let product = await Product.findOrFail(id);
        return response.ok(product);
    }
}

module.exports = ProductController
