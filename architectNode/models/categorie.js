const  sequelize = require("sequelize") ;
const  db = require('../db/db.js') ;



const {DataTypes} =sequelize
// ! creation de la table Product 
const Product = db.define('categorie',{

    id:{
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey :true,
        autoIncrement : true ,
        allowNull :  false
    },
    title :{
          type : DataTypes.STRING,
          allowNull : false
    },
    description : {
       type : DataTypes.TEXT,
       allowNull :  true
    },
});

module.exports= Product 