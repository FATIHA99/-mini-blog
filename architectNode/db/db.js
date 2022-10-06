const {Sequelize} = require ('sequelize')
 module.exports= new  Sequelize('categorie','root','123456789',{dialect:'mysql', host:'localhost'})