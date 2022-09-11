

const app = require("express");
const AbortController = require("../controller/createuser");
const AbortController1  = require("../controller/updateuser");
const AbortController2  = require("../controller/Tenant_information");

const {verifyToken,verifyTokenAndAuthorication,verifyTokenAndAdmin}= require("../Auth/Auth")


const route = (app)=>{

    app.post('/register',AbortController.Register),
app.post('/login',AbortController.Login),
app.post('/AddtenantInformation',AbortController2.createData)
app.get('/GettenantInformation/:userId',AbortController2.getData)

app.get("/get",verifyTokenAndAdmin,AbortController1.getuser)
app.delete('/delete/:id',AbortController1.deleteuser)
app.put('/edit/:id',AbortController1.editTenant)

app.delete("/delete",AbortController1.deleteall)



}
module.exports = route
