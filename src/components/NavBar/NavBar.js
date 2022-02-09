import CartWidget from "./CartWidget";
import logo from "./../../títuloLower-min.png";
import { useState, useEffect, useContext } from "react";
import NavCategorias from "./NavCategorias";
import { Link } from "react-router-dom";
import { contextApp } from "../context/CartContext";
function NavBar() {
  const [categorias, setCategorias] = useState([]);
  const { numCart } = useContext(contextApp);
  useEffect(() => {
    setTimeout(() => {
      setCategorias(["Rol", "Deporte", "Aventura", "Acción"]);
    }, 500);
  }, []);

  return (
    <header>
      <nav className="nav-bar">
        <Link className="btn-nav logo" to="/">
          <img src={logo} alt="Logo PureGame" />
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
              Inicio
            </Link>
          </div>
          <div className="div-lista">
            <ul>
              {categorias.map((categoria, i) => (
                <NavCategorias key={i} categoria={categoria} />
              ))}
            </ul>
          </div>
        </div>

        <div className="div-carrito-login">
          {numCart > 0 ? <CartWidget /> : <></>}

          <Link to="/#" className="btn-nav">
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <span className="span4"></span>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
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
