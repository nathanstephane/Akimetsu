import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import UserList from './pages/UserList';
import About from './pages/About'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    {/* <Route path="/" element={ <Home/> } /> */}
    <Route path="/favorites" element={ <UserList/> } />
    <Route path="/*" element={ <Home/> } />
    <Route path="/about" element={ <About/> } />
   </Routes>
    </BrowserRouter>
  );
};

export default App;