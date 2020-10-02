import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { ReferenceLine, Line, ComposedChart, XAxis, YAxis, Tooltip } from 'recharts';
import TimelineIcon from '@material-ui/icons/Timeline';

const MostGraph = (props) => {
    return(
        <React.Fragment>
            <Paper elevation={2} style={{padding:15, margin:10}}>
            <Typography style={{marginBottom:20}} variant="h3">
            <TimelineIcon 
                style={{
                    borderRadius:3,
                    padding:2, 
                    backgroundColor:"#2196f3",
                    color:"#fff", 
                    fontSize:"2.5rem"}}/> {props.title}-<Typography style={{display:"inline",fontSize:"2rem", fontStyle:"italic"}}>{props.subtitle}</Typography></Typography>
                <ComposedChart width={500} height={350} data={props.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <YAxis domain={[0,100]}  style={{fontSize:"1.5rem"}}/>
                    <XAxis style={{fontSize:"1.5rem"}} dataKey="name"/>
                    <Tooltip/>
                    <ReferenceLine y={50} stroke="black"></ReferenceLine>
                    <Line type="monotone" dataKey="amount" stroke="#8884d8"></Line>
                </ComposedChart>
            </Paper>
        </React.Fragment>
    )
}

export default MostGraph;