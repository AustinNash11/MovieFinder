import React, {useState} from "react";
import styles from "./Search.module.css";

function Search({setSearchMovie}){
    const [userInput, setUserInput] = useState('');
    const handleChange = (e) =>{
        setUserInput(e.target.value);
    }
    const apiKey = "1d4ff8ca53ec3ef835bd6c30fb1768c0";
    
    const getMovie = async () =>{
        const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apiKey}`;
        const response = await fetch(searchUrl);
        if(response.ok){
        const jsonResponse = await response.json();
        console.log(jsonResponse.results);
        setSearchMovie(jsonResponse.results);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission
            getMovie(); // Trigger the search on Enter
        }
    };

    return(
        <div className={styles.container}>
            <input type = "text" value = {userInput} onChange = {handleChange} className = {styles.input} placeholder="Search a Movie" onKeyDown={handleKeyDown}></input>
            <button onClick = {getMovie}>Search</button>
        </div>
    );
}
export default Search;