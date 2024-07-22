import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../api';

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [location, setLocation] = useState('');
  const [assignedLocations, setAssignedLocations] = useState(JSON.parse(localStorage.getItem('locations')) || {});

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetchCharacterById(id);
      setCharacter(data);
    };
    getCharacter();
  }, [id]);

  const assignLocation = () => {
    const newLocations = { ...assignedLocations, [character.id]: location };
    setAssignedLocations(newLocations);
    localStorage.setItem('locations', JSON.stringify(newLocations));
  };

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" />
      <button onClick={assignLocation}>Assign to Location</button>
    </div>
  );
};

export default CharacterDetailPage;
