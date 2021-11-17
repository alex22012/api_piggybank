const hapi = require("@hapi/hapi")
const connection = require("./api/database/connection")
const UserRoute = require("./api/route/User")
const AuthRoute = require("./api/route/auth")

connection.authenticate()
.catch(err => console.log(err))

const server = hapi.server({
    host:"localhost",
    port:3000
})

server.route(UserRoute)
server.route(AuthRoute)

server.start()
.then(() => {
    console.log("OK")
})
.catch(err => console.log(err))