
import express from  "express";
import routes from './routes/routes.js'
import Db from './db/db.js' 
const app =  express();

app.use (express.json())
app.use(routes)

Db.sync()
.then((console.log("connexion")))
.catch(error => console.log(error))

app.listen(8000);
