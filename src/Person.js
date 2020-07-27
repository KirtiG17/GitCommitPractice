import React, {Component} from 'react'
import Student from './Student'

class Person extends Component{
    constructor(){
        super()
        this.state ={
            name : 'kirti g'
        }

    }
    render(){
        return(
            <div>
                <Student sname={this.state.name}/>
            </div>
            
        )
    }
}

export default Person