import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { CssBaseline, Grid, Box } from '@material-ui/core';
import landingPageTags from "../../static/landingPageTags";
import TagArray from '../TagArray';


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

    container: {
        marginLeft: 'auto',
        marginRight: 'auto',

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
    section: {
        height: '100%',
    },

    box: {
        maxWidth: '100%',
        width: '500px',
        height: '100%',
        backgroundColor: 'pink',
        borderRadius: '10px', 
        padding: '20px',
    }
}))

export default function() {
    const classes = useStyles();  
    const chipStyle = {size: 'medium', border: '#000', outlined: 'outlined'}
    return (
        <div className={classes.root} id="about">
            <Grid
            container
            spacing={6}
            justifyContent="center"
            direction='row'
            alignItems='stretch'
            className={classes.container}
            >
                
                
                <Grid item className={classes.section} xs={12} md={8} >
                    <h1 className={classes.title}>so, what do you want <br/> to connect about?</h1>
                    <TagArray tags={landingPageTags} chipStyle={chipStyle} />
                </Grid>

                <Grid item className={classes.section} xs={12} md={4}>
                    <Box className={classes.box}>
                    placeholder
                    </Box>
                </Grid>

            </Grid>
            
            {/* <img className={classes.tags} src={`${process.env.PUBLIC_URL + '/assets/tags.png'}`}  ></img> */}
            
        </div>
        
    )
}