
import './App.css';
import PokeList from './components/poke-list';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokemonDetails from './pages/pokemon-details';
import Contact from './pages/contact';
import NotFound from './pages/not-found';
import PokemonInfo from './pages/pokemon-info';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokeList>Hola desde el Home</PokeList>} />
          <Route path='/pokemons' element={<PokeList></PokeList>}></Route>
          <Route path='/pokemons/:name' element={<PokemonDetails></PokemonDetails>}></Route>
          <Route path='/pokemons/:name/:info' element={<PokemonInfo></PokemonInfo>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>


      </BrowserRouter>


    </>



  );
}

export default App;
