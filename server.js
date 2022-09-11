const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const route = require("./router/User");
const { dbroute } = require("./db/db");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

route(app);
dbroute(app)


app.listen(3300,()=>{
    console.log("server is running");
})