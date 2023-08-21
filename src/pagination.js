import React from 'react'
import "./style.css"

function pagination({pokemons, currentPage, setCurrentPage}) {
  const pageSize = 10;
  const startIndex = Math.floor((currentPage - 1) / 10) * pageSize;
    const endIndex = startIndex + pageSize;
  return (
    <div>
        {
        (currentPage != 1) && <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        }  
        {
        Array.from({
            length: 81
        }, (_, i) => i).map(element => (
            (element >= startIndex && element < endIndex) && <button 
                key={element}
            onClick={() => setCurrentPage(element + 1)}
            className={element + 1 === currentPage ? "btnActive" : ""}>
                {element + 1}
            </button>
        )) 
        }
        {
        (currentPage != 81) && <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        }
    </div>
  )
}

export default pagination