import React, {Component} from 'react'

// class Student extends Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.sname}</p>
//             </div>
//         )
//     }
// }

const Student = (props) => {
    return (
        <div>
            {props.sname}
        </div>
    )
}

export default Student