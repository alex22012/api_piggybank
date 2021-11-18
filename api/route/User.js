const UserHandler = require("../handlers/User")
const ContactHandler = require("../handlers/Contato")
const TransferHandler = require("../handlers/Transferencia")
const AccountHandler = require("../handlers/Account")

const Routes = [
    {
        method:"POST",
        path:"/users",
        handler:(request, h) => UserHandler.postUser(request, h)
    },
    {
        method:"POST",
        path:"/users/{id}/contacts",
        handler:(request, h) => ContactHandler.createContact(request, h)
    },
    {
        method:"POST",
        path:"/users/{id}/new-account",
        handler:(request, h) => AccountHandler.createAccount(request, h)
    },
    {
        method:"POST",
        path:"/users/{id}/new-transfer",
        handler:(request, h) => TransferHandler.newTransfer(request, h)
    },
    {
        method:'GET',
        path:"/users/{id}",
        handler:(request, h) => UserHandler.getUser(request, h)
    },
    {
        method:"GET", 
        path:"/users/{id}/contacts",
        handler:(request, h) => ContactHandler.getContacts(request, h)
    },
    {
        method:"GET",
        path:"/users/{id}/transfers-history",
        handler:(request, h) => TransferHandler.getTransfers(request, h)
    },
    {
        method:"PUT",
        path:"/users/{id}",
        handler:(request, h) => UserHandler.putUser(request, h)
    },
    {
        method:"DELETE",
        path:"/users/{id}",
        handler:(request, h) => UserHandler.deleteUser(request, h)
    },
    {
        method:"DELETE",
        path:"/users/{userId}/contacts/{id}",
        handler:(request, h) => ContactHandler.deleteContact(request, h)
    },
    {
        method:"DELETE",
        path:"/users/{id}/delete-account",
        handler:(request, h) => AccountHandler.deleteAccount(request, h)
    }
]

module.exports = Routes