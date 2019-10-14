import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./components/Student";
import Teacher from "./components/Teacher";

import students from "./data/students.json";

function App() {

  return (
    <div className="App">
      <Teacher name="Lloyd" />
      <Teacher name="Laura" />
      <Teacher name="Jurgen" />
      <Teacher name="Miguel" />

      {
        students.map((student)=> 
          <Student 
            {...student}
          />
        )
        // equivalent to above
        // students.map((student)=> 
        //   <Student 
        //     firstname={student.firstname}
        //     lastname={student.lastname}
        //     email={student.email}
        //   />
        // )   
      }
    </div>
  );
}

export default App;
