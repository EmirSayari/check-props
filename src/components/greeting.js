import React from 'react'

function greeting(props) {
    return (
        <div>
         <h1>Welcome {props.name}{props.age}{props.children} </h1>   
        </div>
    )
}

export default greeting