import React from 'react';

const Header = ({ name }) => {
  console.log(name);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

const Content = ({ parts }) => {
  console.log(parts);
    return (
    <div>
      {parts.map((part)=> <Part key={part.id} name={part.name} exercises={part.exercises}/>
      )}
    </div>
  );
};

const Part = ({name, exercises }) => {
    return (
    <p>
      {name}-{exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, number)=> sum + number.exercises,0)
    return (
    <p>
     <strong>total of {total} exercises</strong> 
    </p>
  );
};

const Course = ({ course }) => {
  console.log(course);
    return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
