import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import CharacterCard from '../components/CharacterCard';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data.results);
    };
    getCharacters();
  }, []);

  return (
    <div>
      <h1>Characters List</h1>
      <div className="characters-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
