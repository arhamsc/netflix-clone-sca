import React from 'react';
import './App.css';
import DocumentMeta from 'react-document-meta';

import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import MovieRows from './components/MovieRows/MovieRows';

function App() {
  const meta = {
    title: 'Netflix UI Clone',
    description:
      'Netflix clone capable of showing trailers and responsive layout.',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags',
      },
    },
  };

  return (
    <div className="App">
      <DocumentMeta {...meta} />
      <NavBar />
      <Banner />
      <MovieRows />
      <div
        style={{
          paddingBottom: '2rem',
        }}
      />
    </div>
  );
}

export default App;
