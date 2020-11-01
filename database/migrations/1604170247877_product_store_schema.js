'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductStoreSchema extends Schema {
  up() {
    this.create('product_store', (table) => {
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('cascade').index()
      table
        .integer('store_id')
        .unsigned()
        .references('id')
        .inTable('stores')
        .onDelete('cascade').index()
      table.timestamps()
    })
  }

  down() {
    this.drop('product_store')
  }
}

module.exports = ProductStoreSchema
