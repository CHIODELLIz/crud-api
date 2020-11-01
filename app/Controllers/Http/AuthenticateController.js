'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class AuthenticateController {

    async store({ auth, request, response }) {
        const { email, password } = request.all()
        const user = await User.findBy('email', email)

        if (!user) {
            return response
                .status(404)
                .send({ message: 'Usuário não encontrado', status: 404 })
        }

        let verify = await Hash.verify(password, user.password)

        if (verify) {
            const token = await auth
                .withRefreshToken()
                .attempt(email, password)
            return response.send({ ...user.toJSON(), ...token })
        } else {
            return response
                .status(500)
                .send({ message: 'Senha incorreta', status: 500 })
        }
    }

}

module.exports = AuthenticateController
