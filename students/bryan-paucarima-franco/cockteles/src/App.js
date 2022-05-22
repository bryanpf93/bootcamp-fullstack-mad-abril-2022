
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CocktelesInfo from './pages/cockteles-info';
import CocktelesList from './pages/cockteles-list';
import { CocktelContext } from './shared-components/cocktel/cocktel.context';
import CocktelProvider from './shared-components/cocktel/cocktel.provider';
import Footer from './shared-components/footer';
import Nav from './shared-components/nav';

function App() {
  const [theme] = useContext(CocktelContext);

  return (
    <BrowserRouter>
      <div className={`${theme} App`}>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<CocktelesList></CocktelesList>}></Route>
          <Route path='/info/:name' element={<CocktelesInfo></CocktelesInfo>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
