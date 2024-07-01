import React from "react";
import InicioPagina from "../components/InicioPagina";
import DivAuxiliar from "../components/DivAuxiliar";
import InformacionServicios from "../components/InformacionServicios";
import Servicios from "../components/Servicios";
import DivMitad from "../components/DivMitad";
import Publicidad from "../components/Publicidad";
import Patrocinadores from "../components/Patrocinadores";

const Body = () => {
    return (
        <div id = "Body">
             <InicioPagina/>
             <DivAuxiliar/>
             <InformacionServicios/>
             <Servicios/>
             <DivMitad/>
             <Publicidad/>
             <Patrocinadores/>
        </div>
    );
}
export default Body