'use strict'

const Model = use('Model')

class Store extends Model {

    products() {
        return this.belongsToMany('App/Models/Product').pivotTable('product_store')
    }

}

module.exports = Store
