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
        backgroundColor: '#ff5c5c',
        color: '#fff', 
      },
    },
  }))(Button);

  const CustomExpandMore = withStyles((theme) => ({
    root: {
        color: 'rgba(255, 112, 112, 0.5)',
        '&:hover': {
            color: '#ff5c5c', 
          },
        fontSize: '3rem',
        
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
    fire: {
        maxWidth: '400px',
        width: '100%',
    },
    text: {
        marginLeft: '-50px%'
    },
    title: {
        fontSize: '9vw',
        color: 'black',
        textShadow: '4px 4px rgba(0, 0, 0, 0.3)',
        lineHeight: '99%', 
    },

    subtitle: {
        marginTop: '-15%',
        fontSize: '3vw',
    },
    boxes: {
        marginTop: '-30px',
        
    },
    joinNowBox: {
        background: 'rgba(255, 153, 153, 0.5)',
        borderRadius: '6px',
        
    },
    joinNowText: {
        marginTop: '5%', 
        marginBottom: '5%',
        fontSize: '2vw',
    },
    learnMoreBox: {
        background: 'rgba(196, 196, 196, 0.5)',
        borderRadius: '6px',
    },
    learnMoreText: {
        marginTop: '5%', 
        marginBottom: '1%',
        fontSize: '2vw',
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
                        <img src={`${process.env.PUBLIC_URL + '/assets/fire.png'}`}  className={classes.fire}></img>
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
                            <Typography noWrap><h1 className={classes.title}>campfire <br/> convos </h1></Typography>
                                
                            </Grid>

                            <Grid item xs={12}>
                                
                                <p className={classes.subtitle}> an online platform reimagining <br/> <b style={{color: '#ff9999'}}> campus communities. </b></p> 
                            </Grid>
                            
                            <Grid item xs={6} className={classes.boxes}>
                                <Box display='flex' className={classes.joinNowBox}> 
                                    <Grid container direction='column' justify='center' alignItems="center" className={classes.joinNowText}>
                                        <Grid item xs={12} style={{textAlign: 'center'}}>
                                            <Box> <Typography> live at {campusCount} schools and counting. <br/> join today! </Typography>  </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ColorButton
                                                onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href="https://campfireconvos.com/registration";}}
                                            > 
                                                <b> register now  </b>
                                            </ColorButton> 
                                        </Grid>
                                    </Grid>
                                    
                                </Box>
                            </Grid>
                            
                            <Grid item xs={4} className={classes.boxes}>
                                <Box display='flex' className={classes.learnMoreBox}> 
                                    <Grid container direction='column' justify='center' alignItems="center" className={classes.learnMoreText}>
                                        <Grid item xs={12} style={{textAlign: 'center'}}>
                                            <Box> <Typography> find out more about campfire! </Typography>  </Box>
                                        </Grid>
                                        <Grid item xs={12}> <Scroll to="about" smooth={true}> <CustomExpandMore /> </Scroll> </Grid>
                                    </Grid>
                                    
                                </Box>

                            </Grid>
                            
                            
                        </Grid>
                         
                    {/*</Collapse> */}
                </Grid>

            </Grid>
        </div>
    )

}