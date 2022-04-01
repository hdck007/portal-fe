import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import StudentDetails from './Pages/Details/StudentDetails';
import Home from './Pages/Home';

function PlaceHolder() {
  return <div>Hello</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
