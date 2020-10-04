import React, { useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'; 


const useStyles = makeStyles((theme) => ({
    title: {
        display: 'flex', 
        justifyContent: 'right', 
        height: '100vh',
        fontFamily: 'Alef',
        color: 'white'
        }
}));

export default function Title() {
    const classes = useStyles(); 

    return (
        <div className={classes.title}>
            <h1>campfire <span>convos</span></h1>   
        </div>
    )
}