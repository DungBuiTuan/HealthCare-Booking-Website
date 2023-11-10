import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import {authContextProvider}
import { authContextProvider } from './Context/AuthContextjsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <authContextProvider>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    theme='dark'
    pauseOnHover={false}
    closeOnClick
    />
    <App />
    </authContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
