import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import React, {useState} from 'react';

function App() {
  const [searchMovie, setSearchMovie] = useState([]);
  console.log(searchMovie);
  return (
    <div className="App">
      <h1>Movie Finder</h1>
      <Search  className = "search" setSearchMovie = {setSearchMovie}/>
      <SearchResults className = "container" searchMovie = {searchMovie}/>
    </div>
  );
}

export default App;
