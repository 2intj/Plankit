import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { Search } from 'lucide-react'; 

function SearchBar() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchBox}>
        <form >
          <Search className={styles.searchIcon}/>
          <input/>
          <button type="submit">검색</button>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;