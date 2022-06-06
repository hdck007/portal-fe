import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import StudentDetails from './Pages/Details/StudentDetails';
import Pstudent from './Components/Layout/Pstudent';
import Layout from './Components/Layout/Layout';
import Resume from './Components/Layout/Resume';
import Home from './Pages/Details/Home';

function PlaceHolder() {
  return <div>Hello</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<StudentDetails />} />
        <Route path="/pstudent" element={<Pstudent />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
