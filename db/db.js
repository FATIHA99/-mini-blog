import { Sequelize } from 'sequelize'

export default new Sequelize('gestion_de_blog', 'root','root', 
{dialect: 'mysql' ,host:'localhost'})
