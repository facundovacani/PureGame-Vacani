import CartWidget from "./CartWidget";
import logo from "./../../títuloLower-min.png";
import { useState, useEffect, useContext } from "react";
import NavCategorias from "./NavCategorias";
import { Link, NavLink } from "react-router-dom";
import { contextApp } from "../context/CartContext";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  const [categorias, setCategorias] = useState([]);
  const { numCart } = useContext(contextApp);
  const [active, setActive] = useState(false);
  useEffect(() => {
    setCategorias([{name: "Categoria", categorias: ["Aventura","Rol", "Deporte"]}, {name: "Consola", categorias:["Nintendo(NES)", "Playstation", "Nintendo64"] } ]);
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
        <div className={`contenedor-central-nav ${(active)? "active": ""}`}>
          <div className="inicioNav">
            <NavLink exact to="/" className="btn-nav" activeClassName="active-link" onClick={()=> setActive(!active)}>
              <span className="span1"></span>
              <span className="span2"></span>
              <span className="span3"></span>
              <span className="span4"></span>
              Inicio
            </NavLink>
          </div>
          <div className="div-lista">
            <ul>
              {categorias.map((categoria, i) => (
                <NavCategorias key={i} categoria={categoria} activo={active} cambio={setActive} />
              ))}
            </ul>
          </div>
        </div>
        <div className="icon-menu" onClick={()=> setActive(!active)}>
          <FontAwesomeIcon icon={faBars} />
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
