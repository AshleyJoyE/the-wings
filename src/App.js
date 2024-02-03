import './App.css';
import LandingPage from '../src/Components/LandingPage'
import SearchPage from '../src/Components/SearchPage'
import { Route, Routes } from 'react-router-dom';
import React from 'react';
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </div>
    );
}

export default App;
