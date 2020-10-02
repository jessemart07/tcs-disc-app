
import classes from './DISCResult.module.css';
import { Typography, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import DISCGraph from './DISCGraph/DISCGraph';

class DISCResult extends Component {
    state={
        answers:JSON.parse(localStorage.getItem('questions'))
    }
    render(){
        console.log(this.state);
        // answers object
        // all most and least values will be changed to "D", "I", "S", "C" based 
        // on their value
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
                most:["-", "D", "C", "S"],
                least:["I", "D", "-", "S"]
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
        Object.keys(this.state.answers).map((key, index) => {
            const val = ans["answer"+(index+1)].most[this.state.answers[key].mostValue-1];
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
            
        })
        // most object
        const most = {
            D: dTotal,
            I: iTotal,
            S: sTotal,
            C: cTotal
        };

        console.log(most);

        dTotal = 0;
        iTotal = 0;
        sTotal = 0;
        cTotal = 0;
        blankTotal = 0;

        // calculate DISC totals
        Object.keys(this.state.answers).map((key, index) => {
            const val = ans["answer"+(index+1)].least[this.state.answers[key].leastValue-1];
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
            
        })

        // least object
        const least = {
             D: dTotal,
             I: iTotal,
             S: sTotal,
             C: cTotal,
        };

        console.log(least);

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
                dWeight = 67;
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
                dWeight = 40;
                break;
            case 8: 
                dWeight = 40;
                break;
            case 9:
                dWeight = 35;
                break;
            case 10:
                dWeight = 30;
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
                dWeight = 10;
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
                iWeight = 87;
                break;
            case 2:
                iWeight = 78;
                break;
            case 3:
                iWeight = 68;
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
                iWeight = 25;
                break;
            case 9:
                iWeight = 18;
                break;
            case 10:
                iWeight = 11;
                break;
            case 19:
                iWeight = 2;
            default:
                iWeight = 5;
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
                sWeight = 88;
                break;
            case 3:
                sWeight = 79;
                break;
            case 4: 
                sWeight = 68;
                break;
            case 5: 
                sWeight = 56;
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
                sWeight = 25;
                break;
            case 11: 
                sWeight = 15;
                break;
            case 12:
                sWeight = 8;
                break;
            case 13: 
                sWeight = 6;
                break;
            case 19:
                sWeight = 2;
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
                cWeight = 85;
                break;
            case 3:
                cWeight = 76;
                break;
            case 4: 
                cWeight = 68;
                break;
            case 5: 
                cWeight = 55;
                break;
            case 6: 
                cWeight = 52;
                break;
            case 7: 
                cWeight = 46;
                break;
            case 8: 
                cWeight = 40;
                break;
            case 9:
                cWeight = 35;
                break;
            case 10:
                cWeight = 25;
                break;
            case 11:
                cWeight = 15;
                break;
            case 12:
                cWeight = 8;
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
        let max = "";
        let scnd = "";

        // Determine the max value and the second max value
        leastData.map((obj, index) => {
            // if this is the first value
            if(index === 0){
                
                firstMax = obj.amount;
                max = obj.name
            }else{
                // object.amount should become the new max and 
                // current max should become the second max 
                if(obj.amount > firstMax && obj.amount > scndMax){
                    var tempValue = firstMax;
                    var tempName = max;
                    firstMax = obj.amount;
                    max = obj.name;
                    scndMax = tempValue;
                    scnd = tempName;
                }
                // object.amount should become the second max
                else if(obj.amount > scndMax && obj.amount <= firstMax){
                    scndMax = obj.amount;
                    scnd = obj.name
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
                sWeight = 85;
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

        return(
            
                <Paper className={classes.outerContainer} style={{backgroundColor:"#eeeeee"}}>
                    <h1 className={classes.header}>Your results:</h1>
                    <div className={classes.resultsContainer}>
                        <div className={classes.graphs}>
                            <DISCGraph title="Most" subtitle="Adapted behaviour" data={mostData}/>
                            <DISCGraph title="Least" subtitle="Natural behaviour" data={leastData}/>
                        </div>
                        <div className={classes.score}>
                            <Paper style={{backgroundColor:"#bdbdbd", padding:10, marginTop:40}}>
                                <Typography variant="h5">
                                    You scored the highest in:
                                </Typography>
                                <h1 className={classes.scoreResult}>{max} {scnd}</h1>
                            </Paper>
                        </div>
                    </div>
                </Paper>
        )
    }
}

export default DISCResult;