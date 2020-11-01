'use strict'

class Store {
  get rules() {
    const storeId = this.ctx.params.id
    return {
      name: `required|unique:stores,name,id,${storeId}`,
      description: `required`,
      address: `required`,
      city: `required`,
      state: `required`,
    }
  }
  get messages() {
    return {
      'name.unique': 'Campo NOME deve ser único.',
      'name.required': 'Campo NOME é obigatório',
      'description.required': 'Campo DESCRIÇÃO é obigatório',
      'address.required': 'Campo ENDEREÇO é obigatório',
      'city.required': 'Campo CIDADE é obigatório',
      'state.required': 'Campo ESTADO é obigatório',
    }
  }
}

module.exports = Store
