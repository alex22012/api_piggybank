const UserModel = require("../database/models/User")

const handler = {
    async postUser(request, h) {
        try {
            const resp = await UserModel.create(request.payload)
            return h.response(resp.id).code(201)
        } catch (error) {
            return h.response().code(500)
        }
    },
    async getUser(request, h) {
        try {
            let {id} = request.params
            const resp = await UserModel.findOne({raw:true, where:{id}})
            return h.response(resp).code(200)
        } catch (error) {
            return h.code(500)
        }
    },
    async getUserByEmail(request, h){
        try {
            let {email, password} = request.payload
            const resp = await UserModel.findOne({raw:true, where:{email}})
            if(resp.length === 0){
                return h.response().code(404)
            }
            if(password === resp.password)
                return h.response().code(204)
            else
                return h.response().code(401)
        } catch (error) {
            return h.response().code(500)
        }
    },
    async putUser(request, h) {
        try {
            let {id} = request.params
            await UserModel.update(request.payload, {where:{id}})
            return h.response().code(204)
        } catch (error) {
            return h.code(500)
        }
    },
    async deleteUser(request, h) {
        try {
            let {id} = request.params
            await UserModel.destroy({where:{id}})
            return h.response().code(204)
        } catch (error) {
            return h.code(500)
        }
    }
}

module.exports = handler