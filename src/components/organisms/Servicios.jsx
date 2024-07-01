import React from "react";
import internet from '../../assets/internet.png'
import smart from '../../assets/smart.png'
import TV from '../../assets/TV.png'
import enterteiment from '../../assets/enterteiment.png'


const Servicios = () => {
    return (
        <div id = "servicios">
            <div id="internet"> <img id = "internet-img" src={internet} alt=""/> <p>Internet</p></div>
            <div id="smart"> <img  id = "smart-img" src={smart} alt=""/><p>Smart Living</p></div>
            <div id="TV"> <img  id = "TV-img" src={TV} alt=""/><p>TV & Streaming</p></div>
            <div id="enterteiment"> <img id = "enterteiment-img" src={enterteiment} alt=""/><p>Enterteiment</p></div>
    </div>
    );
}
export default Servicios