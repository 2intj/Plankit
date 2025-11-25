import { Map } from "lucide-react";
import styles from "./MapBox.module.css";

function MapBox(){
  return(
    <div className={styles.mapBox}>
      <Map className={styles.mapIcon} size={50} strokeWidth={2} />
      <h2>전주지역 지도</h2>
      <p className={styles.mapSub}>[ 네이버 및 카카오 지도 API ]</p>
    </div>

  );
}
export default MapBox;