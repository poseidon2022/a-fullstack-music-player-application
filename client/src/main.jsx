import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import store from "./app/store.jsx"
import {Provider} from "react-redux"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App />
      <ToastContainer position='top-center' autoClose={3000}></ToastContainer>
    </Provider>
  </StrictMode>
)
