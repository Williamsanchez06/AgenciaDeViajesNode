import Sequelize from "sequelize"; 

import dotenv from 'dotenv'
// import dotenv from 'dotenv/config' Tambien se puede asi importar el dotenv pero sin la liena de abajo
dotenv.config()

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {

    host:process.env.DB_HOST,
    port:'1433',
    dialect:'mssql',
    define:{
        timestamps:false  //Se coloca porque tiende a crear columnas
     },
     pool:{ //Configuracion de sequelize
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000,
     }, 
     operatorAliases:false

});

export default db;