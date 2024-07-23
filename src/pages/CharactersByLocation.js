import React, { useState, useEffect } from 'react';

const CharactersByLocation = () => {
  const [locations, setLocations] = useState({});
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem('locations'));
    if (storedLocations) {
      setLocations(storedLocations);
    }
  }, []);

  return (
    <div>
      <h1>Characters By Location</h1>
      <select onChange={(e) => setSelectedLocation(e.target.value)} value={selectedLocation}>
        <option value="">Select Location</option>
        {Object.keys(locations).map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
      {selectedLocation && (
        <div>
          <h2>{selectedLocation}</h2>
          {locations[selectedLocation].map(character => (
            <div key={character.id}>
              <h3>{character.name}</h3>
              <p>Status: {character.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharactersByLocation;
