import { Clock, Book } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { useNavigate } from "react-router";

const CourseCard = ({ time, ...courseData }) => {
  const navigate = useNavigate();
  console.log(courseData);
  return (
    <>
      <div
        onClick={() => navigate("/details/" + courseData.id)}
        className="max-w-md md:max-w-xl  ml-8 mt-5 rounded-lg  "
      >
        <div className="card-header bg-amber-light  rounded-lg h-15 flex items-center  ">
          <div className="ml-8 md:mx-auto">
            {" "}
            <div className="text-4xl">{courseData.thumbnail}</div>
          </div>
        </div>
        <div className="bg-surface rounded-b-lg">
          <div className="p-4 border-b border-muted">
            <div className="tags flex gap-4 ">
              <span className="bg-amber-light text-amber p-2 rounded-xl text-sm">
                {courseData.category}
              </span>
              <span className="bg-success-light text-success p-2 rounded-xl text-sm">
                {courseData.level}
              </span>
            </div>
            <div className="content ">
              <h2 className="text-2xl font-sans font-semibold">
                {courseData.title}
              </h2>
              <p className="text-muted mb-2">{courseData.description}</p>
              <div className="progressbar w-full bg-border rounded-lg h-2">
                <div className="bar rounded-lg bg-amber "></div>
              </div>
              <div className=" flex gap-4 text-muted text-sm">
                <span>65%</span>
                <span>3/{courseData.lessons.length} lessons</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-4  ">
            <div className="flex items-center gap-2 text-muted  ">
              <Clock size={15} />
              {time} mins
            </div>
            <div className="flex items-center gap-2 text-muted">
              {" "}
              <Book size={15} />
              {courseData.lessons.length} lessons
            </div>
            <div className="flex gap-4 rounded-lg  ">
              <button
                onClick={(e) => e.stopPropagation()}
                className="border rounded-lg w-15 border-muted p-2 hover:bg-success-light  hover:border-success"
              >
                Edit
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="border rounded-lg w-15 border-muted p-2 hover:bg-success-light  hover:border-success"
              >
                Del
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseCard;
