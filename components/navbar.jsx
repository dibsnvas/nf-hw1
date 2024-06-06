'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from '/home/diana/firstday/styles/Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container mx-auto flex items-center justify-between">
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles['navbar-menu']} ${menuOpen ? styles.active : ''}`}>
          <li className={styles['navbar-item']}>
            <Link href="/" className={styles['navbar-link']}>Home</Link>
          </li>
          <li className={styles['navbar-item']}>
            <Link href="/about" className={styles['navbar-link']}>About</Link>
          </li>
          <li className={styles['navbar-item']}>
            <Link href="/blog" className={styles['navbar-link']}>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
