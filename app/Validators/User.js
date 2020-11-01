'use strict'

class User {
  get rules() {
    const userId = this.ctx.params.id
    return {
      email: `email|unique:users,email,id,${userId}`,
      password: `required_without_all:id`,
      username: `required|unique:users,username,id,${userId}`,
    }
  }
  get messages() {
    return {
      'email.email': 'Campo EMAIL inválido.',
      'email.unique': 'Campo EMAIL deve ser único.',
      'password.required_without_all:id': 'Campo SENHA é obrigatório.',
      'username.required': 'Campo APELIDO é obigatório',
    }
  }
}

module.exports = User
