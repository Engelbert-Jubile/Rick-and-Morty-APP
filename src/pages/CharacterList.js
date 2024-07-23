import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Characters List</h1>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharactersList;
