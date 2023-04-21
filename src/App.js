import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Gallery from './pages/Gallery';
import Splashscreen from './pages/Splashscreen';

function App() {
  const [showSplashscreen, setShowSplashscreen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplashscreen(false);
    }, 9992500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
  <div className="app">
  {showSplashscreen && (
    <div><Splashscreen /></div>
  )}
  <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
  
  </div>
  );
}

export default App;
