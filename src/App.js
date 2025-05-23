import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;