import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import LocationsPage from './pages/LocationsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={CharactersPage} />
        <Route path="/character/:id" component={CharacterDetailPage} />
        <Route path="/locations" component={LocationsPage} />
      </Routes>
    </Router>
  );
}

export default App;
