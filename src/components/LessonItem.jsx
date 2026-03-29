import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { Plus, Check, Circle, Pen, Trash } from "lucide-react";
import { useState } from "react";
const LessonItem = ({ ...course }) => {
  const [lessons, setLessons] = useState(course.lessons);
  const [Title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const [editValue, setEditValue] = useState("");
  const [completedLessons, setCompletedLessons] = useState([]);
  const [editingID, setEditingID] = useState(null);
  const handleCompletenessToggle = (index) => {
    const newCompletedLessons = [...completedLessons];
    newCompletedLessons[index] = !newCompletedLessons[index];
    setCompletedLessons(newCompletedLessons);
  };
  const handleDeleteLesson = (id) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };
  const handleAddLesson = () => {
    const newLesson = {
      id: Date.now().toString(),
      title: Title,
      duration: duration,
    };
    setLessons([...lessons, newLesson]);
    setTitle("");
    setDuration("");
  };
  const handleEditLesson = (id, newTitle) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === id ? { ...lesson, title: newTitle } : lesson,
      ),
    );
  };

  return (
    <>
      <div>
        <div className="  font-sans mt-5">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Lessons</h2>
            <div className="text-muted mr-5">{lessons.length} total</div>
          </div>
          <button className="text-amber flex gap-2 items-center">
            <Plus size={20} className="bg-amber text-white rounded-full" />
            Add new lesson
          </button>
          <div>
            <ul>
              {lessons.map((lesson, index) => (
                <li
                  key={lesson.id}
                  className={`group ${completedLessons && completedLessons[index] ? "bg-success-light" : "bg-surface"}  rounded-lg p-4 flex gap-2 mb-4 items-center justify-between`}
                >
                  <div className="flex gap-2 items-center">
                    <button onClick={() => handleCompletenessToggle(index)}>
                      {completedLessons && completedLessons[index] ? (
                        <Check
                          size={20}
                          className="rounded-full bg-success text-white"
                        />
                      ) : (
                        <Circle size={20} className="rounded-full text-muted" />
                      )}
                    </button>
                    <span className="hidden md:block text-muted flex-1">
                      {index + 1}.
                    </span>
                    {editingID === lesson.id ? (
                      <>
                        <div className="flex items-center justify-between gap-4 ">
                          <div className="w-xl">
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={(e) => {
                                handleEditLesson(lesson.id, e.target.value);
                                setEditingID(null);
                                setEditValue("");
                              }}
                              className="hidden w-full md:block flex-1 bg-transparent outline-none border border-amber rounded-lg p-2 outline-1 focus:outline-amber"
                            />
                          </div>

                          <div className="flex gap-2 items-center hidden md:flex">
                            <button
                              onClick={(e) => e.stopPropagation()}
                              className="bg-amber text-white p-2 rounded-lg  "
                            >
                              Save
                            </button>
                            <button
                              onClick={(e) => e.stopPropagation()}
                              className="bg-surface text-muted p-2 rounded-lg border border-muted hover:border hover:border-black hover:text-black"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <span
                        className={`${completedLessons && completedLessons[index] ? "line - through text-muted" : ""}`}
                      >
                        {lesson.title}
                      </span>
                    )}

                    {!completedLessons && <span>{lesson.title}</span>}
                  </div>{" "}
                  <div
                    className={`${editingID === lesson.id ? "hidden" : "md:flex"} text-muted flex gap-4`}
                  >
                    {lesson.duration}
                    <div className="hidden md:flex">
                      <div className="hidden  gap-4 group-hover:flex">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditLesson(lesson.id);
                            setEditingID(lesson.id);
                            setEditValue(lesson.title);
                          }}
                          className="hover:bg-cream p-2"
                        >
                          {" "}
                          <Pen size={15} className="text-danger" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteLesson(lesson.id);
                          }}
                          className="hover:bg-cream p-2"
                        >
                          <Trash size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 w-full hidden md:flex">
            <input
              type="text"
              placeholder="New lesson title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2  rounded-lg mt-4 bg-surface h-10 focus:outline-none focus:ring-1 focus:ring-amber"
            />
            <input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 rounded-lg mt-4 bg-surface h-10 focus:outline-none focus:ring-1 focus:ring-amber"
            />
            <button
              onClick={() => {
                handleAddLesson();
              }}
              className="bg-amber text-white p-2 rounded-lg mt-2 w-96 hover:bg-amber/90"
            >
              Add Lesson
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LessonItem;
