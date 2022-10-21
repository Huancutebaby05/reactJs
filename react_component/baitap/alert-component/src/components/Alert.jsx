// tao bang function
// function Alert(infor) {
//     return (
// <div>
//     <p> Xin chao {infor.name}</p>
// </div>
// )}


// tao bang class
import React from "react"
class Alert extends React.Component {
    render(){
        return(
            <div>
    <p> Xin chao {this.props.name}</p>
</div>
        )
    }
}

export default Alert