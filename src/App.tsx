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
import Resume from './Components/Layout/Resume';
import Home from './Pages/Home';
import Notice from './Pages/Notice';

function PlaceHolder() {
  return <div>Hello</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Charts />} />
        <Route path="/lookup" element={<Dashboard />} />
        <Route path="/details" element={<Pstudent />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
