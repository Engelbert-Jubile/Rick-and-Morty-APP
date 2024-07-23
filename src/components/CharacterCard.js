import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => (
  <div>
    <h3>{character.name}</h3>
    <Link to={`/character/${character.id}`}>View Details</Link>
  </div>
);

export default CharacterCard;
