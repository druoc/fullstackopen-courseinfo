import Part from "./Part";
import Total from "./Total";

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );

  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map((lesson) => (
        <Part key={lesson.id} part={lesson.name} exercise={lesson.exercises} />
      ))}
      <Total totalExercises={totalExercises} />
    </>
  );
};

export default Course;
