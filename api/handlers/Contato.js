const Contato = require("../database/models/Contato")

const handler = {
    async createContact(request, h) {
        try {
            let {name, contactId} = request.payload
            let {id} = request.params
            await Contato.create({
                userId:id,
                name,
                contactId
            })
            return h.response().code(201)
        } catch (error) {
            return h.response().code(500)
        }
    },
    async getContacts(request, h) {
        try {
            let {id} = request.params
            const resp = await Contato.findAll({raw:true, where:{userId:id}})
            return h.response(resp).code(200)
        } catch (error) {
            return h.response().code(500)
        }
    },
    async deleteContact(request, h) {
        try {
            let {id} = request.params
            await Contato.destroy({where:{id}})
            return h.response().code(204)
        } catch (error) {
            return h.response().code(500)
        }
    }
}

module.exports = handler