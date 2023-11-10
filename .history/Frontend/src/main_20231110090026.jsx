import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { AuthContextProvider } from './Context/AuthContext';
const config = {
  startPath: "/home",
};

ReactDOM.createRoot(document.getElementById('root'),config).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    theme='dark'
    pauseOnHover={false}
    closeOnClick
    />
    <App />
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
