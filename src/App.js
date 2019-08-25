import React,{Component} from 'react';
import logo from './logo.svg';
import './style.css';
import Day from "./DayComponent"
import Stats from './Stats'

class App extends Component {
  constructor(){
    super()
    this.state={
      currentSquat: 0,
      currentDeadLift:0,
      currentBench:0,
      currentOhp:0

    }
   // this.handleChange= this.handleChange.bind(this)
  }
 /* if needed
 handleChange(event){
    const{name,value} = event.target
    this.setState({
      [name]:value
    })
  }
*/
  callBack = (event) =>{
    const{name,value} = event.target
    this.setState({
      [name]:value
    })
  }
  render(){
    return (
      <div >
      <Stats 
             currentBench = {this.state.currentBench}
             currentDeadLift = {this.state.currentDeadLift}
             currentSquat = {this.state.currentSquat}
             currentOhp = {this.state.currentOhp}
            parentCallback = {this.callBack}
      />
      <div className='main'>
        
        
          <Day workout1="Bench" weight1={this.state.currentBench} 
              workout2="OHP" weight2={this.state.currentOhp}
              day="1"
                />
              
          <Day workout1="DeadLift" weight1={this.state.currentDeadLift} 
              workout2="Front Squat" weight2={this.state.currentSquat}
              day="2"
                /> 
              
          <Day workout1="Overhead Press" weight1={this.state.currentOhp} 
              workout2="Incline Bench" weight2={this.state.currentBench}
              day="3"
                /> 
                 
          <Day workout1="Squat" weight1={this.state.currentSquat} 
              workout2="Sum DeadLift" weight2={this.state.currentDeadLift}
              day="4"
                /> 
                   
          <Day workout1="Bench" weight1={this.state.currentBench} 
              workout2="Close Grip Bench" weight2={this.state.currentBench}
              day="5"
                />  
                   
          <Day workout1="DeadLift" weight1={this.state.currentDeadLift} 
              workout2="Squat" weight2={this.state.currentSquat}
              day="6"
                /> 
        </div>                                    
      </div>
    )
  }
  
    
}

export default App;
