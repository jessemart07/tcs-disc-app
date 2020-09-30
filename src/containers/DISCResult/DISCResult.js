
import { CircularProgress, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MostGraph from './MostGraph/MostGraph';

class DISCResult extends Component {
    render(){
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

        let dTotal = 0;
        let iTotal = 0;
        let sTotal = 0;
        let cTotal = 0;
        let blankTotal = 0;

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
                    return this.props.answers[key].mostValue;
            }
            
        })

        const most = {
            D: dTotal,
            I: iTotal,
            S: sTotal,
            C: cTotal,
            Blank:blankTotal
        };

        dTotal = 0;
        iTotal = 0;
        sTotal = 0;
        cTotal = 0;
        blankTotal = 0;

        Object.keys(this.props.answers).map((key, index) => {
            const val = ans["answer"+(index+1)].most[this.props.answers[key].leastValue-1];
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
                    return this.props.answers[key].mostValue;
            }
            
        })

        const least = {
            D: dTotal,
            I: iTotal,
            S: sTotal,
            C: cTotal,
            Blank:blankTotal
        };

        return(
            <React.Fragment>
                <div>
                    <MostGraph 
                        dValue={most.D} 
                        iValue={most.I}
                        sValue={most.S}
                        cValue={most.C}/>
                </div>
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        answers: state.question
    }
}

export default connect(mapStateToProps)(DISCResult);