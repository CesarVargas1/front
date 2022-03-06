// SE GENERA UN ENLACE A menuComponent  // se puede editar el menu desde aca directamente
 /*se realiza un arreglo en config.ts como nombre y por medio de ngfor en menu component se elimina <li> se une con item.nombre
        menuComponent :{
        home: 'Homee',
        services:'Servicess',
        team:'Teamm',
        pricing:'Pricingg',
        testimonial:'Testimoniall',
        contact:'Contactt', 
      }
    }*/
export const config = {   
    url:'http://localhost:3000',
    
    menuComponent: [
        { nombre:'Partidos', url:'#hero-area' },
        { nombre:'Equipos', url:'#services' },
        { nombre:'Eliminatorias Qatar' , url:'#team' },
        { nombre:'Apuestas', url:'#pricing' },
        { nombre:'Estadisticas', url:'#testimonial' },
        { nombre:'Contactanos', url:'#contact' }
    ],
    estadisticasComponent:{
        manageStatistics:'Manage Statistics',
        detailedStatisticsCompany:'Detailed Statistics of your Company',
        praesentImperdiet:`Praesent t ac ex sagittis, viverra nisl vel,
                           rhoncus odio.`
    },

    //textos que se repiten se crea por separado y reutiliza el codigo , no se genera con ngfor no se requiere
    utilTextComponent:{
        readMore:'Read More'
    }
}
