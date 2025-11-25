import MapBox from "../components/search/MapBox";
import WeatherBox from "../components/search/WeatherBox";
import AiCourseList from "../components/search/AiCourseList";
import HotPlaceList from "../components/search/HotPlaceList";
import PostList from "../components/search/PostList";
import styles from './SearchPage.module.css';



function SearchPage() {
  return (
    <div className={styles.container}>
      <section className={styles.topSection}>
        <MapBox />
        <WeatherBox />
      </section>
      <AiCourseList />
      <HotPlaceList />
      <PostList />
    </div>

  );
}
export default SearchPage;