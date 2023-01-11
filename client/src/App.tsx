import React from 'react';
import './App.css';
import GetAllUsers from './Components/GetAllUsers';
import {Routes, Route} from 'react-router-dom'
import CreateUser from './Components/CreateUser';
import DetailUser from './Components/DetailUser';
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<GetAllUsers />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/detail-user/:userId" element={<DetailUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
