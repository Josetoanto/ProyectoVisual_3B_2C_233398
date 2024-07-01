import React from "react";
import InicioPagina from "../organisms/InicioPagina";
import DivAuxiliar from "../organisms/DivAuxiliar";
import InformacionServicios from "../organisms/InformacionServicios";
import Servicios from "../organisms/Servicios";
import DivMitad from "../organisms/DivMitad";
import Publicidad from "../organisms/Publicidad";
import Patrocinadores from "../organisms/Patrocinadores";

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