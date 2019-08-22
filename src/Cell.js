import React from 'react'


function Cell(props){
    return(
        <p>{Math.ceil((props.weight/5).toFixed(0)*5)}x{props.sets}</p>
    );
}

export default Cell