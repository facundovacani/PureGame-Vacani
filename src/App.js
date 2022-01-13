import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar /> 
      <ItemListContainer greeting={"Estos son los mejores juegos en el mercado"} />
    </>
  );
}

export default App;
