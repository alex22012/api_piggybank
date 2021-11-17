const Transferencia = require("../database/models/Transferencia")

const handler = {
    async newTransfer(request, h) {
        let {id} = request.params
        try {
            await Transferencia.create({
                userId:id,
                orginAgency:request.payload.originAgency,
                originAccount:request.payload.originAccount,
                destinationAgency:request.payload.destinationAgency,
                destinationAccount:request.payload.destinationAccount,
                amount:request.payload.amount
            })
            return h.response().code(201)
        } catch (error) {
            return h.response().code(500)
        }
    }
}

module.exports = handler
