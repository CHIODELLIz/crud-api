'use strict'

const User = use('App/Models/User')

const entityFields = [
  'username',
  'email',
  'password',
]
class UserController {

  async index({ request, response, view }) {
    const entity = await User.query().fetch()
    return response.send(entity.toJSON())
  }

  async store({ request, response }) {
    const entityData = request.only(entityFields)
    const entity = await User.create(entityData)

    return response.send(entity.toJSON())
  }

  async show({ params, request, response }) {
    const { id } = params
    const entity = await User.find(id)

    return response.send(entity.toJSON())
  }

  async profile({ auth, response }) {
    const { id } = await auth.getUser()
    const entity = await User.find(id)

    return response.send(entity.toJSON())
  }

  async update({ params, request, response }) {
    const { id } = params
    const { password, ...entityData } = request.only(entityFields)
    const entity = await User.find(id)

    if (password) {
      entity.update({ password: password })
    }

    await entity.merge(entityData)
    await entity.save()

    return response.send(entity.toJSON())
  }

  async destroy({ params, request, response }) {
    const { id } = params
    const entity = await User.find(id)

    await entity.delete()

    return response.send(entity.toJSON())
  }
}

module.exports = UserController
