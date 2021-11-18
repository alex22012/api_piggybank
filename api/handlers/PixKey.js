const PixKeyModel = require("../database/models/PixKey")
const crypto = require("crypto")

const handler = {
    async createPixKey(request, h) {
        try {
            //Pego o id
            let {id} = request.params
            crypto.generateKey("aes", {length:10}, (err, key) => {
                if(!err){
                    await PixKeyModel.create({
                        userId:id,
                        key
                    })
                }else 
                    console.log(err)
            })
            return h.response().code(201)
        } catch (error) {   
            return h.response().code(500)
        }
    },
    async deletePixKey(request, h){
        try {
            let {id} = request.params
            await PixKeyModel.destroy({where:{userId:id}})
            return h.response().code(204)
        } catch (error) {
            return h.response().code(500)
        }
    }
}

module.exports = handler