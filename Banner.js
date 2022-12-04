import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';


function Banner() {

    const [movie,setMovie] = useState( []);

    useEffect(() =>{

        async function fetchData(){

            const request = await axios.get(requests.fetchAnimatedMovies);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();


    },[]);

    console.log(movie);

  return (
    <header
     className="banner"
    
    style={{
backgroundSize:"cover",
backgroundImage:`url('https://images.hdqwalls.com/download/4k-money-heist-netflix-u9-1920x1080.jpg')`,


backgroundPosition:"center center",
    }}
     >

      
      <div className='banner_contents'>
        
     </div>

     <div className="nav">
      <br></br>
     <div className='.banner_title'>
      <h3> Watch Unlimited</h3>

     </div>
<div className="banner_buttons">
  <button className='banner_button'>Play</button>
  <button className='banner_button'>My List</button>

</div>
</div>



    </header>
  );
  
}

export default Banner
