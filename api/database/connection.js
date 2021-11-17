const Sequelize = require("sequelize")

const connection = new Sequelize("mobile", "root", "password", {
    host:"localhost",
    dialect:"mysql"
})

module.exports = connection