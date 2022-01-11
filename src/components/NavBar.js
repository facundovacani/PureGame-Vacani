function NavBar(){
    return (
    <header>
        <nav className="navBar">
            <a className="logo" href="#">PureGame</a>
            <div className="contenedor-central-nav">
                <div className="inicioNav activo">
                    <a href="#">Inicio</a>
                </div>
                <div className="div-lista">
                    <ul>
                        <li><a href="#">Acción</a></li>
                        <li><a href="#">Estrategía</a></li>
                        <li><a href="#">Terror</a></li>
                    </ul>
                </div>
            </div>
            <a href="#" className="login activo">Login</a>
        </nav>

    
    </header>
    )
}

export default NavBar;