import classes from './DISCQuestions.module.css';
import React, { Component } from 'react';
import green from '@material-ui/core/colors/green';
import Q from '../../components/Question/Question';
import { Button, LinearProgress, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

class DISCQuestions extends Component {
    state={
        count:1,
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

        const handleChange = (obj, objKey) => {
            
            let newObj = {
                ...this.state.question,
                [objKey]:obj
            };
            
            this.setState({
                count:this.state.count,
                question:newObj
            })
        }

        const onSubmit = () => {

        }

        const Questions = Object.keys(this.props.questions).map((qKey, index) => {
            
            return <Q 
                    key={qKey}
                    objKey={qKey}
                    index={index+1} 
                    most={this.props.questions[qKey].mostValue} 
                    least={this.props.questions[qKey].leastValue} 
                    questions={this.props.questions[qKey].question}
                    count={this.props.count}
                    change={this.props.onChange}/>
        })

        return(
            <React.Fragment>
                <LinearProgress variant="determinate" style={{maxWidth:800, margin:"0 auto"}} value={(this.props.count/24)*100}/>
                <div className={classes.box}>
                    <Typography style={{fontSize:"1rem", width:"40%", textAlign:"center"}} variant="body1">
                    Select <strong>one</strong> characteristic you relate to the 
                    most and <strong>one</strong> characteristic you relate to 
                    the least</Typography>
                    <div className={classes.questionContainer}>
                    {Questions}
                    </div>
                    <div className={classes.buttons}>
                    {
                    this.props.count > 1 ? <Button
                        onClick={this.props.onSubCount} 
                        style={{margin:5}} 
                        color="primary" 
                        variant="contained">Back</Button> : null
                    }   
                    {
                    this.props.count === 24 ? <GreenButton
                        style={{margin:5}} 
                        variant="contained"
                        onSubmit={onSubmit}>Submit</GreenButton> : null
                    }   
                    {
                    this.props.count < 24 ? <Button 
                        onClick={this.props.onAddCount} 
                        style={{margin:5}} 
                        color="primary" 
                        variant="contained">Next</Button> : null
                    }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.count,
        questions: state.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubCount: () => dispatch({type:'SUB_COUNT'}),
        onAddCount: () => dispatch({type:'ADD_COUNT'}),
        onChange: (obj, objKey) => dispatch({type:'UPDATE_ANSWERS', obj:obj, key:objKey})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DISCQuestions);