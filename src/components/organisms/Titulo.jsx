import React from "react";
import { useNavigate } from "react-router-dom"; 
import logoInternet from '../../assets/logoInternet.png';

const Titulo = () => {

    const navigate = useNavigate(); // Obtén la instancia de navigate

    const iniciarSesion = () => {
        navigate("/IniciarSesion"); 
    };

    return (
        <div id="Titulo">
            <h1>Servicio de Internet Space</h1>
            <img id="logo" src={logoInternet} alt="" />
            <button onClick={iniciarSesion} id="inicioSesionBtn">Iniciar Sesion</button>
        </div>
    );
}

export default Titulo;
