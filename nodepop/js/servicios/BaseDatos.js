const url='http://localhost:8000/api/'

export default {
    parseaArticulo: (articulo)=>{
        articulo.pepe = 'pepe'
        articulo.nombre = articulo.nombre
        return articulo
    }, 

    // hago una petición GET a la Base de Datos
    getArticulos: async ()=>{
        // completo la url
        const urlGET=url+'articulos?_expand=nombre'
        // La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.
        
        const respuesta= await fetch(urlGET)

        if (respuesta.ok) {
            // si la repsuesta es ok me conviertes los articulos en un json
            const articulos= await respuesta.json()
            // me parseas(transformas) el json con .map con el método parseaArticulo
            return articulos.map(element=>this.parseaArticulo(element))
            //return articulos

        } else {
            console.error('Error al recuperar los articulos')
        }
    }
}