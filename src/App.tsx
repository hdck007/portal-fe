import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Charts from './Components/Charts/Charts';
import Dashboard from './Pages/Dashboard';
import StudentDetails from './Pages/Details/StudentDetails';
import Notice from './Pages/Notice';
import AuthProvider from './Contexts/AuthContext';
import MyNotifications from './Components/MyNotifications/Notification';
import UploadOffers from './Pages/UploadOffers';
import Resume from './Pages/Resume';
import VStudent from './Pages/VStudent';
import VProfile from './Pages/VProfile';
import Login from './Pages/Login';
import Student from './Pages/Student';
import Image from './Pages/Image';
import StudentAcadDetails from './Pages/Details/StudentAcadDetails';
import StudentAdditionalDetails from './Pages/Details/StudentAdditionalDetails';

function PlaceHolder() {
  return <div>Hello</div>;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Charts />} />
          <Route path="/lookup" element={<Dashboard />} />
          <Route path="/details" element={<StudentDetails />} />
          <Route path="/details/2" element={<StudentAcadDetails />} />
          <Route path="/details/3" element={<StudentAdditionalDetails />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/mynotice" element={<MyNotifications />} />
          <Route path="/upload" element={<UploadOffers />} />
          <Route path="/vprofile" element={<VProfile />} />
          <Route path="/image" element={<Image />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
