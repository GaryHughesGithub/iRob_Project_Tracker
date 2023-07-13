import './App.scss';

import Authentication from './components/Auth/Authentication';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';

import { Route, Routes } from 'react-router-dom';
import MyPLC from './pages/MyPLC/MyPLC';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myPLC' element={<MyPLC />} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
