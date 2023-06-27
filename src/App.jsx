import './App.scss';

import Authentication from './components/Auth/Authentication';
// import Dashboard from './components/Dashboard/Dashboard';
// import EmailCode from './components/ForgotPass/EmailCode/EmailCode';
// import NewPassword from './components/ForgotPass/NewPassword/NewPassword';
// import ResetPass from './components/ForgotPass/ResetPass';
// import Menu from './components/Menu/Menu';
// import PostRegister from './components/Register/PostRegister/PostRegister';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Authentication />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
