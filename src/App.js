import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './route/home/home.component';
import Navigation from './route/navegation/navegation.component';
import SignIn from './route/sign-in/sign-in-component';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index  element={<Home/>}></Route>
        <Route path='auth'  element={<SignIn/>}></Route>
      </Route>

    </Routes>
  )
}

export default App;
