import React from 'react';
import { StudentContext } from './StudentContext';
import StudentComponent from './StudentComponent';
import uuid from 'uuid';

function StudentContainer() {
  const [student, setStudent] = React.useState([
    {
      id: uuid(),
      name: 'Dane',
      age: 24
    }
  ]);
  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      <StudentComponent />
    </StudentContext.Provider>
  );
}

export default StudentContainer;
