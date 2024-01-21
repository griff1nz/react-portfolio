import './App.css';
import { render } from 'react-dom';
import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';
import MainNav from './components/layout/MainNav';
import Footer from './components/layout/Footer';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();


function App() {
  var sourceImg;
  //https://static.thenounproject.com/png/2853779-200.png
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr) => (curr == 'light' ? "dark" : "light"));
  }
  if (theme == 'light') {
    sourceImg = 'https://static.thenounproject.com/png/2853779-200.png';
  }
  else {
    sourceImg = 'https://cdn-icons-png.flaticon.com/512/6714/6714978.png';
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <MainNav passedComponent={<button className='rounded-sm hover:bg-white hover:scale-95 p-2 transition ease-in-out duration-300' id='toggle' onClick={toggleTheme}><img src={sourceImg} alt='Dark Mode' className='h-[30px] w-[30px]'></img></button>}/>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;