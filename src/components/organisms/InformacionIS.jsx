import React from "react";
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import { useNavigate } from "react-router-dom";


const InformacionIS = () => {

    const navigate = useNavigate(); // Obtén la instancia de navigate

    const iniciarSesion = () => {
        navigate("/"); 
    };

    return (
        <div id = "ColumnaPrincipal">
            <h2 id = "tituloSesion">Inicio De Sesion</h2>
            <h4 id = "inicioText">Email Addres</h4>
            <input type= "text" id = "email" placeholder ="   Enter your username" />
            <h4 id = "passwordText">Password</h4>
            <input type= "password" id = "password" placeholder = "   Enter your password"/>
            <div>&ensp;</div>
            <button onClick = {iniciarSesion} id = "entrarbtn">Entrar</button>
            <h3 id="continue"> Continue with </h3>
            <button id = "googlebtn">Iniciar sesion con Google <img  id = "googleIcon" src={google} alt=""/></button>
            <div>&ensp;</div>
            <button id = "facebookbtn">Iniciar sesion con Facebook <img id = "facebookIcon" src={facebook} alt=""/></button>
            <h3 id = "pregunta">¿No tienes cuenta? <button  id = "registrarse"> Registrate </button></h3>
        </div>
    );
}
export default InformacionIS