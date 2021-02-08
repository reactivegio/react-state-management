import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

/**
 * It directs you to the chosen state management
 */
const Chooser = () => {
    return (
        <div>
            <h1>STATE MANAGEMENT</h1>
            <Link to="akita"><button className="blue">Akita</button></Link>
            <Link to="drilling"><button className="purple">Drilling component</button></Link>
            <Link to="context"><button className="pink">React Context</button></Link>
            <Link to="redux"><button className="red">Redux</button></Link>
            <Link to="recoil"><button className="orange">Recoil</button></Link>
        </div>
    )
}

export default Chooser;