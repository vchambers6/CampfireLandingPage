import React, { useEffect, useState} from 'react';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Typography, Toolbar, Button, Grid, Divider, Box} from '@material-ui/core';
import schools from '../../static/schoolsOnboard.json' ;
import { green, purple, pink} from '@material-ui/core/colors';
import { Link as Scroll} from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/* not sure if we should have this or just hard code the number of schools 
-- this could unnecessarily slow up the page  */ 
const campusCount = Object.keys(schools).length

// register now button 
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#ff7070'),
      backgroundColor: 'rgba(255, 112, 112, 0.5)',
      textTransform: 'none', 
      '&:hover': {
        backgroundColor: 'rgb(255, 143, 143)',
        color: '#fff', 
      },
      display: 'flex',
      marginTop: '10px',
    },
  }))(Button);

  const CustomExpandMore = withStyles((theme) => ({
    root: {
        color: 'rgba(255, 112, 112, 0.5)',
        '&:hover': {
            color: 'rgb(255, 143, 143)', 
          },
        fontSize: '3vw',
        
    },
  }))(ExpandMoreIcon);

  const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#ff9999',
          },
          secondary: pink,
        },
      
  });

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    }, 
    connect: {
        maxWidth: '450px',
        width: '100%',
    },
    text: {
        fontFamily: 'Poppins',
        color: 'rgb(0, 0, 0, 1)',
        lineHeight: 1.1,
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: '6vw',
        color: 'rgb(255, 143, 143,1)',
      //  textShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        lineHeight: '99%', 
        padding: '20px',
        lineHeight: .9,
    },

    subtitle: {
        fontFamily: 'Poppins',
        marginTop: '-15%',
        fontSize: '3vw',
        padding: '20px',
        lineHeight: 1,
    },
    boxes: {
        marginTop: '-30px',
        fontWeight: '500',
        
        
    },
    joinNowBox: {
        background: 'rgba(255, 153, 153, 0.5)',
        borderRadius: '6px',
        height: '100%',
        
    },

    learnMoreBox: {
        background: 'rgba(196, 196, 196, 0.5)',
        borderRadius: '6px',
        height: '100%',

    },

    boxesText: { 
        marginTop: '5%', 
        marginBottom: '5%',
        padding: '3px', 
        textAlign: 'center', 
        fontFamily: 'Poppins', 
        fontSize: '1.8vw', 
        color: 'rgba(0,0,0,0.7)'
    }

})) 

export default function HeaderMainContent() {
    const classes = useStyles(); 

    return(
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                justify="center"
                alignItems="center"
            >
                 <Grid item xs={4}>
                    <div>
                        <img src={`${process.env.PUBLIC_URL + '/assets/connect.png'}`}  className={classes.connect}></img>
                    </div>             
                </Grid>
                
                <Grid item xs={6} className={classes.text}>
                    {/*<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}> */}
                        <Grid container 
                            spacing={2}
                            justify='flex-start'
                            alignItems="center"
                           
                        >
                            <Grid item xs={12}>
                            <Typography noWrap><h1 className={classes.title}>campfire <br/> <div style={{color: 'black'}}>convos</div> </h1></Typography>
                                
                            </Grid>

                            <Grid item xs={12}>
                                {/* make campfire bold and convos thin? */}
                                <p className={classes.subtitle}> an online platform reimagining <br/> <b style={{color: 'rgb(255, 143, 143, 0.8)'}}> campus communities. </b></p> 
                            </Grid>
                            
                            <Grid item xs={12}>
                            <Grid container direction='row' alignItems='stretch' spacing={4}>
                            <Grid item xs={6} className={classes.boxes}>
                                <Box display='flex' className={classes.joinNowBox}> 
                                    <Grid container direction='column' justify='center' alignItems="center" className={classes.boxesText}>
                                        <Grid item xs={12}>
                                            <Box> find your community. <br/>join today! </Box>
                                        </Grid>
                                        
                                            <Grid item xs={12}>
                                                <ColorButton
                                                    onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href="https://campfireconvos.com/registration";}}
                                                > 
                                                    <b style={{fontSize: '1.7vw'}}> register now  </b>
                                                </ColorButton> 
                                            </Grid>
                                       
                                    </Grid>
                                    
                                </Box>
                            </Grid>
                            
                            <Grid item xs={4} className={classes.boxes}>
                                <Box display='flex' className={classes.learnMoreBox}> 
                                    <Grid container direction='row' justify='center' alignItems="center" className={classes.boxesText}>
                                        <Grid item xs={12}>
                                            <Box> learn more about us.</Box>
                                        </Grid>
                                        <Grid item xs={12}> <Scroll to="about" smooth={true}> <CustomExpandMore /> </Scroll> </Grid>
                                    </Grid>

                                </Box>
                            </Grid> {/* END OF BUTTONS BELOW MAIN TEXT */}
                            </Grid>
                            </Grid> {/* CONTAINER FOR BUTTONS */}
                        
                        </Grid>
                         
                </Grid>

            </Grid>
        </div>
    )

}