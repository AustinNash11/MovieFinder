import React from "react";
import styles from "./SearchResults.module.css";

function SearchResults({searchMovie}){
    const imgURL = 'https://image.tmdb.org/t/p/w500';
    return(
        <div className = {styles.container}>
            {
                searchMovie.map((object)=>{
                    return(
                        <div className = {styles.object}>
                            <div className = {styles.row1}>
                                <img src = {imgURL + object.poster_path} alt = "Poster" className = {styles.image}/>
                                <div className = {styles.title}>{object.title}</div>
                            </div>
                            <div>{object.overview}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default SearchResults;