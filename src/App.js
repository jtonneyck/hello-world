import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import students from "./data/students.json";

class App extends Component {

  state = {
    students: students,
    filteredStudents: students,
    pickedStudents: []
  }

  handleSearch = (e)=> {
    var searchQuery = e.target.value

    var searchResult = this.state.students.filter((student)=>
      student.firstname.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 || 
      student.lastname.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    )

    this.setState({filteredStudents: searchResult})
  }

  deleteStudent = (email)=> {
    
    var filteredStudents = this.state.filteredStudents.filter((student)=> {
      return !(student.email === email)
    })

    this.setState({filteredStudents: filteredStudents})
  }

  addStudent = (student) => {
    var pickedStudentsCopy = [...this.state.pickedStudents]
    pickedStudentsCopy.push(student)
    this.setState({pickedStudents: pickedStudentsCopy})
  }

  render() {
    
    return (
      <div className="App">
        <input onChange={this.handleSearch} type="text"/>
        <div className="students-container">
          {
            this.state.filteredStudents.map((student)=> 
              <Student 
                addStudent={this.addStudent}
                deleteMe={this.deleteStudent}
                {...student}
              />
            )
          }
        </div>
        <div className="picked-students-container"> 
          <h1>Picked students</h1>
          <ul>
            {this.state.pickedStudents.map((student)=> 
              <li>{student.firstname}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
