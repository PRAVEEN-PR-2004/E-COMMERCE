import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Shop from './Pages/shop/Shop';
import Cart from './Pages/cart/Cart';
import { ShopContextProvider } from './context/Shop_context';
import BuyProduct from './Pages/Buy/BuyProduct';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/buy/:id' element={<BuyProduct />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
