import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Body from './Components/body';

class App extends Component {
  state = { 
    students:["ali0", "ali1", "ali2", "ali3"]
   }
   addName = (name) =>{
      this.setState({students: [...this.state.students, name]});
  }
  render() { 
    return ( <div>
      <Header addName={this.addName}/>
     <Body studentList={this.state.students}/>
    </div> );
  }
}
 
export default App;

