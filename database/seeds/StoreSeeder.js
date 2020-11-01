'use strict'

const Store = use('App/Models/Store')

class StoreSeeder {
  async run() {
    await Store.findOrCreate(
      {
        name: 'Loja Exemplo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        address: 'Av. Assis Brasil, 1500',
        city: 'Porto Alegre',
        state: 'RS'
      },
    )
  }
}

module.exports = StoreSeeder
