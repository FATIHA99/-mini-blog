
import express from  "express";
import routes from './routes/routes.js'
import Db from './db/db.js' 
const app =  express();
app.set('views', './views')
app.set('view engine','ejs');
app.use (express.json())
app.use (express.urlencoded({extended:true}))
app.use(routes)

app.get('/', function(req, res) {
 res.render('./addArticle')
});


Db.sync()
.then((console.log("connexion")))
.catch(error => console.log(error))
app.listen(7080);