'use strict'

const Store = use('App/Models/Store')

const entityFields = [
  'name',
  'description',
  'address',
  'city',
  'state',
]
class StoreController {

  async index({ request, response, view }) {
    const entity = await Store.query().with('products').fetch()
    return response.send(entity.toJSON())
  }

  async store({ request, response }) {
    const entityData = request.only(entityFields)
    const products = request.input('products')

    const entity = await Store.create(entityData)

    if (products) {
      await entity.products().sync(products);
    }

    return response.send(entity.toJSON())
  }

  async show({ params, request, response }) {
    const { id } = params
    const entity = await Store.find(id)

    return response.send(entity.toJSON())
  }

  async update({ params, request, response }) {
    const { id } = params
    const entityData = request.only(entityFields)
    const products = request.input('products')

    const entity = await Store.find(id)

    if (products) {
      await entity.products().sync(products);
    }

    await entity.merge(entityData)
    await entity.save()

    return response.send(entity.toJSON())
  }

  async destroy({ params, request, response }) {
    const { id } = params
    const entity = await Store.find(id)

    await entity.delete()

    return response.send(entity.toJSON())
  }
}

module.exports = StoreController
