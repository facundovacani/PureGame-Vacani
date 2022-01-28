import React from 'react';
import {Link} from "react-router-dom";

const NavCategorias = ({categoria}) => {
    return (<>
        <li><Link to={`/categoria/${categoria}`} className="btn-nav"> 
                <span className="span1"></span>
                <span className="span2"></span>
                <span className="span3"></span>
                <span className="span4"></span>
            {categoria}</Link></li>
      
        </>
    );
};

export default NavCategorias;
