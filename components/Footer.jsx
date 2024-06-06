'use client';
import Link from 'next/link';
import Image from 'next/image'; 
import styles from '/home/diana/firstday/styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} All rights reserved
          </p>
          <Link href="/privacy-policy" className={styles.privacyLink}>
            Privacy Policy
          </Link>
        </div>
        <div className={styles.contactSection}>
          <h3 className={styles.menuHeading}>CONTACTS</h3>
          <p className={styles.phoneNumber}>+7 778 613 5224</p>
          <p>
            <a href="mailto:info@blog.kz">info@blog.kz</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
