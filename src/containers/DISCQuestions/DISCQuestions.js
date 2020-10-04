import classes from './DISCQuestions.module.css';
import React, { Component } from 'react';
import Q from '../../components/Question/Question';
import { 
    Button, 
    Dialog, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
    DialogActions, 
    LinearProgress, 
    Typography,
    Paper } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';


class DISCQuestions extends Component {
    state = {
        open:false,
        redirect: false
    };
    
    redirectOnSubmit = () => {
        this.setState({
            ...this.state,
            redirect:true
        });
    };

    handleDialog = (status) => {
        this.setState({
            ...this.state,
            open:status
        });
    };

    onSubmit = () => {
        console.log(this.props.questions);
        const val = this.props.questions;
        localStorage.setItem('questions', JSON.stringify(val));
    }
    

    render() {
        
        const Questions = Object.keys(this.props.questions).map((qKey, index) => {
            return <Q 
                    key={qKey}
                    objKey={qKey}
                    index={index+1} 
                    most={this.props.questions[qKey].mostValue} 
                    least={this.props.questions[qKey].leastValue} 
                    questions={this.props.questions[qKey].question}
                    count={this.props.count}
                    change={this.props.onChange}
                    addCount={this.props.onAddCount}
                    subCount={this.props.onSubCount}
                    submit={this.handleDialog}/>
        })

        return(
            <React.Fragment>
                <div className={classes}>
                <LinearProgress variant="determinate" style={{maxWidth:800, margin:"0 auto"}} value={(this.props.count/24)*100}/>
                <Paper className={classes.box}>
                    <Typography className={classes.description} variant="body1">
                    Select <strong>one</strong> characteristic you relate to the 
                    most and <strong>one</strong> characteristic you relate to 
                    the least</Typography>
                    <div className={classes.questionContainer}>
                        {Questions}
                    </div>
                </Paper>
                </div>
                <Dialog 
                    open={this.state.open} 
                    onClose={() => this.handleDialog(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">{"Are you sure you'd like to continue?"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Clicking continue will take you to your results
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={() => this.handleDialog(false)} color="primary">
                            Cancel
                        </Button>
                        <NavLink to="/result" onClick={this.onSubmit} style={{textDecoration:"none"}}><Button  color="primary" autoFocus>
                            Continue
                        </Button></NavLink>
                        </DialogActions>
                </Dialog>
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