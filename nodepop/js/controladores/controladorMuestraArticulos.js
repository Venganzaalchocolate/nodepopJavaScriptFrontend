
import BaseDatos from "../servicios/BaseDatos.js";
import { esquemaArticulo } from "../views.js";

export default class ControladorMuestraArticulos {

    constructor (element){
        this.element=element
    }

    async pintaArticulos() {
        try {
            // se obtienen los artículos de la base de datos con el método '.getArticulos'
            const articulos = await BaseDatos.getArticulos()
            for (const articulo of articulos) {
                // por cada articulo se crea un elemento en el html
                // document=HTML
                // createElement método propio del HTML
                const etiquetaHTMLconArticulo= document.createElement('article')
                // con innerHTML inserta el elemento con el esquema de las views 'esquemaArticulo'
                etiquetaHTMLconArticulo.innerHTML=esquemaArticulo(articulo)
                this.element.appendChild(etiquetaHTMLconArticulo)
            }
        } catch (error) {
            console.error(error)
        }
    }

}