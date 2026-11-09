import {Routes,Route} from "react-router-dom";
import { useState } from 'react'
import {Navbar} from './assets/Components/Navbar';
import {Home} from './Pages/Home';
import {Login} from './Pages/Login';
import {Dashboard} from './Pages/Dashboard';
import {NotFound} from './Pages/NotFound';
import {AuthProvider} from './Context/AuthContext';
import {RequireAuth} from './assets/Components/RequireAuth';
function App(){
return(
  <AuthProvider>
    <Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <RequireAuth>
          <Dashboard/>
        </RequireAuth>
        <Route path="*" element={<NotFound/>}> </Route>
      </Routes>
    </Navbar>
  </AuthProvider>
)
}

export default App
