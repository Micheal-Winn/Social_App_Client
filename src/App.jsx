import { useState } from 'react'
import { Routes,Navigate,Route } from 'react-router-dom';
import HomePage from 'scences/homePage/home';
import LoginPage from 'scences/loginPage/login';
import ProfilePage from 'scences/profilePage/profile';

function App() {


  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/profile/:userId' element={<ProfilePage/>} />
     </Routes>
    </div>
  )
}

export default App
