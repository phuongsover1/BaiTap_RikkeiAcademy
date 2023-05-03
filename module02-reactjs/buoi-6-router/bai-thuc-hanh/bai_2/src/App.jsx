import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.async = true;
    jqueryScript.src = './js/jquery.min.js';
    document.body.appendChild(jqueryScript);
    const bootstrapScript = document.createElement('script');
    jqueryScript.async = true;
    jqueryScript.src = './js/bootstrap.min.js';
    document.body.appendChild(bootstrapScript);
    const popperScript = document.createElement('script');
    jqueryScript.async = true;
    jqueryScript.src = './js/popper.js';
    document.body.appendChild(popperScript);
    const mainScript = document.createElement('script');
    jqueryScript.async = true;
    jqueryScript.src = './js/main.js';
    document.body.appendChild(mainScript);
  }, []);
  return (
    <div className='wrapper d-flex align-items-stretch'>
      <nav id='sidebar'>
        <div className='p-4 pt-5'>
          <ul className='list-unstyled components mb-5'>
            <li>
              <NavLink to='/' className='dropdown-toggle'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
