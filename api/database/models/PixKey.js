const Sequelize = require("sequelize")
const connection = require("../connection")

const PixKey = connection.define("pixkey", {
    userId:Sequelize.INTEGER,
    key:Sequelize.STRING
})

PixKey.sync({force:false})

module.exports = PixKey