
import classes from './DISCResult.module.css';
import { CircularProgress, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeastGraph from './LeastGraph/LeastGraph';
import MostGraph from './MostGraph/MostGraph';

class DISCResult extends Component {
    state = {
        firstMax: "",
        scndMax: ""
    }
    
    getMax = (first, second) => {
        console.log("working");
        this.setState(
            {
                firstMax: first,
                scndMax: second
            })
    }

    render(){
        return(
            <React.Fragment>
                <div className={classes.Graphs}>
                    <MostGraph data={this.props.most}/>
                    <LeastGraph data={this.props.least}/>
                </div>
                <Typography>
                    You scored the highest in:
                </Typography>
                <Typography>{this.state.firstMax} {this.state.scndMax}</Typography>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        answers: state.question,
        most: state.most,
        least: state.least
    }
}

export default connect(mapStateToProps)(DISCResult);