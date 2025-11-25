import styles from "./AiCourseList.module.css";

function AiCourseList(){
  return(
    <section className={styles.section}>
       <h3 className={styles.sectionTitle}>AI 추천 여행 코스</h3>

       <div className={styles.aiGrid}>
        <div className={styles.aiCard}>
          <h4>전주 야경 데이트 코스</h4>
          <p>AI가 추천하는 맞춤 여행 일정</p>
          <span className={styles.link}>코스보기 →</span>
        </div>
       </div>
    </section>

  );
}
export default AiCourseList;