const PixTransferModel = require("../database/models/PixTransfer")
const PixKeyModel = require("../database/models/PixKey")

const handler = {
    async newPixTransfer(request, h) {
        //Pego o id do usuario
        let {id} = request.params
        //Pego a chave de destino
        let {destinyKey} = request.payload
        //Pego o valor
        let {valor} = request.payload
        //Pego a chave dele
        try {
            let key = await PixKeyModel.findOne({where:{userId:id}})
            //De posse da chave, posso fazer a transferencia
            await PixTransferModel.create({
                originKey:key.key,
                destinationKey:destinyKey,
                amount:valor
            })
            return h.response().code(201)
        } catch (error) {
            return h.response().code(500)
        }
    }
}

module.exports = handler