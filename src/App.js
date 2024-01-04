import './App.css';
import { render } from 'react-dom';
import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';
import MainNav from './components/layout/MainNav';

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
