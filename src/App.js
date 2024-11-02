import Header from './components/Header'
import Footer from './components/Footer'
import WelcomePage from './components/WelcomePage'
import NoPage from './components/NoPage'
import OrderPage from './components/ContentLayout/OrderPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './components/ContentLayout/ProductPage/ProductPage'
import ContentLayout from './components/ContentLayout/ContentLayout'

function App() {

    return (
        <>
            <BrowserRouter>
            <div id="app-layout">
                <Header />
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/shop" element={<ContentLayout />}>
                        <Route index element={<ProductPage />} />
                        <Route path="order" element={<OrderPage />} />
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
