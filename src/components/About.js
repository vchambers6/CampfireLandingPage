import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';
import Map from './Map';
import AboutTags from './AboutTags';

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
        <div className={classes.root} id="about">
            

            <Grid
            container
            spacing={6}
            justifyContent="center"
            alignItems="center"
            >
                <Grid item xs={12}>
                    <h1 className={classes.title}>about</h1>
                </Grid>

                <Grid item xs={12}>
                    <Map />
                </Grid>
                <Grid item xs={12}>
                    <AboutTags />
                </Grid>



            </Grid>
        </div>
        
    )
}