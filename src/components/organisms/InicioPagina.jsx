import React from "react";
import mundoAzul from '../../assets/mundoAzul.png'

const InicioPagina = () => {
    return (
    <div id = "inicioPagina">
        <div id = "textoPiePagina">
            <h1 id = "eslogan">El internet es mejor cuando es rápido.</h1>
            <p id = "pieEslogan">Internet Space conexion rapida y confiable para explorar en linea sin limites, ¡Vive la mejor experiencia en linea!</p>
            <button onClick = "paquetesVentana()" id = "paquetes-btn">Paquetes</button>
        </div>
        <div id = "imagenPiePagina">
            <img id = "mundoAzul" src={mundoAzul} alt=""/>
        </div>
    </div>
    );
}
export default InicioPagina