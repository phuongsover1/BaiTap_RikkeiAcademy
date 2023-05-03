import { useEffect } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Elements from './components/Elements';
import Index from './components/Index';
import Services from './components/Services';

const jsScripts = [
  './js/jquery-3.4.1.min.js',
  './js/popper.min.js',
  './js/bootstrap.min.js',
  './js/owl.carousel.min.js',
  './js/jquery.animateNumber.min.js',
  './js/jquery.waypoints.min.js',
  './js/jquery.fancybox.min.js',
  './js/aos.js',
  './js/moment.min.js',
  './js/daterangepicker.js',
  './js/typed.js',
  './js/test.js',
];
function App() {
  useEffect(() => {
    jsScripts.forEach(value => {
      let script = document.createElement('script');
      script.async = true;
      script.src = value;
      document.body.appendChild(script);
    });
  }, []);
  return (
    <div>
      <>
        <div className='site-mobile-menu site-navbar-target'>
          <div className='site-mobile-menu-header'>
            <div className='site-mobile-menu-close'>
              <span className='icofont-close js-menu-toggle' />
            </div>
          </div>
          <div className='site-mobile-menu-body' />
        </div>
        <nav className='site-nav'>
          <div className='container'>
            <div className='site-navigation'>
              <Link to='/index' className='logo m-0'>
                Tour <span className='text-primary'>.</span>
              </Link>
              <ul className='js-clone-nav d-none d-lg-inline-block text-left site-menu float-right'>
                <li className='active'>
                  <NavLink
                    to='/index'
                    className={navData =>
                      navData.isActive ? 'active' : ''
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className='has-children'>
                  <a href='#'>Dropdown</a>
                  <ul className='dropdown'>
                    <li>
                      <NavLink
                        to='/elements'
                        className={navData =>
                          navData.active ? 'active' : ''
                        }
                      >
                        Elements
                      </NavLink>
                    </li>
                    <li>
                      <a href='#'>Menu One</a>
                    </li>
                    <li className='has-children'>
                      <a href='#'>Menu Two</a>
                      <ul className='dropdown'>
                        <li>
                          <a href='#'>Sub Menu One</a>
                        </li>
                        <li>
                          <a href='#'>Sub Menu Two</a>
                        </li>
                        <li>
                          <a href='#'>Sub Menu Three</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#'>Menu Three</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to='/services'
                    className={navData =>
                      navData.isActive ? 'active' : ''
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    className={navData =>
                      navData.isActive ? 'active' : ''
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/contact'
                    className={navData =>
                      navData.isActive ? 'active' : ''
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <a
                href='#'
                className='burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light'
                data-toggle='collapse'
                data-target='#main-navbar'
              >
                <span />
              </a>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/index' element={<Index />} />
          <Route path='/elements' element={<Elements />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
