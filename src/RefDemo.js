import React, { Component } from 'react';

class RefDemo extends Component{

    display = () => {
        alert(this.user.value)
    }
    render(){
        return(
        <div>
            <input type="text" ref={(el) => this.user = el}/>
            <button onClick={this.display}>Click</button>
        </div>
        )}
}

export default RefDemo;