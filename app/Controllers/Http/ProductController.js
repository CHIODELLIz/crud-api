'use strict'

const Product = use('App/Models/Product')

const entityFields = [
  'name',
  'description',
  'price',
]
class ProductController {

  async index({ request, response, view }) {
    const entity = await Product.query().with('stores').fetch()
    return response.send(entity.toJSON())
  }

  async store({ request, response }) {
    const entityData = request.only(entityFields)
    const stores = request.input('stores')
    const entity = await Product.create(entityData)

    if (stores) {
      await entity.stores().sync(stores);
    }

    return response.send(entity.toJSON())
  }

  async show({ params, request, response }) {
    const { id } = params
    const entity = await Product.find(id)

    return response.send(entity.toJSON())
  }

  async update({ params, request, response }) {
    const { id } = params
    const entityData = request.only(entityFields)
    const stores = request.input('stores')
    const entity = await Product.find(id)

    if (stores) {
      await entity.stores().sync(stores);
    }

    await entity.merge(entityData)
    await entity.save()

    return response.send(entity.toJSON())
  }

  async destroy({ params, request, response }) {
    const { id } = params
    const entity = await Product.find(id)

    await entity.delete()

    return response.send(entity.toJSON())
  }
}

module.exports = ProductController
