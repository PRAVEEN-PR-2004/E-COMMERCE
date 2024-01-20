
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Shop from './Pages/shop/Shop';
import Cart from './Pages/cart/Cart';
import { ShopContextProvider } from './context/Shop_context';

function App() {
  return (
    <div clasName="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Shop />}/>
          <Route path='/Cart' element={<Cart/>}/>

        </Routes>
      </Router>
      </ShopContextProvider>
    </div>

  );
}

export default App;
