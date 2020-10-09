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
import axios from 'axios';
import { connect } from 'react-redux';


class DISCQuestions extends Component {
    
    state = {
        open:false,
        error:false,
        redirect:false
    };

    handleRedirect = () => {
        this.setState({
            ...this.state,
            redirect:true
        })
    }

    handleErrorDialog = (status) => {
        this.setState({
            ...this.state,
            error:status
        })
    }
    
    handleDialog = (status) => {
        this.setState({
            ...this.state,
            open:status
        });
    };

    onSubmit = () => {
        this.handleDialog(false);
        const ans = {
            answer1:{
                most:["S", "I", "C", "-"],
                least:["S", "-", "C", "D"]
            },
            answer2:{
                most:["I", "C", "D", "-"],
                least:["I", "C", "D", "S"]
            },
            answer3:{
                most:["-", "D", "S", "I"],
                least:["C", "D", "-", "I"]
            },
            answer4:{
                most:["C", "S", "-", "I"],
                least:["-", "S", "D", "I"]
            },
            answer5:{
                most:["-", "C", "-", "S"],
                least:["I", "C", "D", "S"]
            },
            answer6:{
                most:["D", "S", "-", "-"],
                least:["D", "S", "I", "C"]
            },
            answer7:{
                most:["-", "S", "D", "I"],
                least:["C", "-", "D", "I"]
            },
            answer8:{
                most:["D", "I", "-", "-"],
                least:["-", "-", "S", "C"]
            },
            answer9:{
                most:["I", "S", "D", "C"],
                least:["I", "S", "D", "-"]
            },
            answer10:{
                most:["D", "C", "-", "S"],
                least:["D", "-", "I", "S"]
            },
            answer11:{
                most:["I", "S", "-", "C"],
                least:["I", "S", "C", "D"]
            },
            answer12:{
                most:["-", "D", "C", "S"],
                least:["I", "D", "-", "S"]
            },
            answer13:{
                most:["D", "I", "S", "-"],
                least:["-", "I", "S", "C"]
            },
            answer14:{
                most:["C", "D", "I", "S"],
                least:["C", "-", "I", "-"]
            },
            answer15:{
                most:["S", "-", "C", "-"],
                least:["-", "-", "C", "D"]
            },
            answer16:{
                most:["I", "-", "-", "D"],
                least:["-", "S", "C", "D"]
            },
            answer17:{
                most:["C", "S", "-", "D"],
                least:["-", "S", "I", "D"]
            },
            answer18:{
                most:["I", "S", "-", "D"],
                least:["-", "-", "C", "D"]
            },
            answer19:{
                most:["C", "D", "I", "S"],
                least:["-", "D", "I", "S"]
            },
            answer20:{
                most:["D", "C", "-", "I"],
                least:["D", "-", "S", "I"]
            },
            answer21:{
                most:["S", "-", "D", "C"],
                least:["I", "S", "D", "C"]
            },
            answer22:{
                most:["I", "-", "D", "S"],
                least:["I", "C", "D", "S"]
            },
            answer23:{
                most:["I", "-", "D", "-"],
                least:["I", "C", "D", "S"]
            },
            answer24:{
                most:["D", "S", "I", "C"],
                least:["D", "S", "I", "C"]
            }
        }



        // declare total variables
        let dTotal = 0;
        let iTotal = 0;
        let sTotal = 0;
        let cTotal = 0;
        let blankTotal = 0;

        // calculate DISC totals
        Object.keys(this.props.answers).map((key, index) => {
            const val = ans["answer"+(index+1)].most[this.props.answers[key].mostValue-1];
            switch(val){
                case'D':
                    dTotal++;
                    break;
                case'I':
                    iTotal++;
                    break;
                case'S':
                    sTotal++;
                    break;
                case'C':
                    cTotal++;
                    break;
                case'-':
                    blankTotal++;
                    break;
                default:
                    break;
            }
            return;
        })
        // most object
        const most = {
            D: dTotal,
            I: iTotal,
            S: sTotal,
            C: cTotal
        };

        dTotal = 0;
        iTotal = 0;
        sTotal = 0;
        cTotal = 0;
        blankTotal = 0;

        // calculate DISC totals
        Object.keys(this.props.answers).map((key, index) => {
            const val = ans["answer"+(index+1)].least[this.props.answers[key].leastValue-1];
            switch(val){
                case'D':
                    dTotal++;
                    break;
                case'I':
                    iTotal++;
                    break;
                case'S':
                    sTotal++;
                    break;
                case'C':
                    cTotal++;
                    break;
                case'-':
                    blankTotal++;
                    break;
                default:
                    break;
            }
            return;
        })

        // least object
        const least = {
             D: dTotal,
             I: iTotal,
             S: sTotal,
             C: cTotal,
        };

        // weight variables
        let dWeight = 0;
        let iWeight = 0;
        let sWeight = 0;
        let cWeight = 0;

        // START Least weighting calculation
        switch(least.D){
            case 0:
                dWeight = 100;
                break;
            case 1: 
                dWeight = 88;
                break;
            case 2:
                dWeight = 78;
                break;
            case 3:
                dWeight = 68;
                break;
            case 4: 
                dWeight = 60;
                break;
            case 5: 
                dWeight = 52;
                break;
            case 6: 
                dWeight = 45;
                break;
            case 7: 
                dWeight = 41;
                break;
            case 8: 
                dWeight = 41;
                break;
            case 9:
                dWeight = 33;
                break;
            case 10:
                dWeight = 31;
                break;
            case 11: 
                dWeight = 26;
                break;
            case 12:
                dWeight = 24;
                break;
            case 13: 
                dWeight = 18;
                break;
            case 14: 
                dWeight = 12;
                break;
            case 15:
                dWeight = 9;
                break;
            case 16: 
                dWeight = 6;
                break;
            case 21: 
                dWeight = 1;
                break;
            default:
                dWeight = 4;
                break;
        }
    
        switch(least.I){
            case 0:
                iWeight = 100;
                break;
            case 1: 
                iWeight = 85;
                break;
            case 2:
                iWeight = 76;
                break;
            case 3:
                iWeight = 66;
                break;
            case 4: 
                iWeight = 55;
                break;
            case 5: 
                iWeight = 45;
                break;
            case 6: 
                iWeight = 37;
                break;
            case 7: 
                iWeight = 28;
                break;
            case 8: 
                iWeight = 24;
                break;
            case 9:
                iWeight = 18;
                break;
            case 10:
                iWeight = 11;
                break;
            case 11:
                iWeight = 6;
                break;
            case 19:
                iWeight = 1;
                break;
            default:
                iWeight = 3;
                break;
        }
    
        switch(least.S){
            case 0:
                sWeight = 100;
                break;
            case 1: 
                sWeight = 95;
                break;
            case 2:
                sWeight = 84;
                break;
            case 3:
                sWeight = 75;
                break;
            case 4: 
                sWeight = 65;
                break;
            case 5: 
                sWeight = 58;
                break;
            case 6: 
                sWeight = 52;
                break;
            case 7: 
                sWeight = 43;
                break;
            case 8: 
                sWeight = 35;
                break;
            case 9:
                sWeight = 30;
                break;
            case 10:
                sWeight = 27;
                break;
            case 11: 
                sWeight = 16;
                break;
            case 12:
                sWeight = 8;
                break;
            case 13: 
                sWeight = 4;
                break;
            case 19:
                sWeight = 1;
                break;
            default:
                sWeight = 4;
                break;
        }
    
        switch(least.C){
            case 0:
                cWeight = 100;
                break;
            case 1: 
                cWeight = 95;
                break;
            case 2:
                cWeight = 83;
                break;
            case 3:
                cWeight = 74;
                break;
            case 4: 
                cWeight = 64;
                break;
            case 5: 
                cWeight = 56;
                break;
            case 6: 
                cWeight = 52;
                break;
            case 7: 
                cWeight = 44;
                break;
            case 8: 
                cWeight = 40;
                break;
            case 9:
                cWeight = 33;
                break;
            case 10:
                cWeight = 25;
                break;
            case 11:
                cWeight = 15;
                break;
            case 12:
                cWeight = 6;
                break;
            case 13:
                cWeight = 4;
                break;
            case 16:
                cWeight = 0;
                break;
            default:
                cWeight = 2;
                break;
        }
        // END Least weight calculation
        
        // least data object used for the graph
        const leastData = [
            {
                "name":"D",
                "amount":dWeight
            },
            {
                "name":"I",
                "amount":iWeight
            },
            {
                "name":"S",
                "amount":sWeight
            },
            {
                "name":"C",
                "amount":cWeight
            }
        ]

        // max and second max variables declaration
        let firstMax = 0;
        let scndMax = 0;
        let leastMax = "";
        let leastScndMax = "";

        // Determine the max value and the second max value
        leastData.map((obj, index) => {
            // if this is the first value
            if(index === 0){
                firstMax = obj.amount;
                leastMax = obj.name
            }else{
                // object.amount should become the new max and 
                // current max should become the second max 
                if(obj.amount > firstMax && obj.amount > scndMax){
                    var tempValue = firstMax;
                    var tempName = leastMax;
                    firstMax = obj.amount;
                    leastMax = obj.name;
                    scndMax = tempValue;
                    leastScndMax = tempName;
                }
                // object.amount should become the second max
                else if(obj.amount > scndMax && obj.amount <= firstMax){
                    scndMax = obj.amount;
                    leastScndMax = obj.name
                }
            }
        })

        //Most weighting calculation
        dWeight = 0;
        iWeight = 0;
        sWeight = 0;
        cWeight = 0;

        // START Most weight calculations
        switch(most.D){
            case 0:
                dWeight = 0;
                break;
            case 1: 
                dWeight = 10;
                break;
            case 2:
                dWeight = 20;
                break;
            case 3:
                dWeight = 28;
                break;
            case 4: 
                dWeight = 32;
                break;
            case 5: 
                dWeight = 40;
                break;
            case 6: 
                dWeight = 45;
                break;
            case 7: 
                dWeight = 50;
                break;
            case 8: 
                dWeight = 55;
                break;
            case 9:
                dWeight = 60;
                break;
            case 10:
                dWeight = 65;
                break;
            case 11: 
                dWeight = 70;
                break;
            case 12:
                dWeight = 74;
                break;
            case 13: 
                dWeight = 78;
                break;
            case 14: 
                dWeight = 80;
                break;
            case 15:
                dWeight = 90;
                break;
            case 16: 
                dWeight = 92;
                break;
            case 20: 
                dWeight = 100;
                break;
            default:
                dWeight = 95;
                break;
        }

        switch(most.I){
            case 0:
                iWeight = 13;
                break;
            case 1: 
                iWeight = 25;
                break;
            case 2:
                iWeight = 30;
                break;
            case 3:
                iWeight = 45;
                break;
            case 4: 
                iWeight = 58;
                break;
            case 5: 
                iWeight = 68;
                break;
            case 6: 
                iWeight = 74;
                break;
            case 7: 
                iWeight = 85;
                break;
            case 8: 
                iWeight = 90;
                break;
            case 9:
                iWeight = 90;
                break;
            case 10:
                iWeight = 95;
                break;
            case 17:
                iWeight = 100;
                break;
            default:
                iWeight = 97;
                break;
        }

        switch(most.S){
            case 0:
                sWeight = 10;
                break;
            case 1: 
                sWeight = 20;
                break;
            case 2:
                sWeight = 25;
                break;
            case 3:
                sWeight = 35;
                break;
            case 4: 
                sWeight = 44;
                break;
            case 5: 
                sWeight = 50;
                break;
            case 6: 
                sWeight = 55;
                break;
            case 7: 
                sWeight = 60;
                break;
            case 8: 
                sWeight = 68;
                break;
            case 9:
                sWeight = 74;
                break;
            case 10:
                sWeight = 80;
                break;
            case 11: 
                sWeight = 88;
                break;
            case 12:
                sWeight = 92;
                break;
            case 19: 
                sWeight = 100;
                break;
            default:
                sWeight = 95;
                break;
        }

        switch(most.C){
            case 0:
                cWeight = 2;
                break;
            case 1: 
                cWeight = 15;
                break;
            case 2:
                cWeight = 25;
                break;
            case 3:
                cWeight = 38;
                break;
            case 4: 
                cWeight = 51;
                break;
            case 5: 
                cWeight = 60;
                break;
            case 6: 
                cWeight = 68;
                break;
            case 7: 
                cWeight = 78;
                break;
            case 8: 
                cWeight = 85;
                break;
            case 9:
                cWeight = 92;
                break;
            case 15:
                cWeight = 100;
                break;
            default:
                cWeight = 95;
                break;
        }
        // END Most weight calculation

        // most object for the graph data
        const mostData = [
            {
                "name":"D",
                "amount":dWeight
            },
            {
                "name":"I",
                "amount":iWeight
            },
            {
                "name":"S",
                "amount":sWeight
            },
            {
                "name":"C",
                "amount":cWeight
            }
        ]

        // max and second max variables declaration
        firstMax = 0;
        scndMax = 0;
        let mostMax = "";
        let mostScndMax = "";

        // Determine the max value and the second max value
        mostData.map((obj, index) => {
            // if this is the first value
            if(index === 0){
                firstMax = obj.amount;
                mostMax = obj.name
            }else{
                // object.amount should become the new max and 
                // current max should become the second max 
                if(obj.amount > firstMax && obj.amount > scndMax){
                    var tempValue = firstMax;
                    var tempName = mostMax;
                    firstMax = obj.amount;
                    mostMax = obj.name;
                    scndMax = tempValue;
                    mostScndMax = tempName;
                }
                // object.amount should become the second max
                else if(obj.amount > scndMax && obj.amount <= firstMax){
                    scndMax = obj.amount;
                    mostScndMax = obj.name
                }
            }
        })

        const res = {
            mostData: mostData,
            leastData: leastData,
            leastResult: leastMax+leastScndMax,
            mostResult: mostMax+mostScndMax
        }

        localStorage.setItem('questions', JSON.stringify(res));
        
        

        let mostID = "";
        let leastID ="";

        // get most data for the database
        switch(res.mostResult){
            case "DI":
                mostID="5434";
                break;
            case "DS":
                mostID="5435";
                break;
            case "DC":
                mostID="5436";
                break;
            case "IS":
                mostID="5437";
                break;
            case "IC":
                mostID="5438";
                break;
            case "ID":
                mostID="5446";
                break;
            case "SC":
                mostID="5439";
                break;
            case "SD":
                mostID="5447";
                break;
            case "SI":
                mostID="5448";
                break;
            case "CD":
                mostID="5449";
                break;
            case "CI":
                mostID="5450";
                break;
            case "CS":
                mostID="5451";
                break;
            default:
                mostID="-1"
                break;
        }

        // get least ID for the database
        switch(res.leastResult){
            case "DI":
                leastID="5440";
                break;
            case "DS":
                leastID="5441";
                break;
            case "DC":
                leastID="5442";
                break;
            case "ID":
                leastID="5452";
                break;
            case "IS":
                leastID="5454";
                break;
            case "IC":
                leastID="5444";
                break;
            case "SD":
                leastID="5453";
                break;
            case "SI":
                leastID="5454";
                break;
            case "SC":
                leastID="5445";
                break;
            case "CD":
                leastID="5455";
                break;
            case "CI":
                leastID="5456";
                break;
            case "CS":
                leastID="5457";
                break;
            default:
                leastID="-1"
                break;
        }

        const data1 = {
            "result": {
            "correct": 2,
            "total": 2,
            "assessment_id": 227,
            "count_as_attempt": true,
            "complete": true
            }
        }

        const queryString = this.props.location.search;
        let token = "";

        if(queryString !== null){
            const URLParams = new URLSearchParams(queryString);
            token = URLParams.get('learn_token');
        }

        const config ={
            headers:{'X-Access-Token':token}
        }

        axios.post('https://learnapi.wixels.com/results/assessment', data1, config)
        .then(res => {
            //console.log(res);
            const id = res.data.data.id;
            const data2 = {
                "detail": [
                    {
                    "question_id" : 1599,
                    "answer_id" : mostID,
                    "is_correct": true,
                    "explanation": "",
                    "assessment_result_id": id
                    },
                    {
                    "question_id" : 1600,
                    "answer_id" : leastID,
                    "is_correct": true,
                    "explanation": "",
                    "assessment_result_id": id
                    }
                ]
            };
            axios.post('https://learnapi.wixels.com/results/assessment/227/detail', data2, config)
            .then(response => {
                //console.log(response);
                this.props.onSubmit(res);
                this.props.history.push('/result');
            }).catch(error => {
                this.setState({
                    ...this.state,
                    error:true
                })
            })
        }).catch(error => {
            this.setState({
                ...this.state,
                error:true
            })
        })
    }

    render() {
        
        
        const Questions = Object.keys(this.props.answers).map((qKey, index) => {
            return <Q 
                    key={qKey}
                    objKey={qKey}
                    index={index+1} 
                    most={this.props.answers[qKey].mostValue} 
                    least={this.props.answers[qKey].leastValue} 
                    questions={this.props.answers[qKey].question}
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
                        <Button onClick={this.onSubmit}  color="primary" autoFocus>
                            Continue
                        </Button>
                        </DialogActions>
                </Dialog>
                <Dialog 
                    open={this.state.error} 
                    onClose={() => this.handleErrorDialog(false)}
                    aria-labelledby="alert-error-dialog-title"
                    aria-describedby="alert-error-dialog-description">
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Something went wrong...
                            </DialogContentText>
                            <DialogActions>
                            <Button onClick={() => this.handleErrorDialog(false)} color="primary">
                                Close
                            </Button>
                            </DialogActions>
                        </DialogContent>
                </Dialog>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.count,
        answers: state.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubCount: () => dispatch({type:'SUB_COUNT'}),
        onAddCount: () => dispatch({type:'ADD_COUNT'}),
        onChange: (obj, objKey) => dispatch({type:'UPDATE_ANSWERS', obj:obj, key:objKey}),
        onSubmit: (results) => dispatch({type:'SUBMIT_RESULTS', data:results})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DISCQuestions);