import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import NoPage from './components/NoPage';
import OrderForm from './components/OrderForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import ShopLayout from './components/ShopLayout';

function App() {
  return (
    <>
        <BrowserRouter>
        <div id="appLayout">
            <Header />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/shop" element={<ShopLayout />}>
                    <Route index element={<ProductPage />} />
                    <Route path="order" element={<OrderForm />} />
                </Route>
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </div>
        </BrowserRouter>
    </>
);
}

export default App;
