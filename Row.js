import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import requests from './requests';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url ="https://image.tmdb.org/t/p/original/";

function Row( {title,fetchUrl,isLargeRow} ) {
    const [movies, setMovies] = useState([ ]);
    const [trailerUrl, setTrailerUrl] =useState("");

    useEffect(() =>{

        async function fetchData() {
            const request = await axios.get(fetchUrl); 
            setMovies(request.data.results); 
           
            return request;


        }
        fetchData();

    } ,[fetchUrl]);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
     

    console.table(movies);

    return(
        <div className="row">
<h2> {title} </h2>

<div className="row_poster">


    {movies.map(movie =>(
         <img
       key={movie.id}
       
          className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
         src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt ={movie.name}/>


    ))}

</div>


   </div>
    )
}    
export default Row