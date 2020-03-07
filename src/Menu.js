import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';



const Menu = () => {

    return(
        <div className="flBtn flBtn-position-br flBtn-size-medium">
        <input type="checkbox" />
        <Link to="">
            <i className="fas fa-plus"></i>		
        </Link>
        <ul className="flBtn-first">
            <li><Link to="/New"><i className="fas fa-box-open"></i></Link></li>
            <li><Link to="/Main"><i className="fas fa-video"></i></Link></li>
            <li><Link to="/"><i className="fas fa-home"></i></Link></li>
        </ul>
    </div>
    )
}

export default Menu;