import Sequelize from "sequelize"; 
import db from '../config/dv.js';

export const Testimonial = db.define('testimoniales',{

    nombre: {
        type: Sequelize.STRING,
    },

    correo: {
        type: Sequelize.STRING,
    },

    mensaje: {
        type: Sequelize.STRING,
    }

} )