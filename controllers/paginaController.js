import {Viaje} from "../models/Viaje.js";
import {Testimonial} from "../models/Testimoniales.js";


const paginaInicio =  async (req, res) => {


    //Consultar tres viajes del modelo viaje

    //mejora el performance y consulta las dos al mismo tiempo
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit: 3}))
    promiseDB.push(Testimonial.findAll({ limit: 3 }))

    try {
        
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1],
        });

    } catch (error) {
        console.log(error);
    }

   

};

const paginaNosotros =  (req, res) => {

    res.render('nosotros', {
        pagina: 'Nosotros',
    });

};


const paginaViajes =  async (req, res) => {

    //Consultar BD

    try {
        const viajes =  await Viaje.findAll();

        res.render('viajes', {
            pagina: 'Proximos Viajes',
            viajes, 
        });  
    } catch (error) {
        
    }
          

};


const paginaTestimoniales =  async (req, res) => {

    try {

        const testimoniales = await Testimonial.findAll();
        
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales,

        });

    } catch (error) {
        console.log(error);
    }

    

};

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

   const {loquelepasoahref} = req.params;

   try {
    
    const viaje = await Viaje.findOne({where : {slug : loquelepasoahref}});
    
    res.render('viaje', {
        pagina: 'Informacion viaje',
        viaje
    });


   } catch (error) {
    console.log(error);
   }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}