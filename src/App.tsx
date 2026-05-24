import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ProtectedRoute from './components/ProtectedRoute';

import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
