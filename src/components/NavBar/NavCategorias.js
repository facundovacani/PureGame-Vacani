import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

const NavCategorias = ({ categoria, activo, cambio }) => {
    const [active, setActive] = useState(false);
    let nameCategory = categoria.name.toLowerCase();
    return (
            <> 
                <li className='categorias'><button className="btn-nav categoria-btn" onClick={() => setActive(!active)}>
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span className="span4"></span>
                    {categoria.name}</button>
                    <ul className={`categorias-navs ${(active)? "active": ""}`}>
                        {categoria.categorias.map((item,i) => <li key={i}><NavLink to={`/${nameCategory}/${item}`} activeClassName="active-link" onClick={()=> cambio(!activo)}>{item}</NavLink></li>)}
                    </ul>
                </li>
            </>
    );
};

export default NavCategorias;
