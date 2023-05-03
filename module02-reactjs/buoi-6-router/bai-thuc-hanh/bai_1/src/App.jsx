import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
