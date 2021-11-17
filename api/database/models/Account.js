const Sequelize = require("sequelize")
const connection = require("../connection")

const Account = connection.define("accounts", {
    userId:Sequelize.INTEGER,
    agency:Sequelize.STRING,
    account:Sequelize.STRING
})

Account.sync({force:false})
.catch(err => console.log(err))

module.exports = Account