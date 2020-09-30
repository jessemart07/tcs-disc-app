import classes from './DISCQuestions.module.css';
import React, { Component } from 'react';
import green from '@material-ui/core/colors/green';
import Q from '../../components/Question/Question';
import { Button, LinearProgress, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

class DISCQuestions extends Component {
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
                    this.props.count === 24 ? <NavLink style={{textDecoration:"none"}} to="/result"><GreenButton
                        style={{margin:5}} 
                        variant="contained"
                        onSubmit={this.props.onSubmit}>Submit</GreenButton></NavLink> : null
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
        onChange: (obj, objKey) => dispatch({type:'UPDATE_ANSWERS', obj:obj, key:objKey}),
        onSubmit: (obj) => dispatch({type:'SUBMIT_ANSWERS', obj:obj})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DISCQuestions);