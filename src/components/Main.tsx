import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SearchBar from './main/SearchBar';
import styles from './Main.module.css';
import { Plane, Map, Users } from 'lucide-react';


function Main() {

  return (
    <main className={styles.mainContainer}>
      <div className={styles.logo}> 
        <h1>당신의 여행을 설계하는 <span className={styles.logoOne}>Plan:</span><span className={styles.logoTwo}>Kit</span></h1>
        <h3>AI가 제안하는 여행코스, 실시간 날씨와 핫플레이스 정보까지 한눈에</h3>
      </div>
      <SearchBar />
        <section className={styles.featureSection}>
          <Link to="/ai" className={styles.cardLink}>
            <div className={styles.featureCard}>
              <Plane size={50} strokeWidth={1.5} />
              <h2>AI 여행 코스 추천</h2>
              <p>나이, 취향, 동행인 정보를 기반으로 맞춤 여행 일정을 제공합니다.</p>
            </div>
          </Link>
          <Link to="/search" className={styles.cardLink}>
            <div className={styles.featureCard}>
              <Map size={50} strokeWidth={1.5} />
              <h2>지도 기반 핫플레이스</h2>
              <p>실시간 날씨와 함께 인기 여행지 위치를 지도에서 바로 확인하세요.</p>
            </div>
          </Link>
          <Link to="/community" className={styles.cardLink}>
            <div className={styles.featureCard}>
              <Users size={50} strokeWidth={1.5} />
              <h2>여행 커뮤니티</h2>
              <p>다른 여행자들과 여행기를 공유하고 소통할 수 있습니다.</p>
            </div>
          </Link>
        </section>
    </main>
  );
}

export default Main;
