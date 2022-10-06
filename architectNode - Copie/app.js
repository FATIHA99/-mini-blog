const express = require('express')
const  routes = require('./routes/routes.js')
const Db = require('./db/db.js')
const  app =express();



app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes);

Db.sync()
.then(()=>console.log("connexion bd"))
.catch((error)=>console.log(error))
app.listen(8080);
