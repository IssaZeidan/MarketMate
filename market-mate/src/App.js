import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="Products" element={<Products/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
