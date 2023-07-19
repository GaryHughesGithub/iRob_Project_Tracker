import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/admin/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import PlcList from './pages/admin/PlcList';
import PlcDetail from './pages/admin/PlcDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/admin/plc-list" element={<PlcList />} />
        <Route path="/admin/plc-detail" element={<PlcDetail />} />
      </Routes>
    </div>
  );
}

export default App;
