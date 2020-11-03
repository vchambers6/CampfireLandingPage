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
        padding: '20px',
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: '5vw',
        color: 'rgb(255, 143, 143,1)',
      //  textShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        textAlign: 'left',
        lineHeight: '99%', 
        paddingLeft: '35px',
        lineHeight: .9,
    },
    formContainer: {
        width: '100%',
        height: '300px',
        backgroundColor: 'pink',
    },
}))

export default function() {
    const classes = useStyles();  
    return (

        <div className={classes.root}>
            <Grid
                container
                spacing={1}
                justifyContent='center'
                alignItems='center'
            >   
                <Grid item xs={12}>
                <h1 className={classes.title}>about</h1>
                </Grid>
                


                <Grid item xs={12}> 

                        <Grid container>
                            <Grid item xs={12} className={classes.formContainer}>
                                <span > <b> Placeholder for contact form</b> </span>
                            </Grid>

                    

                        </Grid>
                </Grid>

                

            </Grid>

            
        
        </div>
       
    )
}