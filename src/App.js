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
    debugger
    var searchQuery = e.target.value

    var searchResult = this.state.students.filter((student)=>
      student.firstname.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 || 
      student.lastname.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    )
    debugger
    this.setState({filteredStudents: searchResult})
  }

  render() {
    debugger
    return (
      <div className="App">
        <input onChange={this.handleSearch} type="text"/>
        {
          this.state.filteredStudents.map((student)=> 
            <Student 
              {...student}
            />
          )
  
        }
      </div>
    );
  }
}

export default App;
