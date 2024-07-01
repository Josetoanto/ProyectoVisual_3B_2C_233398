import React from "react";
import Mapa from "../organisms/Mapa";
import Oficinas from "../organisms/Oficinas";
import Soluciones from "../organisms/Soluciones";
import Company from "../organisms/Company";
import Redes from "../organisms/Redes";
import Marca from "../organisms/Marca";

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