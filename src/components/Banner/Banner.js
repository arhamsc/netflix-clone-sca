import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import YouTube from 'react-youtube';
import axios, { fetchVideoDetails } from '../../context/axios';
import requestUrls, { imageBaseUrl } from '../../context/request_urls';

import styles from './Banner.module.css';

const Banner = () => {
  const [trending, setTrending] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');
  let trailerId = '';
  

  useEffect(() => {
    const fetchNetflixOriginals = async () => {
      const response = await axios.get(requestUrls.fetchNetflixOriginals);
      const trendingMovie =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
      console.log(trendingMovie);
      setTrending(trendingMovie);
    };
    fetchNetflixOriginals();
    
  }, []);

  const playButtonHandler = async () => {
    trailerId = await fetchVideoDetails(
        trending,
        requestUrls.fetchNetflixOriginals,
      );
    setTrailerUrl(trailerId);
  };

  const opts = {
    width: '800rem',
    height: '400rem',
    playerVars: {
      autoPlay: 1,
    },
  };

  const closeButtonHandler = () => {
    setTrailerUrl('');
  };

  return (
    <header
      className={styles.header__banner}
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${imageBaseUrl}${trending?.backdrop_path})`,
        backgroundPosition: 'center center fixed',
      }}
    >
      <div className={styles.header__contents}>
        <h1>{trending?.name || trending?.original_name}</h1>
        <div className={styles.header__buttons}>
          <button onClick={playButtonHandler}>Play</button>
          <button>My List</button>
        </div>

        {trailerUrl &&
          createPortal(
            <section className={styles.video__overlay__div}>
              <button
                onClick={closeButtonHandler}
                className={styles.close__button}
              >
                X
              </button>
              <YouTube videoId={trailerUrl} opts={opts} />
            </section>,
            document.getElementById('overlay--root'),
          )}
        <div className={styles.header__description}>
          <p>{trending.overview}</p>
        </div>
      </div>
      <div className={styles.header__fade} />
    </header>
  );
};

export default Banner;
