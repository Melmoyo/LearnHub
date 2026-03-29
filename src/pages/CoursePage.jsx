import CourseCard from "../components/CourseCard";
import StatCard from "../components/StatCard";

import { useState } from "react";

const CoursePage = ({ CATEGORIES, LEVELS, courseData }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  console.log(courseData);
  const displayCourse =
    activeCategory === "All"
      ? courseData
      : courseData.filter((course) => course.category === activeCategory);
  return (
    <>
      <div className=" mt-auto ">
        <div className="hidden md:block ml-8 mt-5">
          <h1 className="text-5xl  font-semi-bold font-display">
            My Learning Hub
          </h1>
          <p className="text-muted">
            Track your progress across all your courses
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard
            value={courseData.length}
            statTitle="Courses"
            statTitleDesktop="Total Courses"
            subtitle="of 13 total"
          />
          <StatCard
            statTitle="In Progress"
            value={0}
            subtitle="in your library"
          />
          <div className="hidden md:contents">
            <StatCard
              statTitle="Lessons Done"
              subtitle="courses started"
              value={0}
            />
            <StatCard
              statTitle="completed"
              subtitle="courses finished"
              value={0}
            />
          </div>
        </div>
        <div className="flex ml-8 mt-5 justify-between">
          <div className="flex gap-4 flex-wrap">
            {CATEGORIES.map((category) => (
              <button
                onClick={() => setActiveCategory(category)}
                key={category}
                className="w-auto p-2 h-6 rounded-xl bg-surface text-muted flex items-center"
                style={
                  activeCategory === category
                    ? { backgroundColor: "var(--color-amber)", color: "white" }
                    : { backgroundColor: "white", color: "var(--color-muted)" }
                }
              >
                {category}
              </button>
            ))}
          </div>
          <div className="hidden md:flex mr-20">
            <input
              type="text"
              placeholder="Search courses"
              className="rounded-xl text-muted border border-muted  p-2 bg-surface"
            />
          </div>
        </div>
        {activeCategory && (
          <div className="grid grid-cols-1  md:grid-cols-2 mr-20 ">
            {displayCourse.map((course) => {
              const time = course.lessons.reduce(
                (acc, lesson) => acc + parseInt(lesson.duration.split(" ")[0]),
                0,
              );
              return <CourseCard key={course.id} time={time} {...course} />;
            })}
            ;
          </div>
        )}
      </div>
    </>
  );
};
export default CoursePage;
