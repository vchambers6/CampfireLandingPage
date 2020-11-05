import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid, Box, Typography } from '@material-ui/core';
import AboutTags from './AboutTags';
import Map from './MapTest3'

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
        textAlign: 'center',
        padding: '20px',
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: '5vw',
        weight: '400',
        color: 'rgb(255, 143, 143,1)',
      //  textShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },

    box: {
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        backgroundColor: 'pink',
        borderRadius: '10px', 
        padding: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    mapText: {
        color: 'black',
        fontSize: '3vw', 
        paddingLeft: '20px',
        paddingTop: '30px',
        paddingBottom: '30px',
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
                spacing={4}
                justify='center'
                alignItems='center'
            >   
                <Grid item xs={12}>
                <h1 className={classes.title}>about</h1>
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography>
                            Mission text placeholder 
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography>
                            Figma screenshot placeholder 
                        </Typography>
                    </Box>
                </Grid>

                {/* Graphics */}
                <Grid container item xs={12} justify='center' alignItems='center' spacing={3}>
                    <Grid item xs={3}>
                        <Box className={classes.box}>
                        Graphic 1
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className={classes.box}>
                        Graphic 2
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className={classes.box}>
                        Graphic 3
                        </Box>
                    </Grid>
                </Grid>

                <Grid item container xs={12} justify='center' spacing={2}>
                    <Grid item xs={9}>
                        <Box className={classes.box}>
                        <span style={{textAlign: 'left'}}> Walkthrough 1 </span>
                        </Box>
                    </Grid>

                    <Grid item xs={9}>
                        <Box className={classes.box}>
                        <span style={{textAlign: 'left'}}> Walkthrough 2 </span>
                        </Box>
                    </Grid>

                    <Grid item xs={9}>
                        <Box className={classes.box}>
                            <span style={{textAlign: 'left'}}> Walkthrough 3 </span>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12}  id="aboutTags">
                    <AboutTags />              
                </Grid>

                <Grid item container className={classes.mapContainer} xs={12}> 

                    {/*<Grid item xs={12} className={classes.mapText}>
                        <span > <b> Enriching campus communities. </b> </span>
                        <img style={{width: '50%'}}src={`${process.env.PUBLIC_URL + '/assets/world.png'}`}  className={classes.connect}></img>

                    </Grid>
                    */}
                    <Grid item xs={12}>
                        {/*<img src={`${process.env.PUBLIC_URL + '/assets/map.png'}`}  className={classes.connect}></img> */}
                        <Map />
                    </Grid>
                </Grid>

                

            </Grid>
            
        </div>
        
    )
}