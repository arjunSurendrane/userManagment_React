import React, { useEffect } from 'react';
import './App.css';
import Register from './componenets/Register/Register';
import { Route, Routes } from 'react-router-dom'
import Login from './componenets/Login/login';
import Home from './componenets/Home/home';
import AdminLogin from './componenets/Admin/adminLogin';
import AdminHome from './componenets/Admin/home';
import ApplicationList from './componenets/Admin/ApplicationList/application';
import PendingList from './componenets/Admin/pendingList';
import SlotBookingStatus from './componenets/Admin/slotbooking';
import BookingStatus from './componenets/Admin/bookingStatus';

function App() {
  useEffect(() => {

  })
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/admin' element={<AdminLogin />} />
          <Route exact path='/admin/home' element={<AdminHome />} />
          <Route exact path='/admin/pendingRequest' element={<PendingList />} />
          <Route exact path='/admin/slotBookingStatus' element={<SlotBookingStatus />} />
          <Route exact path='/admin/book' element={<BookingStatus />} />
          {/* <Route path='/admin/applicationList' element={<ApplicationList />} /> */}


          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
