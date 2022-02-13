import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [showNavBg, setShowNavBg] = useState(false);

    useEffect(() => {
      let listener;
      listener = document.addEventListener('scroll', (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 120) {
          if (showNavBg !== true) {
            setShowNavBg(true);
          }
        } else {
          if (showNavBg !== false) {
            setShowNavBg(false);
          }
        }
      });
      return () => {
        document.removeEventListener('scroll', listener);
      };
    }, [showNavBg]);

  return (
    <div className={`${styles.nav__bar} ${showNavBg ? styles.navBar__bg : ''}`}>
      <img
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix_logo"
      />
      <img
        className={styles.avatar}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="login_avatar"
      />
    </div>
  );
};

export default NavBar;
