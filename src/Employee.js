import React, { Component } from 'react';

class Employee extends Component{
    // constructor(){
    //     super()
    //     this.state ={
    //         name : 'kirti'
    //     }
    // }
    state = {
        name:'kirti',
        city:'Hyderabad'
    }

    changeName = () => {
        this.setState ({
            name:'Rajeev'
        })
    }
    changeCity = () => {
        setTimeout(() => {
            this.setState({
                city:'Lalitpur'
            })
        }, 3000);
    }

    render(){
        return(
            <div>
                <p>
                    {this.state.name}<br></br>
                    {this.state.city}                     
                </p>
                <button onClick={this.changeName}>Change Name</button>
                <button onClick={this.changeCity}>Change City</button>
            </div>
        )
    }
}

export default Employee;