const Sequelize = require("sequelize")
const connection = require("../connection")

const Contato = connection.define("contacts", {
    userId:Sequelize.INTEGER,
    name:Sequelize.STRING,
    contactId:Sequelize.INTEGER
})

Contato.sync({force:false})
.catch(err => console.log(err))

module.exports = Contato