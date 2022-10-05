import sequelize from 'sequelize'
import db from '../db/db.js' 

const {DataTypes} = sequelize
const Article = db.define('article', {
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },

    author : {
        type : DataTypes.STRING,
        allowNull : false
    },
    content : {
        type : DataTypes.TEXT,
        allowNull : true
    },

    image : {
        type : DataTypes.STRING,
        allowNull : false
    }
}
);

// Categorie.hasMany(Article);
// Article.belongsTo(Categorie)
export default Article