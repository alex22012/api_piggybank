const Sequelize = require("sequelize")
const connection = require("../connection")

const Transfer = connection.define("transfers", {
    userId:Sequelize.INTEGER,
    originAgency:Sequelize.STRING,
    originAccount:Sequelize.STRING,
    destinationAgency:Sequelize.STRING,
    destinationAccount:Sequelize.STRING,
    amount:Sequelize.REAL
})

Transfer.sync({force:false})
.catch(err => console.log(err))

module.exports = Transfer