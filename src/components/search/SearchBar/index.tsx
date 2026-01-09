import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { Search } from 'lucide-react'; 
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/search"); // 그냥 이동만
  };

  return (
    <section className={styles.searchSection}>
      <div className={styles.searchBox}>
        <form onSubmit={handleSubmit}>
          <Search className={styles.searchIcon}/>
          <input/>
          <button type="submit">검색</button>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;