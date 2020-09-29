import classes from './DISCQuestions.module.css';
import React, { Component } from 'react';
import green from '@material-ui/core/colors/green';
import Q from '../../components/Question/Question';
import { Button, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class DISCQuestions extends Component {
    state={
        count:24,
        question:{
            answer1:{
                mostValue:'',
                leastValue:'',
                question:["Gentle", "Persuasive", "Humble", "Original"]
            },
            answer2:{
                mostValue:'',
                leastValue:'',
                question:["Charming", "Co-operative", "Stubborn", "Sweet"]
            },
            answer3:{
                mostValue:'',
                leastValue:'',
                question:["Easily led", "Bold", "Loyal", "Charming"]
            },
            answer4:{
                mostValue:'',
                leastValue:'',
                question:["Open-minded", "Helpful", "Strong-willed", "Cheerful"]
            },
            answer5:{
                mostValue:'',
                leastValue:'',
                question:["Jovial", "Precise", "Gutsy", "Calm"]
            },
            answer6:{
                mostValue:'',
                leastValue:'',
                question:["Competitive", "Considerate", "Outgoing", "Agreeable"]
            },
            answer7:{
                mostValue:'',
                leastValue:'',
                question:["Fussy", "Obedient", "Determined", "Playful"]
            },
            answer8:{
                mostValue:'',
                leastValue:'',
                question:["Brave", "Inspiring", "Submissive", "Timid"]
            },
            answer9:{
                mostValue:'',
                leastValue:'',
                question:["Sociable", "Patient", "Independent", "Soft-spoken"]
            },
            answer10:{
                mostValue:'',
                leastValue:'',
                question:["Adventurous", "Receptive", "Warm", "Moderate"]
            },
            answer11:{
                mostValue:'',
                leastValue:'',
                question:["Talkative", "Controlled", "Customary", "Decisive"]
            },
            answer12:{
                mostValue:'',
                leastValue:'',
                question:["Polished", "Daring", "Diplomatic", "Satisfied"]
            },
            answer13:{
                mostValue:'',
                leastValue:'',
                question:["Aggressive", "Entertaining", "Easy mark", "Fearful"]
            },
            answer14:{
                mostValue:'',
                leastValue:'',
                question:["Cautious", "Decided", "Convincing", "Pleasant"]
            },
            answer15:{
                mostValue:'',
                leastValue:'',
                question:["Willing", "Eager", "Agreeable", "Enthusiastic"]
            },
            answer16:{
                mostValue:'',
                leastValue:'',
                question:["Confident", "Compassionate", "Tolerant", "Assertive"]
            },
            answer17:{
                mostValue:'',
                leastValue:'',
                question:["Well-disciplined", "Generous", "Animated", "Persistent"]
            },
            answer18:{
                mostValue:'',
                leastValue:'',
                question:["Admirable", "Kind", "Resigned", "Force of character"]
            },
            answer19:{
                mostValue:'',
                leastValue:'',
                question:["Respectful", "Enterprising", "Optimistic", "Willing to please"]
            },
            answer20:{
                mostValue:'',
                leastValue:'',
                question:["Argumentative", "Flexible", "Nonchalant", "Carefree"]
            },
            answer21:{
                mostValue:'',
                leastValue:'',
                question:["Trusting", "Contented", "Positive", "Peaceful"]
            },
            answer22:{
                mostValue:'',
                leastValue:'',
                question:["Good mixer", "Cultured", "Vigorous", "Lenient"]
            },
            answer23:{
                mostValue:'',
                leastValue:'',
                question:["Companionable", "Accurate", "Outspoken", "Restrained"]
            },
            answer24:{
                mostValue:'',
                leastValue:'',
                question:["Restless", "Neighbourly", "Popular", "Orderly"]
            }
        }
    }   

    
    render() {
        const GreenButton = withStyles({
            root: {
              backgroundColor: green[400],
              color:"white",
              '&:hover':{
                backgroundColor: green[600],
              },
              '&:focus':{
                backgroundColor: green[600],
              }
            }
          })((props) => <Button color="default" {...props} />);
        const addCount = () => {
            this.setState({
                ...this.state,
                count: this.state.count + 1
            })
            console.log(this.state.count)
        }

        const subCount = () => {
            this.setState({
                ...this.state,
                count: this.state.count - 1
            })
        }
        const primary = green[500];
        const DisplayedQuestions = {...this.state};

        const Questions = Object.keys(DisplayedQuestions.question).map((qKey, index) => {
            console.log(DisplayedQuestions.question[qKey]);
            return <Q 
                    key={index}
                    index={index+1} 
                    most={DisplayedQuestions.question[qKey].most} 
                    least={DisplayedQuestions.question[qKey].least} 
                    questions={DisplayedQuestions.question[qKey].question}
                    count={DisplayedQuestions.count}/>
        })

        return(
            
            <div className={classes.box}>
                <LinearProgress variant="determinate" value={(this.state.count/24)*100}/>
                <div className={classes.questionContainer}>
                {Questions}
                </div>
                {
                 this.state.count === 24 ? <GreenButton
                    style={{float:"right", margin:5}} 
                    variant="contained">Submit</GreenButton> : null
                }   
                {
                this.state.count < 24 ? <Button 
                    onClick={addCount} 
                    style={{float:"right", margin:5}} 
                    color="primary" 
                    variant="contained">Next</Button> : null
                }
                {
                 this.state.count > 1 ? <Button
                    onClick={subCount} 
                    style={{float:"right", margin:5}} 
                    color="primary" 
                    variant="contained">Back</Button> : null
                }   
                
            </div>
        )
    }
}

export default DISCQuestions;