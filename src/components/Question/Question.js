import React, { useState } from 'react';
import { Button, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Zoom from '@material-ui/core/Zoom';
import classes from './Question.module.css';
const Questions = (props) => {
    let [question, setQuestion] = useState({
        mostValue:props.most,
        leastValue:props.least,
        question:[...props.questions]
    })

    let [error, setError] = useState({
        error:false,
        errText:""
    });

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
    
    const handleMostChange = (event) => {
        let most = {};
        if(event.target.value === question.leastValue){
            most = {
                ...question,
                mostValue:event.target.value,
                leastValue:0
            }
        }else{
            most = {
                ...question,
                mostValue:event.target.value
            }
        }
        
        setQuestion(most);
    };

    const handleLeastChange = (event) => {
        let least = {};
        if(event.target.value === question.mostValue){
            least = {
                ...question,
                leastValue:event.target.value,
                mostValue: 0
            }
        }else{
            least = {
                ...question,
                leastValue:event.target.value
            }
        }

        setQuestion(least);
    };

    const checkAnswers = () => {
        if(question.mostValue === 0 && question.leastValue === 0){
            setError({
                error:true,
                errText: "You did not select a value"
            })
        }
        else if(question.mostValue === 0){
            
            setError({
                error:true,
                errText: "Please select one most characteristic"
            })
        }
        else if(question.leastValue === 0){
            
            setError({
                error:true,
                errText: "Please select one least characteristic"
            })
        }
        else{
            setError({
                error:false,
                errText: ""
            })
            if(props.count === 24){
                props.change(question, props.objKey);
                props.submit(true);
            }else{
                props.change(question, props.objKey);
                props.addCount();
            }
            
        }
    }

    return(
        <React.Fragment>
            <Zoom in={props.count === props.index}>
                <div style={props.count === props.index ? {display:"block"} : {display:"none"}} className={classes.container}>
                    <div className={classes.title}>
                        <h1 className={classes.questionHeader}>Question {props.index}</h1>
                    </div>
                    <div className={classes.Questions}>
                        <div className={classes.radio}>
                            <FormControl component="fieldset" error={error.error}>
                                <FormLabel component="legend">Most</FormLabel>
                                <RadioGroup aria-label="most" name={"most" + props.index} value={question.mostValue} >
                                    <FormControlLabel value="1" control={<Radio color="primary" onClick={handleMostChange}/>} />
                                    <FormControlLabel value="2" control={<Radio color="primary" onClick={handleMostChange}/>} />
                                    <FormControlLabel value="3" control={<Radio color="primary" onClick={handleMostChange}/>}/>
                                    <FormControlLabel value="4" control={<Radio color="primary" onClick={handleMostChange}/>}/>
                                </RadioGroup>
                                
                            </FormControl>
                            <FormControl component="fieldset" error={error.error}>
                                <FormLabel component="legend">Least</FormLabel>
                                <RadioGroup  aria-label="least" name={"least" + props.index} value={question.leastValue} >
                                    <FormControlLabel value="1" control={<Radio color="primary" onClick={handleLeastChange}/>} />
                                    <FormControlLabel value="2" control={<Radio color="primary" onClick={handleLeastChange}/>} />
                                    <FormControlLabel value="3" control={<Radio color="primary" onClick={handleLeastChange}/>}/>
                                    <FormControlLabel value="4" control={<Radio color="primary" onClick={handleLeastChange}/>}/>
                                </RadioGroup>
                                
                            </FormControl>
                        </div>
                        <div className={classes.questionTitle}>
                            {question.question.map(que =>(
                                <p key={que} className={classes.characteristics} variant="h5">{que}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </Zoom>
            <div style={props.count === props.index ? {display:"flex"} : {display:"none"}} className={classes.buttons}>
                {
                props.count > 1 ? <Button
                    onClick={props.subCount} 
                    style={{margin:5}} 
                    color="primary" 
                    variant="contained">Back</Button> : null
                }   
                {
                props.count === 24 ? <GreenButton
                    style={{margin:5}} 
                    variant="contained"
                    onClick={checkAnswers}>Submit</GreenButton> : null
                }   
                {
                props.count < 24 ? <Button 
                    onClick={checkAnswers} 
                    style={{margin:5}} 
                    color="primary" 
                    variant="contained">Next</Button> : null
                }
            </div>
            <Zoom in={error.error}>
                <Typography style={{color:"red", textAlign:"center", marginTop:20}}>{error.errText}</Typography>
            </Zoom>
        </React.Fragment>
    )
}
export default Questions;