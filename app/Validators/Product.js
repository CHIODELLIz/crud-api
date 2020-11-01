'use strict'

class Product {
  get rules() {
    const productId = this.ctx.params.id
    return {
      name: `required|unique:products,name,id,${productId}`,
      description: `required`,
      price: `required`,
    }
  }
  get messages() {
    return {
      'name.unique': 'Campo NOME deve ser único.',
      'name.required': 'Campo NOME é obigatório',
      'description.required': 'Campo DESCRIÇÃO é obigatório',
      'price.required': 'Campo PREÇO é obigatório',
    }
  }
}

module.exports = Product
