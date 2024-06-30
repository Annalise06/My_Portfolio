import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='portfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
