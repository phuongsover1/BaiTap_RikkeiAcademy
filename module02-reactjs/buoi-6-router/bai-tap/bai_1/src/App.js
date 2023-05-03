import { useEffect } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Events from './components/Events';
import Index from './components/Index';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import logo from './logo.svg';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';

    document.body.appendChild(script);
    // Toggle the side navigation
    const sidebarToggle =
      document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', event => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem(
          'sb|sidebar-toggle',
          document.body.classList.contains('sb-sidenav-toggled')
        );
      });
    }
  }, []);
  return (
    <div>
      <div className='d-flex' id='wrapper'>
        {/* Sidebar*/}
        <div className='border-end bg-white' id='sidebar-wrapper'>
          <div className='sidebar-heading border-bottom bg-light'>
            Home
          </div>
          <div className='list-group list-group-flush'>
            <NavLink
              className='list-group-item list-group-item-action list-group-item-light p-3'
              to='/'
            >
              Dashboard
            </NavLink>
            <Link
              className='list-group-item list-group-item-action list-group-item-light p-3'
              to='/contact'
            >
              Contact
            </Link>
            <Link
              className='list-group-item list-group-item-action list-group-item-light p-3'
              to='/event'
            >
              Events
            </Link>
            <Link
              className='list-group-item list-group-item-action list-group-item-light p-3'
              to='/profile'
            >
              Profile
            </Link>
            <Link
              className='list-group-item list-group-item-action list-group-item-light p-3'
              to='/login'
            >
              Login
            </Link>
            <Link
              className='list-group-item list-group-item-action list-group-item-light p-3'
              to='/register'
            >
              Register
            </Link>
          </div>
        </div>
        {/* Page content wrapper*/}
        <div id='page-content-wrapper'>
          {/* Top navigation*/}
          <nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom'>
            <div className='container-fluid'>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon' />
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
                  <li className='nav-item active'>
                    <a className='nav-link' href='#!'>
                      Home
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#!'>
                      Link
                    </a>
                  </li>
                  <li className='nav-item dropdown'>
                    <a
                      className='nav-link dropdown-toggle'
                      id='navbarDropdown'
                      href='#'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Dropdown
                    </a>
                    <div
                      className='dropdown-menu dropdown-menu-end'
                      aria-labelledby='navbarDropdown'
                    >
                      <a className='dropdown-item' href='#!'>
                        Action
                      </a>
                      <a className='dropdown-item' href='#!'>
                        Another action
                      </a>
                      <div className='dropdown-divider' />
                      <a className='dropdown-item' href='#!'>
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Page Content */}
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/event' element={<Events />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
