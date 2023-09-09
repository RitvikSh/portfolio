import React from 'react'
import ReactDOM from 'react-dom/client';
import Background from './Background.jsx';
import Navbar from './Navbar.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Background />
  </React.StrictMode>,
)
