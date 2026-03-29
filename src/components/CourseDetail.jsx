import { FaReact } from "react-icons/fa";
import LessonItem from "./LessonItem";
import { Clock, Book, Check } from "lucide-react";
const CourseDetail = ({ time, ...course }) => {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center   ">
        <div className="w-full ml-8 mt-5 rounded-lg  md:w-full ">
          <div
            className={`bg-amber-light md:bg-surface p-4 rounded-lg md:flex items-center gap-4  `}
          >
            <div className="text-4xl md:text-6xl">{course.thumbnail}</div>
            <div>
              <div className="tags flex gap-4 ">
                <span className="bg-amber-light text-amber p-2 rounded-xl text-sm">
                  {course.category}
                </span>
                <span className="bg-success-light text-success p-2 rounded-xl text-sm">
                  {course.level}
                </span>
              </div>
              <div className="content ">
                <h2 className="text-2xl font-sans font-semibold">
                  {course.title}
                </h2>
                <p className="text-muted mb-2">
                  Master core React concepts including components , state and
                  hooks.
                </p>
                <div className="flex gap-4 p-4  ">
                  <div className="flex items-center gap-2 text-muted  ">
                    <Clock size={15} />
                    {time} mins
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    {" "}
                    <Book size={15} />
                    {course.lessons.length} lessons
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="completed"
                      name="completed"
                      className="mr-2 accent-success"
                    />

                    <label htmlFor="completed" className="text-muted">
                      0 completed
                    </label>
                  </div>
                </div>
                <div className="progressbar w-full bg-border rounded-lg h-2">
                  <div className="bar rounded-lg bg-amber "></div>
                </div>
                <div className="text-muted">0% complete</div>
              </div>
            </div>
          </div>

          <LessonItem {...course} />
        </div>
      </div>
    </>
  );
};
export default CourseDetail;
