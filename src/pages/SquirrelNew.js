import React from 'react'
import Squirrel from './Squirrel'
class SquirrelNew extends React.Component{
    handleClick=()=>{
        console.log(this)
    }
    render(){
        return(
            <button onClick={this.handleClick}> 
                SEND
            </button>
        )
    }
}
export default SquirrelNew