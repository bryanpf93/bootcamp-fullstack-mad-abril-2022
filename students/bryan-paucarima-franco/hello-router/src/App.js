import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import TodoPage from './pages/todo-page';
import Quotes from './pages/quotes';
import Header from './shared-components/header';
import Footer from './shared-components/footer';
import Pokemons from './pages/pokemons';
import PokemonDetail from './pages/pokemon-detail';
import DemoContext from './pages/demo-context';
import UserProvider from './shared-components/user/user.provider';

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter> {/* Este componente BrowserRouter indica que existe un router en mi app. 
                        Solo se pone una vez y solemos ponerlo en al app.js*/}
          <Header></Header>
          <Routes>
            {/* Este componente Router, nos permite definir llas diferentes paginas o rutas de nuestro */}
            <Route path='/' element={<h1>Hola desde la home</h1>}></Route>
            <Route path='/todo' element={<TodoPage>Hola desde /hello</TodoPage>}></Route>
            <Route path='/quotes' element={<Quotes>Hola desde /other</Quotes>}></Route>
            <Route path='/pokemons' element={<Pokemons></Pokemons>}></Route>
            <Route path='/pokemons/:name' element={<PokemonDetail></PokemonDetail>}></Route>
            <Route path='/context' element={<DemoContext></DemoContext>}></Route>
          </Routes>
          <Footer></Footer>

        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
