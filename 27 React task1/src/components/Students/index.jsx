/* eslint-disable no-unused-vars */
import React from "react";
import { students } from './students.js' 

function Students() {
  return (
    <>
      <ul>
        {students.map((student, idx) => {
          return <li key={idx}>{student.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Students;
