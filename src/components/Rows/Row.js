import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styles from './Row.module.css';

import axiosInstance, { fetchVideoDetails } from '../../context/axios';
import { imageBaseUrl } from '../../context/request_urls';

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axiosInstance.get(props.fetchUrl);
      setMovies(response.data.results);
      return response.data.results;
    };

    fetchMovies();
  }, [props.fetchUrl]);

  const opts = {
    width: '100%',
    playerVars: {
      autoPlay: 1,
    },
  };

  const showTrailerHandler = async (movie) => {
    const trailerId = await fetchVideoDetails(movie, props.fetchUrl);
    setTrailerUrl(trailerId);
  };

  const closeButtonHandler = () => {
    setTrailerUrl('');
  };

  return (
    <section className={styles.row}>
      <h3>{props.title}</h3>
      <div className={styles.imageRow}>
        {movies.map((ele) => (
          <img
            className={`${styles.image__original} ${
              props.expandedWidth && styles.image__expanded
            }`}
            onClick={() => showTrailerHandler(ele)}
            key={ele.id}
            src={`${imageBaseUrl}${
              !props.expandedWidth ? ele.backdrop_path : ele.poster_path
            }`}
            alt={ele.original_name}
          />
        ))}
      </div>
      <div className={styles.video__div}>
        {trailerUrl && (
          <button onClick={closeButtonHandler} className={styles.close__button}>
            X
          </button>
        )}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </section>
  );
};

export default Row;
