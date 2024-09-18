import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Favorites from './pages/favorites'
import Profile from './pages/profile'
import ProtectedRoute from './ProtectedRoutes'
import GlobalStyle from './globalStyles'
import Admin from './pages/admin'

export default function App() {
  return  (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path = "/" element = {<Login></Login>}></Route>
        <Route path = "/signup" element = {<Signup></Signup>}></Route>
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
              <Admin />
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