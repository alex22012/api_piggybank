const UserHandler = require("../handlers/User")

const AuthRoute = [
    {
        method:"POST",
        path:"/users/login",
        handler:(request, h) => UserHandler.getUserByEmail(request, h)
    }
]

module.exports = AuthRoute