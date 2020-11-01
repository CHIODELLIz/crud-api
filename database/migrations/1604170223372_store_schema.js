'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoreSchema extends Schema {
  up() {
    this.create('stores', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.text('description').notNullable()
      table.string('address').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('stores')
  }
}

module.exports = StoreSchema
