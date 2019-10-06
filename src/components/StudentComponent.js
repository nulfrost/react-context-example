import React from 'react';
import { StudentContext } from './StudentContext';
import uuid from 'uuid';

function StudentComponent() {
  const { student, setStudent } = React.useContext(StudentContext);
  const inputRef = React.useRef();
  return (
    <>
      <h1>List of currently enrolled students</h1>
      <input type='text' ref={inputRef} name='student' />
      <ul>
        {student.map(s => {
          return (
            <li key={s.id}>
              {s.name} - {s.age}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() =>
          setStudent([
            ...student,
            {
              id: uuid(),
              name: inputRef.current.value,
              age: Math.floor(Math.random() * 100)
            }
          ])
        }
      >
        Add Student
      </button>
    </>
  );
}

export default StudentComponent;
