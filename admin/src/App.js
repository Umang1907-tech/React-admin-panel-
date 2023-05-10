import React from "react";
import {Route, Routes } from 'react-router-dom'


//toast notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from './Components/Header';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Add_product from './Pages/Add_product';
import Manage_product from './Pages/Manage_product';
import Manage_users from './Pages/Manage_users';
import Manage_contacts from './Pages/Manage_contacts';
function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route  path="/login" element={<><Login/> </>}></Route>
        <Route  path="/" element={<> <Header/> <Dashboard/> </>}></Route>
        <Route  path="/add_product" element={<> <Header/> <Add_product/> </>}></Route>
        <Route  path="/manage_product" element={<> <Header/> <Manage_product/> </>}></Route>
        <Route  path="/manage_users" element={<> <Header/> <Manage_users/> </>}></Route>
        <Route  path="/manage_contacts" element={<> <Header/> <Manage_contacts/> </>}></Route>
      </Routes>
    </div>
  );
}

export default App;
