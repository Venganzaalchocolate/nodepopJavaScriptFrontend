// Importamos los controladores

import ControladorMuestraArticulos from "./controladores/controladorMuestraArticulos.js"

// El objeto 'windows' representa la ventana que contiene un documento DOM (nos sirve para controlar la ventana del navegador)
// 'addEventListener' Registra un evento a un objeto en específico
// 'DOMContentLoaded' evento se activa cuando el documento HTML inicial se ha cargado y analizado por completo
// Le estamos diciendo que cuando el html este cargado haga lo siguiente
window.addEventListener('DOMContentLoaded', ()=>{

    // coger el elemento del DOM (HTML) donde quiero cargar los articulos
    const articulosDiv = document.querySelector('.articulos')

    // creamos un nuevo controlador pásandole el elemento DOM <div class='articulos'>
    const controladorMuestraArticulos = new ControladorMuestraArticulos (articulosDiv)

    // mostramos los articulos en el html con el método pintaArticulos
    controladorMuestraArticulos.pintaArticulos()

})