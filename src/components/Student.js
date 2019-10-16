import React from 'react';
import "./Student.scss";

class Student extends React.Component {
    constructor(props){
        super(props)
        debugger
    }
    state = {
        count: 0
    }

    clickHandler = ()=>{
        // this.state.count++ do not modify state directly
       this.setState({count: this.state.count + 1})
    }

    
    render() {
        debugger
        return (
            <div  className="student">
                <h3 onClick={this.clickHandler}>Hi, I'm {this.props.firstname} {this.props.lastname}</h3>
                <p>Write me an email: {this.props.email} </p>
                <p>count: {this.state.count}</p>
                <button onClick={()=> {this.props.deleteMe(this.props.email)}}>Delete me</button>
                <button onClick={()=> {this.props.addStudent(this.props)}}>Add Student</button>
            </div>
        )
    }

}

export default Student