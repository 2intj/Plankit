import { Heart } from "lucide-react";
import styles from "./HotPlaceList.module.css";

function HotPlaceList(){
  const posts = [1, 2, 3];
  return(
     <section className={styles.section}>
      <h3 className={styles.sectionTitle}>전주 인기 핫플레이스</h3>
       <div className={styles.placeGrid}>
        {posts.map((n) => (
        <div className={styles.placeCard}  key={n}>
           <img src="https://zzzmini.github.io/images/shoes1.jpg" alt="전주 한옥마을" className={styles.placeImage}/>
            <div className={styles.placeInfo}>
              <h4>전주 한옥마을 {n} </h4>
              <p>전주 한옥카페</p>
              <div className={styles.likeBox}>
                <Heart size={18} fill="green" color="green" />
                <span>좋아요</span>
              </div>
            </div>
        </div>
        ))}
       </div>
     </section>

  );
}
export default HotPlaceList;