const Sequelize = require("sequelize")
const connection = require("../connection")

const User = connection.define("users", {
    name:Sequelize.STRING,
    email:Sequelize.TEXT,
    password:Sequelize.STRING,
    cpf:Sequelize.TEXT,
    //birthDate:Sequelize.DATE
})

User.sync({force:false})
.catch(err => console.log(err))

module.exports = User