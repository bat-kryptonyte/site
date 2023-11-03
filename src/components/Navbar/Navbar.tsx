import React from 'react';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>jeffreyd.cz</div>
      <div className={styles.links}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
