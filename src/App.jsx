import './App.scss';

import Authentication from './components/Auth/Authentication';
import Dashboard from './components/Dashboard/Dashboard';
import EmailCode from './components/ForgotPass/EmailCode/EmailCode';
import NewPassword from './components/ForgotPass/NewPassword/NewPassword';
import ResetPass from './components/ForgotPass/ResetPass';
import Menu from './components/Menu/Menu';
import PostRegister from './components/Register/PostRegister/PostRegister';
import Register from './components/Register/Register';

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Menu />
      <Dashboard />
    </div>
  );
}

export default App;
