import { Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import React, { useState } from 'react';
import Grow from '@material-ui/core/Grow';
import classes from './Question.module.css';
const Questions = (props) => {
    let [question, setQuestion] = useState({
        most:props.mostValue,
        least:props.leastValue,
        q:[...props.questions]
    })
    const handleMostChange = (event) => {
        const most = {
            ...question,
            most:event.target.value
        }
        setQuestion(most);
    };

    const handleLeastChange = (event) => {
        const least = {
            ...question,
            least:event.target.value
        }
        setQuestion(least);
    };
    return(
        <Grow in={props.count === props.index}>
        <div style={props.count === props.index ? {display:"block"} : {display:"none"}} className={classes.container}>
            <div className={classes.title}>
                <Typography variant="h4" >Question {props.index}</Typography>
            </div>
            <Typography style={{fontSize:"1rem"}} variant="body1">
                Select <strong>one</strong> characteristic you relate to the 
                most and <strong>one</strong> characteristic you relate to 
                the least</Typography>
            <div className={classes.Questions}>
                <div className={classes.radio}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Most</FormLabel>
                        <RadioGroup aria-label="most" name={"most" + props.index} value={question.most} onChange={handleMostChange}>
                            <FormControlLabel value="1" control={<Radio color="primary" />} />
                            <FormControlLabel value="2" control={<Radio color="primary" />} />
                            <FormControlLabel value="3" control={<Radio color="primary" />}/>
                            <FormControlLabel value="4" control={<Radio color="primary" />}/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Least</FormLabel>
                        <RadioGroup  aria-label="least" name={"least" + props.index} value={question.least} onChange={handleLeastChange}>
                            <FormControlLabel value="1" control={<Radio color="primary" />} />
                            <FormControlLabel value="2" control={<Radio color="primary" />} />
                            <FormControlLabel value="3" control={<Radio color="primary" />}/>
                            <FormControlLabel value="4" control={<Radio color="primary" />}/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={classes.questionTitle}>
                    {question.q.map(que =>(
                        <Typography key={que} style={{margin:10}} variant="h5">{que}</Typography>
                    ))}
                </div>
            </div>
        </div>
        </Grow>
    )
}
export default Questions;