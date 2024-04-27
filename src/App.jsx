import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRoute from './routes/userRoute/UserRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRoute/>}/>
        </Routes>
      </BrowserRouter>

      <div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
