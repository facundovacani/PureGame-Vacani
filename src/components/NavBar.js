import CartWidget from "./CartWidget";

function NavBar(){
    return (
    <header>
        <nav className="navBar">
            <a className="logo" href="/#">PureGame</a>
            <div className="contenedor-central-nav">
                <div className="inicioNav">
                    <a href="/#" className="btn-nav">
                        <span class="span1"></span>
                        <span class="span2"></span>
                        <span class="span3"></span>
                        <span class="span4"></span>    
                    Inicio</a>
                </div>
                <div className="div-lista">
                    <ul>
                        <li><a href="/#" className="btn-nav"> 
                                <span class="span1"></span>
                                <span class="span2"></span>
                                <span class="span3"></span>
                                <span class="span4"></span>
                            Acción</a></li>
                        <li><a href="/#" className="btn-nav">
                                <span class="span1"></span>
                                <span class="span2"></span>
                                <span class="span3"></span>
                                <span class="span4"></span>
                            Estrategía</a></li>
                        <li><a href="/#" className="btn-nav">
                                <span class="span1"></span>
                                <span class="span2"></span>
                                <span class="span3"></span>
                                <span class="span4"></span>
                            Terror</a></li>
                    </ul>
                </div>
            </div>

            <div className="div-carrito-login">
                <CartWidget />
                <a href="/#" className="btn-nav">
                    <span class="span1"></span>
                    <span class="span2"></span>
                    <span class="span3"></span>
                    <span class="span4"></span>
                Login</a>
            </div>
        </nav>

    
    </header>
    )
}

export default NavBar;