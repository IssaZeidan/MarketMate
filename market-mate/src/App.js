import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="Products" element={<Products/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
