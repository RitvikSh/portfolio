import React from 'react'
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar.jsx';
import Cmodel from './Cmodel.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Cmodel />
  </React.StrictMode>,
)
