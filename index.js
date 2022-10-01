// const express = require('express'); //el default es comonjs no marcar error
import express from 'express'; //Colocarle type module antes del autor para que funcione
import router from './routes/index.js';
import db from './config/dv.js';

 
const app = express();

//Conectar la base de datos
db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch(error => console.log('error'+ error))

//Definir puerto 
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual esto es un mideewer
app.use((req,res, next) => {
    
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";

    return next(); //Tocar forzarlo porque aveces no pasa se buguea
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));


//Definir la carpeta publica esto es un mideewer
app.use(express.static('public'));

//Agregar router 
app.use('/', router);


app.listen(port, () => {
    console.log(`EL servidor esta funcionando en el puerto ${port}`);
})