import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', 
        display: 'flex', 
        // justifyContent: 'center', 
        // alignItems: 'center', 
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column', 
        },
    },
    title: {
        fontFamily: 'Alef',
        fontSize: '6rem',
        margin: '3rem',
        color: 'white',
        width: '20%'
    },
}))

export default function() {
    const classes = useStyles();  
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>about</h1>
        </div>
    )
}