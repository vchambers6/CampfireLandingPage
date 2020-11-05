import React, { useEffect, useState} from 'react';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Typography, Toolbar, Button, Grid, Divider, Box } from '@material-ui/core';
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
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
    }, 
    connect: {
        maxWidth: '450px',
        width: '100%',
    },
    text: {
        lineHeight: .0001,
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 'calc(3rem + 4vw)',
        color: 'rgb(255, 143, 143,1)',
      //  textShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        lineHeight: .9,
    },

    subtitle: {
        fontFamily: 'Poppins',
        fontSize: '2.5rem',
        lineHeight: 1,
    },
    boxes: {
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
                 <Grid item xs={12} md={4}>
                    <div>
                        <img src={`${process.env.PUBLIC_URL + '/assets/connect.png'}`}  className={classes.connect}></img>
                    </div>             
                </Grid>
                
                <Grid item container 
                    xs={12} md={6} 
                    
                    spacing={1}
                    justify='flex-start'
                    alignItems="center"
                >
                    {/*<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}> */}
                    <Grid item xs={12} >
                        <div className={classes.text}> 
                        <h1 className={classes.title}>campfire <br/> <div style={{color: 'black'}}>convos</div> </h1>
                        <br/>
                        <p className={classes.subtitle}> an online platform reimagining <br/> <b style={{color: 'rgb(255, 143, 143, 0.8)'}}> campus communities. </b></p> 
                        </div>
                    </Grid>
                            
                    <Grid item container  
                        direction='row' 
                        alignItems='stretch' 
                        spacing={4} 
                        xs={12}
                    >
                        <Grid item xs={12} md={6} className={classes.boxes}>
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
                            
                        <Grid item xs={12} md={4} className={classes.boxes}>
                            <Box display='flex' className={classes.learnMoreBox}> 
                                <Grid container direction='row' justify='center' alignItems="center" className={classes.boxesText}>
                                    <Grid item xs={12}>
                                        <Box> learn more about us.</Box>
                                    </Grid>
                                    <Grid item xs={12}> <Scroll to="about" smooth={true}> <CustomExpandMore /> </Scroll> </Grid>
                                </Grid>
                            </Box>
                        </Grid> {/* END OF BUTTONS BELOW MAIN TEXT */}
                    </Grid> {/* CONTAINER FOR BUTTONS */}        
                </Grid> {/* END OF TEXT GRID */}
            </Grid>
        </div>
    )

}