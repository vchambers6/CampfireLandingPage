import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { CssBaseline, Grid } from '@material-ui/core';
import landingPageTags from "../static/landingPageTags";
import TagArray from './TagArray';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        //marginBottom: '-5rem',   
    },
    title: {
        fontFamily: 'Alef',
        fontSize: '3rem',
        margin: '2rem',
        color: 'white',
        marginBottom: '-1rem',
        textShadow: '2px 2px rgba(252, 96, 96, 0.5)',
        
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
                    <h1 className={classes.title}>so, what do you want <br/> to connect about?</h1>
                </Grid>
                <Grid item xs={12}>
                    <TagArray tags={landingPageTags} />
                </Grid>

            </Grid>
        </div>
        
    )
}