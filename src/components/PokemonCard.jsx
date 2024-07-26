import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl rounded-lg p-4 m-4 w-40 text-center transform transition-transform hover:scale-105">
      <div className="bg-gray-100 p-2 rounded-full mx-auto">
        <img className="w-24 h-24 mx-auto" src={pokemon.image} alt={pokemon.name} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
