import React from 'react';
import { Link } from "react-router-dom";

const NavCategorias = ({ categoria }) => {
    return (<>
        {(categoria.name === "Categoria") ?
            <>
                <li className='categorias'><button className="btn-nav">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span className="span4"></span>
                    {categoria.name}</button>
                    <ul className='categorias-navs'>
                        {categoria.categorias.map((item,i) => <li key={i}><Link to={`/categoria/${item}`}>{item}</Link></li>)}
                    </ul>
                </li>
            </>
            :
            <>
                <li className='categorias'><button className="btn-nav">
                    <span className="span1"></span>
                    <span className="span2"></span>
                    <span className="span3"></span>
                    <span className="span4"></span>
                    {categoria.name}</button>
                    <ul className='categorias-navs'>
                        {categoria.categorias.map((item,i) => <li key={i}><Link to={`/console/${item}`}>{item}</Link></li>)}
                    </ul>
                </li>

            </>

        }
        {/* <li><Link to={`/categoria/${categoria}`} className="btn-nav">
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <span className="span4"></span>
            {categoria}</Link></li> */}
    </>
    );
};

export default NavCategorias;
