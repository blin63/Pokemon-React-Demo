import React from 'react';

function Page({pokemons, currentPage}) {
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPokemons = pokemons.slice(startIndex, endIndex);
    const x = (id) => {
        if (id < 10) {
            return "00"
        } else if (id < 100) {
            return "0"
        } else {
            return ""
        }
    }

    return (
        <div>
            <h1>{`Page number ${currentPage}`}</h1>
            {currentPokemons.map(pokemon => (
                <div key={pokemon.id}>
                    <div class="flex-container">
                        <div class="flex-item">
                        <img class="flex-item"
                            src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${x(pokemon.id)}${pokemon.id}.png`} 
                            alt={pokemon.name.english}/>
                        </div>
                    </div>
                    </div>
            ))}
        </div>
    )
}

export default Page;