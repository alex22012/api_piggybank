const Transferencia = require("../database/models/Transferencia")
const Account = require("../database/models/Account")
const Sequelize = require("sequelize")

const handler = {
    async newTransfer(request, h) {
        let {id} = request.params
        try {
            await Transferencia.create({
                userId:id,//Quem fez a transferencia
                orginAgency:request.payload.originAgency,
                originAccount:request.payload.originAccount,//Na hora de pegar as transferencias, pego pela origin account
                destinationAgency:request.payload.destinationAgency,
                destinationAccount:request.payload.destinationAccount,
                amount:request.payload.amount
            })
            return h.response().code(201)
        } catch (error) {
            return h.response().code(500)
        }
    },
    async getTransfers(request, h){
        try {
            //Recebo o id do usuario na rota
            let {id} = request.params
            //Pego a conta do usuario
            let conta = await Account.findOne({where:{userId:id}})//Recebo a agencia, conta e o saldo 
            //De posse da conta, busco as transferencias
            const resp = await Transfer.findAll({where:Sequelize.or({originAccount:conta.account}, {destinationAccount:conta.account})})
            return h.response(resp).code(200)
        } catch (error) {
            return h.response().code(500)
        }
    }
}

module.exports = handler
