import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoursePage from "./pages/CoursePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import { courseData, CATEGORIES, LEVELS } from "./data/courseData";
import { useParams } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <CoursePage
              courseData={courseData}
              CATEGORIES={CATEGORIES}
              LEVELS={LEVELS}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <CourseDetailPage
              courseData={courseData}
              CATEGORIES={CATEGORIES}
              LEVELS={LEVELS}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
