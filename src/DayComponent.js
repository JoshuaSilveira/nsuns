import React from 'react'
import Cell from './Cell'
import {sets} from './arrays'
import {reps} from './arrays'
import {secondSet} from './arrays'
import {secondReps} from './arrays'
import './style.css'
class Day extends React.Component{
    

    render(){
       /**
        * Logic for picking the apporpriate weight multipliers for the right excersizes 
        */ 
       const setType = this.props.day==1? sets[0]:(this.props.day==6? sets[2]:sets[1] )
       
       var secSetType;

       switch(this.props.day){
            case '1':
               secSetType=secondSet[0];
               break;
            case '2':
                secSetType=secondSet[1];
                break;
            case '4':
                secSetType=secondSet[0];
                break; 
            case '6':
                secSetType=secondSet[3];
                break;  
            default:
                secSetType=secondSet[2];
                break;              
       }
       
       
       var repsType;
        switch(this.props.day){
            case '1':
                repsType=reps[0];
                break;
            case '2':
                repsType=reps[1];
                break;
            case '5':
                repsType=reps[3];
                break;    
            case '6':
                repsType=reps[4];
                break;    
            default:
                repsType=reps[2];
                break;       
        }

        var secondRepsType;

        switch(this.props.day){
            case '1':
                secondRepsType=secondReps[0];
                break;
            case '2':
                secondRepsType=secondReps[1];
                break;
            case '3':
                secondRepsType=secondReps[0];
                break;    
            case '4':
                secondRepsType=secondReps[1];
                break;
            case '5':
                secondRepsType=secondReps[0];
                break;    
            default:
                secondRepsType=secondReps[2];
                break;                
        }




        return(
            <div className='table'>            
                <table >
                    <tr className='tr'>
                        <td className='td'>{this.props.workout1}</td>
                        {setType.map((weightNum,i)=>
                            <td className='td1'><Cell weight={weightNum*this.props.weight1} sets={repsType[i]}/></td>
                        )}
                    </tr>
                    <tr className='tr'>
                        <td className='td'>{this.props.workout2}</td>
                        {secSetType.map((weightNum,i)=>
                            <td className='td1'><Cell weight={weightNum*this.props.weight2} sets={secondRepsType[i]}/></td>
                        )}
                    </tr>
                </table>
            </div>
        )
    }
}

export default Day