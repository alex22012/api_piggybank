const Account = require("../database/models/Account")

function newDigit() {
    let digit = Math.round(Math.random() * 9).toString()
    return digit
}

const handler = {
    async createAccount(request, h) {
        let account = [newDigit(),newDigit(),newDigit(),newDigit(),newDigit(),newDigit()]
        let string = ""
        account.forEach(e => {
            string += e
        })        
        try {
            let {id} = request.params
            const resp = await Account.create({
                userId:id,
                agency:"2000-0",
                account:string
            })
        } catch (error) {
            
        }
    },
    async deleteAccount(request, h) {
        let {id} = request.params
        try {
            await Account.destroy({where:{userId:id}})
            return h.response().code(204)
        } catch (error) {
            
        }
    }
}

module.exports = handler