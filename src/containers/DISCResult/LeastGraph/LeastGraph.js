import { Typography, Paper} from '@material-ui/core';
import TimelineIcon from '@material-ui/icons/Timeline';
import React from 'react';
import { ReferenceLine, Line, ComposedChart, XAxis, YAxis, Tooltip } from 'recharts';

const LeastGraph = (props) => {
    let dWeight = 0;
    let iWeight = 0;
    let sWeight = 0;
    let cWeight = 0;

    switch(props.dValue){
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

    switch(props.iValue){
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

    switch(props.sValue){
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

    switch(props.cValue){
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

    const data = [
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

    let firstMax = 0;
    let scndMax = 0;
    let max = "";
    let scnd = "";
    
    data.map((obj, index) => {
        if(index === 0){
            firstMax = obj.amount;
            max = obj.name
        }else{
            if(obj.amount > firstMax && obj.amount > scndMax){
                var tempValue = firstMax;
                var tempName = max;
                firstMax = obj.amount;
                max = obj.name;
                scndMax = tempValue;
                scnd = tempName;
            }
            else if(obj.amount > scndMax && obj.amount < firstMax){
                scndMax = obj.amount;
                scnd = obj.name
            }
        }
    })

    return(
        <React.Fragment>
            <Paper elevation="2" style={{padding:15 , margin:10}}>
                <Typography style={{marginBottom:20}} variant="h3">
                    <TimelineIcon 
                        style={{
                            borderRadius:3,
                            padding:2, 
                            backgroundColor:"#2196f3",
                            color:"#fff", 
                            fontSize:"2.5rem"}}/> Least-<Typography style={{display:"inline",fontSize:"2rem", fontStyle:"italic"}}>Natural behaviour</Typography> </Typography>
                <ComposedChart width={500} height={500} data={props.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <YAxis domain={[0,100]} style={{fontSize:"1.5rem"}} />
                    <XAxis style={{fontSize:"1.5rem"}} dataKey="name"/>
                    <Tooltip/>
                    <ReferenceLine y={50} stroke="black"></ReferenceLine>
                    <Line type="monotone" dataKey="amount" stroke="#8884d8"></Line>
                </ComposedChart>
            </Paper>
        </React.Fragment>
        
        
    )
}

export default LeastGraph;