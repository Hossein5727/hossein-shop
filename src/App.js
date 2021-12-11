import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/Home/HomePage';
import CardsPage from './pages/Cart/CardsPage';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';
import AuthProvider from './Providers/AuthProvider';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cards" element={<CardsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </AuthProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
