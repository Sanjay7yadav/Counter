import React from "react";
import { NavLink } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Menu =()=>{
    return (
        <>
            <div className="nav">
            <button className="btn btn-danger "><NavLink  exact activeClassName="active_class" to='/'>Fucational </NavLink></button>
            <button className="btn btn-warning "><NavLink exact activeClassName="active_class" to ='/class'> class</NavLink></button>
            </div>
        
        </>
    );
}
export default Menu;