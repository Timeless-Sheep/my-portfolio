import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Gallery from './pages/Gallery';


function App() {
  return (
  <>
  <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
  
  </>
  );
}

export default App;
