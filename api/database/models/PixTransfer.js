const Sequelize = require("sequelize")
const connection = require("../connection")

const PixTransfer = connection.define("pixtransfers", {
    originKey:Sequelize.STRING,
    destinationKey:Sequelize.STRING,
    amount:Sequelize.REAL
})

PixTransfer.sync({force:false})

module.exports = PixTransfer