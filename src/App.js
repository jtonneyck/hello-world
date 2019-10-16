import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import students from "./data/students.json";

class App extends Component {

  state = {
    students: students,
    filteredStudents: students
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
    debugger
    var filteredStudents = this.state.filteredStudents.filter((student)=> {
      debugger
      return !(student.email === email)
    })

    this.setState({filteredStudents: filteredStudents})
  }

  render() {
    debugger
    return (
      <div className="App">
        <input onChange={this.handleSearch} type="text"/>
        {
          this.state.filteredStudents.map((student)=> 
            <Student 
              deleteMe={this.deleteStudent}
              {...student}
            />
          )
  
        }
      </div>
    );
  }
}

export default App;
