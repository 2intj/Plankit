import React, { useState } from 'react'; 
import styles from './SearchPage.module.css';
import { Plane, Map, Users} from 'lucide-react';
import { WiCloud } from "react-icons/wi";


function SearchPage() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchMap}>
        <Map className={styles.mapIcon} size={50} strokeWidth={2.0} />
          <h2>전주 지역 지도</h2>
      </div>
      <div className={styles.searchWeather}>
        <WiCloud className={styles.WeatherIcon} size={50} /><h2>전주 현지 날씨 </h2>
      </div>
    </section>

  );
}
export default SearchPage;