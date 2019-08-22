import React from 'react'
import './style.css'
class Stats extends React.Component{
    
    handleChange=(event)=>{
        this.props.parentCallback(event);
      }
    
    render(){
        return(
        <div className='stats'>
            <ul className='list' >
            <li>
                <input className='navlist' type="text"
                    value={this.props.currentBench}
                    name="currentBench"
                    placeholder="Enter Current Bench"
                    onChange={this.handleChange}
                />
                {' '}
                Current Bench: {this.props.currentBench}
            </li>
            <li>
                <input className='navlist' type="text"
                value={this.props.currentSquat}
                name="currentSquat"
                placeholder="Enter Current Squat"
                onChange={this.handleChange}
                />
                
                Current Squat: {this.props.currentSquat}
            </li>
            <li>
                <input className='navlist' type="text"
                value={this.props.currentDeadLift}
                name="currentDeadLift"
                placeholder="Enter Current deadlift"
                onChange={this.handleChange}
                />
                
                Current deadlift: {this.props.currentDeadLift}
            </li>
            <li>
                <input className='navlist' type="text"
                value={this.props.currentOhp}
                name="currentOhp"
                placeholder="Enter Current OHP"
                onChange={this.handleChange}
                />
                {' '}
                Current OHP: {this.props.currentOhp}
            </li>
            </ul>

           
        </div>
            
        )
    }
}

export default Stats