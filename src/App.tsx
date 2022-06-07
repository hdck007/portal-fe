import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Charts from './Components/Charts/Charts';
import Dashboard from './Pages/Dashboard';
import StudentDetails from './Pages/Details/StudentDetails';
import Pstudent from './Components/Layout/Pstudent';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import Notice from './Pages/Notice';
import AuthProvider from './Contexts/AuthContext';
import MyNotifications from './Components/MyNotifications/Notification';
import UploadOffers from './Pages/UploadOffers';

function PlaceHolder() {
  return <div>Hello</div>;
}

function App() {
  return (
<<<<<<< HEAD
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Charts />} />
          <Route path="/lookup" element={<Dashboard />} />
          <Route path="/details" element={<StudentDetails />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/mynotice" element={<MyNotifications />} />
          <Route path="/upload" element={<UploadOffers />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Charts />} />
        <Route path="/lookup" element={<Dashboard />} />
        <Route path="/details" element={<Pstudent />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
>>>>>>> b03cb6e3be0b0ac394e8b09b8e184c7117a6d5db
  );
}

export default App;
