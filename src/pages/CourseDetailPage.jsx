import CourseDetail from "../components/CourseDetail";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Clock, Book, ArrowLeft } from "lucide-react";

const CourseDetailPage = ({ CATEGORIES, LEVELS, courseData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData.find((course) => course.id === id);
  const time = course.lessons.reduce(
    (acc, lesson) => acc + parseInt(lesson.duration.split(" ")[0]),
    0,
  );

  return (
    <>
      <div>
        <div className="bg-surface h-15 flex items-center md:bg-cream ">
          <div
            onClick={() => navigate("/")}
            className=" ml-8 text-muted  flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft size={15} className="text-muted" />
            Back to Courses
          </div>
        </div>
        <div className="grid grid-cols-1 place-items-center  ">
          <CourseDetail key={course.id} {...course} time={time} />
        </div>
      </div>
    </>
  );
};
export default CourseDetailPage;
