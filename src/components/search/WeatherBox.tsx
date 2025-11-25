import { WiCloud } from "react-icons/wi";
import styles from "./WeatherBox.module.css";

function WeatherBox(){
  return (
     <div className={styles.weatherBox}>
        <WiCloud className={styles.weatherIcon} size={60} />
        <h2>전주 현재 날씨</h2>
        <p className={styles.temp}>22°C</p>
        <p>최고 26°C · 최저 17°C</p>
     </div>
  );
}
export default WeatherBox;