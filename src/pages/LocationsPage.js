import React, { useState, useEffect } from 'react';
import { fetchCharacterById } from '../api';

const LocationsPage = () => {
  const [locations, setLocations] = useState(JSON.parse(localStorage.getItem('locations')) || {});
  const [selectedLocation, setSelectedLocation] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const characterIds = Object.keys(locations).filter((key) => locations[key] === selectedLocation);
      const characterData = await Promise.all(characterIds.map((id) => fetchCharacterById(id)));
      setCharacters(characterData);
    };
    if (selectedLocation) loadCharacters();
  }, [selectedLocation, locations]);

  return (
    <div>
      <h1>Characters by Location</h1>
      <select onChange={(e) => setSelectedLocation(e.target.value)}>
        <option value="">Select a Location</option>
        {Object.values(locations).map((loc, index) => (
          <option key={index} value={loc}>{loc}</option>
        ))}
      </select>
      <div className="characters-list">
        {characters.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;
