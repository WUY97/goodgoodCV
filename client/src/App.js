import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Templates from './pages/templates/index'

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/templates/:id' element={<ProtectedRoute><Templates /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export function ProtectedRoute (props) {

  if (localStorage.getItem('test-users')){
    return props.children
  } else {
    return <Navigate to='/login' />;
  }
};
