import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/admin/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Zones from './pages/admin/Zones';
import ZoneTasks from './pages/admin/ZoneTasks';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/admin/zones" element={<Zones />} />
        <Route path="/admin/zone-tasks" element={<ZoneTasks />} />
      </Routes>
    </div>
  );
}

export default App;
