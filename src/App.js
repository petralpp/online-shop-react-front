import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import NoPage from './components/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';

function App() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="shop" element={<Shop />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
);
}

export default App;
