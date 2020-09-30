import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const MostGraph = (props) => {
    let dWeight = 0;
    let iWeight = 0;
    let sWeight = 0;
    let cWeight = 0;

    switch(props.dValue){
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

    switch(props.iValue){
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

    switch(props.sValue){
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

    switch(props.cValue){
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

    return(
        
        <LineChart width={500} height={500} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <YAxis />
            <XAxis dataKey="name"/>
            <Tooltip/>
            <Line type="monotone" dataKey="amount" stroke="#8884d8"></Line>
        </LineChart>
        
    )
}

export default MostGraph;