import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import fondo from "./FondoConTitulo-min.jpg";
import Cart from './components/cart/Cart';
import CartContext from './components/context/CartContext';

function App() {
  return (
    <>
      <CartContext>

        <BrowserRouter>

          <NavBar />
          <Switch>
            <Route exact path="/">
              <main>

                <div className='portada'>
                  <div className="fondo-header">
                    <img alt="Imagen de portada" src={fondo} />
                  </div>
                </div>

                <ItemListContainer greeting={"PureGame - Tu tienda favorita de juegos clásicos"} />
              </main>
            </Route>
            <Route path="/item/:itemId">
              <main>
                <ItemDetailContainer />

              </main>
            </Route>
            <Route path="/categoria/:categoriaId" >
              <main>
                <ItemListContainer />
              </main>
            </Route>
            <Route path="/consola/:consoleId" >
              <main>
                <ItemListContainer />
              </main>
            </Route>
            <Route exact path="/cart" >
              <main>
                <Cart />
              </main>
            </Route>

          </Switch>
        </BrowserRouter>
      </CartContext>
    </>

  );
}

export default App;
