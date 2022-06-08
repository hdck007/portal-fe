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
import Resume from './Pages/Resume';

function PlaceHolder() {
  return <div>Hello</div>;
}

function App() {
  return (
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
          <Route path="/resume" element={<Resume />} />
          <Route path="/pstudent" element={<Pstudent />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
