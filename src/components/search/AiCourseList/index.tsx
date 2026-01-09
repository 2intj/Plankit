import styles from "./AiCourseList.module.css";
import { useNavigate } from "react-router-dom";

function AiCourseList(){
  const navigate = useNavigate();
  const handleGoAi = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/ai"); // 그냥 이동만
  };
  const posts = [1, 2, 3];
  return(
    <section className={styles.section}>
       <h3 className={styles.sectionTitle}>AI 추천 여행 코스</h3>      
          <div className={styles.aiGrid}>
            {posts.map((n) => (
              <div className={styles.aiCard} key={n}>
                <h4>전주 야경 데이트 코스 {n}</h4>
                <p>AI가 추천하는 맞춤 여행 일정</p>
                <span className={styles.link} onClick={handleGoAi} >코스보기 →</span>
              </div>
            ))}
          </div>
    </section>

  );
}
export default AiCourseList;