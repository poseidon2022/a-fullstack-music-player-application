import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Otp from './pages/otp'
import Home from './pages/Home'
import Favorites from './pages/favorites'
import Profile from './pages/profile'
import ProtectedRoute from './ProtectedRoutes'
import GlobalStyle from './globalStyles'
import Admin from './pages/admin'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchSong } from './features/songSlice'

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSong());
  }, [dispatch]);

  return  (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path = "/login" element = {<Login></Login>}></Route>
        <Route path = "/" element = {<Signup></Signup>}></Route>
        <Route path = "/otp" element = {<Otp></Otp>}></Route>
        <Route 
          path = "/home"
          element = {
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route 
          path = "/admin"
          element = {
            <ProtectedRoute>
              <Admin/>
            </ProtectedRoute>
          }
        />
        <Route 
          path = "/favorites"
          element = {
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route 
          path = "/profile"
          element = {
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}