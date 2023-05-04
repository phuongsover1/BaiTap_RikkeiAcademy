import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Expenses from './components/Expenses';
import InvoiceDetail from './components/InvoiceDetail';
import Invoices from './components/Invoices';
import NewInvoice from './components/NewInvoice';
import NotFound from './components/NotFound';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='invoices' element={<Invoices />}>
            <Route path='new' element={<NewInvoice />} />
            <Route path=':invoiceId' element={<InvoiceDetail />} />
          </Route>
          <Route path='expenses' element={<Expenses />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
