import React, { Component } from 'react';

class ListItem extends Component {
    state = {  }
    render() { 
        return ( 
        <div style={styles.container}>
            {
                this.props.student
            }
        </div> );
    }
}
 
export default ListItem;
const styles = {
    container: {
        width: "100%", 
        height: 30, 
        backgroundColor: "gray", 
        marginTop: 10, 
        color: "white"
    }
}