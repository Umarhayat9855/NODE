import React, { Component } from 'react';

class Header extends Component {
    state = { 
        name: "", 
        enabled: false
     }
  
     toggle = () =>{
        this.setState({enabled: !this.state.enabled});
     }
    render() { 
        return ( 
        <div style={styles.container}>
           {
               this.state.enabled === true ? 
               <input value={this.state.name} type="text" placeholder="enter student name" onChange={(e) => this.setState({name: e.target.value})}/>
               : <span>{this.state.name}</span>
           }
                <button onClick={() => {
                this.props.addName(this.state.name);
                this.setState({name: ""});
            }}>Add</button> 
            <button onClick={() => this.toggle()}>
                {
                    this.state.enabled === true? "Disable": "Enable"
                }
             </button>

        </div> );
    }
}
 
export default Header;

const styles = {
    container:{
        width: "100%", 
        height: 70, 
        backgroundColor: "#f0f0f0"
    }
}