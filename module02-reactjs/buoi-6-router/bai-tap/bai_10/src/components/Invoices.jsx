import { Link, Outlet } from 'react-router-dom';
const Invoices = () => {
  return (
    <div className='container'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Invoices</h2>
        <Link to='new'>Create new invoice.</Link>
      </div>
      <hr />
      <div className='flex'>
        <div className='left'>
          <ul className='invoices-list'>
            <li
              className='invoice-list--item'
              style={{ marginBottom: '1rem' }}
            >
              <Link to='1'>Google</Link>
            </li>
            <li className='invoice-list--item'>
              <Link to='2'>Apple</Link>
            </li>
          </ul>
        </div>
        <div className='right'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Invoices;
