import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BagProvider from './components/bag/bag.provider';
import Header from './components/header';
import ProductList from './pages/product-list';
import ShoppingCart from './pages/shopping-cart';

function App() {
  return (
    
      <BagProvider>
        <Header></Header>
        
          <Routes>
            <Route path='/' element={<ProductList></ProductList>}></Route>
            <Route path='/checkout' element={<ShoppingCart></ShoppingCart>}></Route>
          </Routes>
        
        
      </BagProvider>


    

  );
}

export default App;
