import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid } from '@material-ui/core';
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
    titleWrapper: {
        margin: '3rem',
    },

    title: {
        fontFamily: 'Alef',
        fontSize: '6rem',
        margine: '-1rem',
        color: 'white',
    },
}))

export default function() {
    const classes = useStyles();  
    return (
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <h1 className={classes.title}>our team</h1>
                <h3>who believe in the power of connection. just testing out the text:-)</h3>
            </div>

            <div className={classes.teamIcons}> 
                <Grid container>
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={6}
                    alignItems="center"
                    style={{ marginBottom: '10px', width: '100%' }}
                    >
                        <Grid item xs={4}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/TeamIcon.png'}`} width='400' height='400'></img>
                        </Grid>
                        <Grid item xs={4}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/TeamIcon.png'}`} width='400' height='400'></img>
                        </Grid>
                        <Grid item xs={4}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/TeamIcon.png'}`} width='400' height='400'></img>
                        </Grid>

                        <Grid item xs={6}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/TeamIcon.png'}`} width='400' height='400'></img>
                        </Grid>
                        <Grid item xs={6}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/TeamIcon.png'}`} width='400' height='400'></img>
                        </Grid>
                    </Grid>

                    {/*<Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={6}
                    alignItems="center"
                    style={{ marginBottom: '10px', width: '100%' }}
                    >

                        <Grid item xs={6}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/TeamIcon.png'}`} width='400' height='400'></img>
                        </Grid>
                        <Grid item xs={6}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/TeamIcon.png'}`} width='400' height='400'></img>
                        </Grid>
                    </Grid> */}


                </Grid>
            </div>
    
        </div>
    )
}