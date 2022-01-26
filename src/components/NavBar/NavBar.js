import CartWidget from "./CartWidget";
import logo from "./../../títuloLower-min.png";
import { useState, useEffect } from "react";
import NavCategorias from "./NavCategorias";
import {Link} from "react-router-dom";
function NavBar(){
    const [categorias, setCategorias] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setCategorias(["Rol","Deporte", "Aventura"])
        } , 500)
    },[])

    return (
    <header>
        <nav className="nav-bar">
            <Link className="btn-nav logo" to="/"><img src={logo} alt="Logo PureGame" />
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
            </Link>
            <div className="contenedor-central-nav">
                <div className="inicioNav">
                    <Link to="/" className="btn-nav">
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>    
                    Inicio</Link>
                </div>
                <div className="div-lista">
                    <ul>
                        {categorias.map((categoria) => <NavCategorias categoria={categoria} /> )}
                    </ul>
                </div>
            </div>

            <div className="div-carrito-login">
                <CartWidget />
                <Link to="/#" className="btn-nav">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span className="span4"></span>
                Login</Link>
            </div>
        </nav>
    
    </header>
    )
}

export default NavBar;

/*
<li><a href="/#" className="btn-nav"> 
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
        <span className="span4"></span>
    Acción</a></li>
<li><a href="/#" className="btn-nav">
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
        <span className="span4"></span>
    Estrategía</a></li>
<li><a href="/#" className="btn-nav">
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
        <span className="span4"></span>
    Terror</a></li>

*/