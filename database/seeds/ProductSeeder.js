'use strict'

const Product = use('App/Models/Product')

class ProductSeeder {
  async run() {
    await Product.findOrCreate(
      {
        name: 'Água mineral',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed feugiat odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        price: 4.95,
      },
    )
  }
}

module.exports = ProductSeeder
