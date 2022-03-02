import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function PlaceHolder() {
  return <div>Hello</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaceHolder />}>
          <Route index element={<PlaceHolder />} />
          <Route path="teams" element={<>Hello teams</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
