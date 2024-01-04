import './App.css';
import { render } from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
