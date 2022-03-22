import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import StudentDetails from './Pages/Details/StudentDetails';
import Pstudent from './Components/Layout/Pstudent';
import Layout from './Components/Layout/Layout';

function PlaceHolder() {
  return <div>Hello</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaceHolder />} />
        <Route path="/details" element={<StudentDetails />} />
        <Route path="/pstudent" element={<Pstudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
