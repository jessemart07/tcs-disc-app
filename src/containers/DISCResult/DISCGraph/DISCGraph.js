import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { ReferenceLine, Line, ComposedChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import TimelineIcon from '@material-ui/icons/Timeline';
import classes from './DISCGraph.module.css';

const MostGraph = (props) => {
    return(
        <React.Fragment>
            <Paper elevation={2} className={classes.graph}>
            <Typography style={{marginBottom:20, fontSize:"1.5rem"}} variant="h3">
            <TimelineIcon 
                style={{
                    borderRadius:3,
                    padding:2, 
                    backgroundColor:"#2196f3",
                    color:"#fff", 
                    fontSize:"1.5rem"}}/> {props.title}-<Typography style={{display:"inline",fontSize:"1rem", fontStyle:"italic"}}>{props.subtitle}</Typography></Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart  data={props.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <YAxis domain={[0,100]}  style={{fontSize:"1.2rem"}}/>
                        <XAxis style={{fontSize:"1.2rem"}} dataKey="name"/>
                        <Tooltip/>
                        <ReferenceLine y={50} stroke="black"></ReferenceLine>
                        <Line type="monotone" dataKey="amount" stroke="#8884d8"></Line>
                    </ComposedChart>
                </ResponsiveContainer>
            </Paper>
        </React.Fragment>
    )
}

export default MostGraph;