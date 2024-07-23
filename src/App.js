import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharactersList from './pages/CharactersList';
import CharacterDetail from './pages/CharacterDetail';
import CharactersByLocation from './pages/CharactersByLocation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={CharactersList} />
        <Route path="/character/:id" component={CharacterDetail} />
        <Route path="/locations" component={CharactersByLocation} />
      </Routes>
    </Router>
  );
}

export default App;
