import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => setCharacter(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleAssignLocation = () => {
    if (locationName) {
      let locations = JSON.parse(localStorage.getItem('locations')) || {};
      if (!locations[locationName]) {
        locations[locationName] = [];
      }
      locations[locationName].push(character);
      localStorage.setItem('locations', JSON.stringify(locations));
      setLocationName('');
    }
  };

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <input
        type="text"
        value={locationName}
        onChange={(e) => setLocationName(e.target.value)}
        placeholder="Enter Location Name"
      />
      <button onClick={handleAssignLocation}>Assign to Location</button>
    </div>
  );
};

export default CharacterDetail;
