import styles from "./PostList.module.css";

function PostList() {
  const posts = [1, 2, 3];
  return(
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>관련 게시글</h3>
      <div className={styles.postGrid}>
        {posts.map((n) => (
          <div className={styles.postCard} key={n}>
            <h4>전주 여행 후기#{n} </h4>
            <p>
              AI가 전주 한옥마을의 감성과 맛집을 즐긴 하루,
              날씨도 좋아서 산책하기 좋았어요..
            </p>
            <span className={styles.link}>자세히 보기 →</span>
          </div>
        ))}
      </div>
    </section>

  );
}
export default PostList;