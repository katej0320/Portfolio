'use client'

import { useState } from 'react';
import styles from './Nav.module.css';

export default function Navbar() {
  const [active, setActive] = useState('home');

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li
          className={`${styles.item} ${active === 'home' ? styles.active : ''}`}
          onClick={() => setActive('home')}
        >
          Home
        </li>
        <li
          className={`${styles.item} ${active === 'projects' ? styles.active : ''}`}
          onClick={() => setActive('projects')}
        >
          Projects
        </li>
        <li className={styles.dropdown}>
          <span className={styles.item}>Info</span>
          <ul className={styles.dropdownMenu}>
            <li
              className={`${styles.item} ${active === 'resume' ? styles.active : ''}`}
              onClick={() => setActive('resume')}
            >
              My Resume
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <span className={styles.item}>Contact</span>
          <ul className={styles.dropdownMenu}>
            <li
              className={`${styles.item} ${active === 'social' ? styles.active : ''}`}
              onClick={() => setActive('social')}
            >
              Social Media
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
