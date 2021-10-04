function prueba (){
    const url='http://localhost:8000/api/'

    const urlGET=url+'articulos?_expand=nombre'

    
    const respuesta= await fetch(urlGET)

    const articulos= await respuesta.json()
    console.log(articulos.map(articulo=>this.parseaArticulo(articulo))) 
}

prueba()
