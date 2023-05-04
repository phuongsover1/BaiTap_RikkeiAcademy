import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <nav>
        <ul style={{ textAlign: 'center' }}>
          <li
            style={{
              display: 'inline-block',
              padding: '0 1rem 0 0',
              borderRight: '1px solid #333',
            }}
          >
            <NavLink
              to='/invoices'
              className={({ isActive }) => (isActive ? 'red' : '')}
            >
              Invoices
            </NavLink>
          </li>
          <li
            style={{ display: 'inline-block', padding: '0 0 0 1rem' }}
          >
            <NavLink
              to='/expenses'
              className={({ isActive }) => (isActive ? 'red' : '')}
            >
              Expenses
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
