import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => (
  <div className="character-card">
    <Link to={`/character/${character.id}`}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </Link>
  </div>
);

export default CharacterCard;
