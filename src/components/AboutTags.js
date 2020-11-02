import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { CssBaseline, Grid } from '@material-ui/core';
import landingPageTags from "../static/landingPageTags";
import TagArray from './TagArray';


const useStyles = makeStyles((theme) => ({
    root: {
        // minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'left', 
        textAlign: 'left',
        paddingLeft: '50px',
        //marginBottom: '-5rem',   
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: '4vw',
        color: 'rgb(0, 0,0,1)',
      //  textShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        textAlign: 'left',
        lineHeight: '99%', 
        padding: '20px',
        lineHeight: .9,
        },
    tagarray: {
        maxHeight: '400px',
    },

    tags: {
        maxWidth: '100%',
        width: '500px',
        height: 'auto', 
        backgroundColor: 'pink',
        borderRadius: '10px', 
        padding: '20px',
    }
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
                <h1 className={classes.title}>so, what do you want <br/> to connect about?</h1>
                
                <Grid item className={classes.tagarray} xs={12}>
                    <TagArray tags={landingPageTags} />
                </Grid>

            </Grid>
            <div className={classes.tags}>
                placeholder
            </div>
            {/* <img className={classes.tags} src={`${process.env.PUBLIC_URL + '/assets/tags.png'}`}  ></img> */}
            
        </div>
        
    )
}