import React, { Component } from 'react';
import ListItem from './listItem';

class Body extends Component {
    state = { 
       
     }
    render() { 
        return (  
             <div>
                {
                    this.props.studentList.map(s => <ListItem student={s}/>)
                }
            </div> 
             );
    }
}
 
export default Body;
