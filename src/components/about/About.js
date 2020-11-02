import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid, Box, Typography } from '@material-ui/core';
import AboutTags from '../AboutTags';
import MapTest3 from './MapTest3';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column', 
        },
    },
    title: {
        fontFamily: 'Alef',
        fontSize: '4rem',
        margin: '3rem',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        width: '20%', 
        //textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
        textShadow: '2px 2px rgba(252, 96, 96, 0.5)',
    },
    mapContainer: {
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },
    mapText: {
        color: 'black',
        fontSize: '1vw', 
        marginBottom: '10%',
        textShadow: '0.1vw 0.1vw rgba(252, 96, 96, 0.5)',
    }, 
    map: {
        marginBottom: '40px',
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

                <Grid item xs={6}>
                    <Box>
                        <Typography style={{textAlign: 'center'}}> What is campfire?</Typography>
                    </Box>
                </Grid>

                <Grid item xs={6} id="map">   
                    <div className={classes.mapContainer}>
                        <Grid container>
                            <Grid item xs={12} >
                                <span className={classes.mapText}> <b> currently 3 fires lit! </b> </span>
                            </Grid>
                            <Grid item xs={12} className={classes.map}>
                                <MapTest3 />
                            </Grid>
                        </Grid>
                        
                    </div>
                      
                </Grid>
                <Grid item xs={12} id="aboutTags">
                    <AboutTags />
                </Grid>
            </Grid>
        </div>
        
    )
}