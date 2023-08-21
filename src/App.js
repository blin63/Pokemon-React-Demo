import Page from './page';
import Pagination from './pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemons, setPokemon] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      setPokemon(result.data)
    }
    fetchData()
  }, []);

  
  return (
    <h1>
      <Page pokemons={pokemons} currentPage={currentPage}/>
      <Pagination pokemons={pokemons} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </h1>
  );
}

export default App;
