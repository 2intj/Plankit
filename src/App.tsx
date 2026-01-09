import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./pages/Main";
import Footer from "./components/layout/Footer";

import SearchPage from "./pages/SearchPage";
import AiCoursePage from "./pages/AiCoursePage";
import CommunityPage from "./pages/CommunityPage";
import LoginPage from "./pages/LoginPage";

import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <Header />

        <div className={styles.pageBody}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/ai" element={<AiCoursePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
  
}

export default App