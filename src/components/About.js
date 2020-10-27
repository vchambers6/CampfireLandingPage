import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';
import Map from './Map';
import AboutTags from './AboutTags';
import MapTest1 from './MapTest1';
import MapTest2 from './MapTest2';
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
        fontSize: '6rem',
        margin: '3rem',
        color: 'white',
        width: '20%', 
        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
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
        fontSize: '3.2rem', 
        marginTop: '30px',
        marginBottom: '40px',
        textShadow: '2px 2px rgba(252, 96, 96, 0.5)',
    }, 
    map: {
        marginBottom: '40px',
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
                <Grid item xs={12}>
                    <h1 className={classes.title}>about</h1>
                </Grid>

                <Grid item xs={12} id="map">   
                    <div className={classes.mapContainer}>
                        <Grid container>
                            <Grid item xs={12} className={classes.mapText}>
                                <span > <b> currently 3 fires lit! </b> </span>
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