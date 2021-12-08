import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/Home/HomePage';
import CardsPage from './pages/Cart/CardsPage';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/Checkout/CheckoutPage';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </CartProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
