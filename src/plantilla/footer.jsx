import React from "react";
import Mapa from "../components/Mapa";
import Oficinas from "../components/Oficinas";
import Soluciones from "../components/Soluciones";
import Company from "../components/Company";
import Redes from "../components/Redes";
import Marca from "../components/Marca";

const Footer = () => {
    return (
        <div>
            <div id = "piePagina">
            <Mapa/>
            <Oficinas/>
            <Soluciones/>
            <Company/>
            <Redes></Redes>
            </div>
            <div>
            <Marca></Marca>
            </div>
        </div>
    );
}
export default Footer