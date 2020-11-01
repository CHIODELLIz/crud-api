'use strict'

const User = use('App/Models/User')

class UserSeeder {
  async run() {
    await User.findOrCreate(
      {
        username: 'admin',
        email: 'admin@teste.com',
        password: '123456',
      },
    )
  }
}

module.exports = UserSeeder
