import './App.scss';

import Authentication from './pages/Auth/Authentication';
import EmailCode from './pages/ForgotPass/EmailCode/EmailCode';
import ResetPass from './pages/ForgotPass/ResetPass';
import PostRegister from './pages/Register/PostRegister/PostRegister';
import Register from './pages/Register/Register';

function App() {
  return (
    <div>
      <Authentication />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
        <Register />
        <PostRegister />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '80px' }}>
        <ResetPass />
        <EmailCode />
      </div>
    </div>
  );
}

export default App;
