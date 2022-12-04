import React from 'react';
import Row from './Row';
import './App.css';
import './Banner.css'
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import './Nav.css';
function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Banner/>
      


      <Row title ="NETFLIX ORIGNALS" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow
      />
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title ="TOP Rated" fetchUrl={requests.fetchTopRated} />
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies} />
       <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title ="Animated Movies" fetchUrl={requests.fetchAnimatedMovies} />
      <Row title ="Documentaries" fetchUrl={requests.fetchDocumantaries} />
      




      
    </div>
  );
}

export default App;
