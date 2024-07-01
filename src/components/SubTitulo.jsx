import React from "react";
import lenguaje from '../assets/lenguaje.png'

const SubTitulo = () => {
    return (
    <div id = "subTitulo">
        <h2 id = "internetLine">Internet</h2><h2 id = "spaceLine" >Space</h2>
        <button onClick = "registrarseVentana()" id = "Registro-btn">Registrarse</button>
        <h2 id  = "Lenguaje">Español</h2>
        <img id = "lenguajeIMG" src={lenguaje} alt=""/>
    </div>
    );
}
export default SubTitulo