
import classes from './DISCResult.module.css';
import { Typography, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import DISCGraph from './DISCGraph/DISCGraph';
import {connect} from 'react-redux';

class DISCResult extends Component {
    state={
        answers:JSON.parse(localStorage.getItem('questions'))
    }
    
    render(){
        return(
            <Paper className={classes.outerContainer} style={{backgroundColor:"#eeeeee"}}>
                <h1 className={classes.header}>Your results:</h1>
                <div className={classes.resultsContainer}>
                    <div className={classes.graphs}>
                        <DISCGraph title="Most" subtitle="Adapted behaviour" data={this.state.answers.mostData}/>
                        <DISCGraph title="Least" subtitle="Natural behaviour" data={this.state.answers.leastData}/>
                    </div>
                    <div className={classes.score}>
                        <Paper style={{backgroundColor:"#bdbdbd", padding:10, marginTop:40}}>
                            <Typography variant="h5">
                                You scored the highest in:
                            </Typography>
                            <h1 className={classes.scoreResult}>{this.state.answers.leastResult}</h1>
                        </Paper>
                    </div>
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.result
    }
}

export default connect(mapStateToProps)(DISCResult);