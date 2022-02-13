import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import MovieRows from './components/MovieRows/MovieRows';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MovieRows />
      <div style={{
        paddingBottom: "2rem"
      }}/>
    </div>
  );
}

export default App;
