import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid } from '@material-ui/core';
import AboutTags from './AboutTags';
import Map from '../Map'

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Poppins',
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column', 
        },
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: '5vw',
        weight: '400',
        color: 'rgb(255, 143, 143,1)',
      //  textShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        textAlign: 'left',
        lineHeight: '99%', 
        paddingLeft: '35px',
        lineHeight: .9,
        },

    mapText: {
        color: 'black',
        fontSize: '2rem', 
        //paddingLeft: '20px',
        //paddingTop: '30px',
        //paddingBottom: '30px',
    }, 

    mapContainer: {
        //padding: '3px',
        //margin: '5px',
    }
}))

export default function() {
    const classes = useStyles();  
    return (
        <div className={classes.root} id="about">
            

            <Grid
                container
                spacing={1}
                justifyContent='center'
                alignItems='center'
            >   
                <Grid item xs={12}>
                <h1 className={classes.title}>about</h1>
                </Grid>
                

                <Grid item xs={12} id="aboutTags">
                    <AboutTags />
                </Grid>

                <Grid item xs={12}> 

                        <Grid container className={classes.mapContainer}>
                            <Grid item xs={12} className={classes.mapText}>
                                <span > <b> Enriching campus communities. </b> </span>
                                <img style={{width: '50%'}}src={`${process.env.PUBLIC_URL + '/assets/world.png'}`}  className={classes.connect}></img>

                            </Grid>

                            <Grid item xs={12}>
                                <img src={`${process.env.PUBLIC_URL + '/assets/map.png'}`}  className={classes.connect}></img>
                            </Grid>

                        </Grid>
                </Grid>

                

            </Grid>
            
        </div>
        
    )
}