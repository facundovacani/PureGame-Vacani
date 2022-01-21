import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar /> 
      <ItemListContainer greeting={"PureGame - Tu tienda favorita de juegos clásicos"} />
    </>
  );
}

export default App;
