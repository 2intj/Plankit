import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logoText}>
            Plan:<span className={styles.logoHighlight}>Kit</span>
          </h1>
        </Link>
      </div>
      <div className={styles.headerNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/search">여행지 검색</Link></li>
          <li className={styles.navItem}><Link to="/ai">AI 코스추천</Link></li>
          <li className={styles.navItem}><Link to="/community">커뮤니티</Link></li>
          <li className={styles.navItem}><Link to="/login">로그인</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;