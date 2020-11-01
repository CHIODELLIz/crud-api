'use strict'

const Route = use('Route')

Route.group(() => {
    Route.post('/signIn', 'AuthenticateController.store')
    Route.post('/refreshToken', 'AuthenticateController.update')
}).prefix('/api/authenticate')

Route.group(() => {
    Route.get('/', 'UserController.index')
    Route.get('/profile', 'UserController.profile')
    Route.post('/', 'UserController.store').validator('User')
    Route.patch('/:id', 'UserController.update').validator('User')
    Route.delete('/:id', 'UserController.destroy')
}).prefix('/api/users').middleware('auth')

Route.group(() => {
    Route.get('/', 'StoreController.index')
    Route.post('/', 'StoreController.store').validator('Store')
    Route.patch('/:id', 'StoreController.update').validator('Store')
    Route.delete('/:id', 'StoreController.destroy')
}).prefix('/api/stores').middleware('auth')

Route.group(() => {
    Route.get('/', 'ProductController.index')
    Route.post('/', 'ProductController.store').validator('Product')
    Route.patch('/:id', 'ProductController.update').validator('Product')
    Route.delete('/:id', 'ProductController.destroy')
}).prefix('/api/products').middleware('auth')