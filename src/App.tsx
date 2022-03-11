import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import StudentDetails from './Pages/Details/StudentDetails';

function PlaceHolder() {
  return <div>Hello</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaceHolder />} />
        <Route path="/details" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
