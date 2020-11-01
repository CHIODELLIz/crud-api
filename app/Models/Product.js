'use strict'

const Model = use('Model')

class Product extends Model {

    stores() {
        return this.belongsToMany('App/Models/Store').pivotTable('product_store')
    }

}

module.exports = Product
