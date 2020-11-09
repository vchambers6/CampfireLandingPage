import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid, Box, Typography, Button } from '@material-ui/core';
import AboutTags from './AboutTags';
import Map from './MapTest3'

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
      marginTop: '8px',
    },
  }))(Button);

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
        // padding: '10px',
    },
    title: {
        padding: '0px',
        marginBottom: '0px',
        fontFamily: 'Poppins',
        fontSize: '3rem',
        weight: '400',
        color: 'rgb(255, 143, 143,1)',
        textAlign: 'center',
    },

    subtitle: {
        fontFamily: 'Poppins',
        fontSize: '1.5rem',
        color: 'rgb(0,0,0,1)',
        fontWeight: 'bold',
        lineHeight: '99%', 
        padding: '2px',
        // lineHeight: .9,
    },

    subtext: {
        fontFamily: 'Poppins',
        fontSize: '1rem',
        color: 'rgb(0,0,0,1)',
        lineHeight: '99%', 
        padding: '2px',
        lineHeight: 1.1,
    },

    box: {
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        // backgroundColor: '#E5E5E5',
        // borderRadius: '10px', 
        // padding: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0',
        marginBottom: '0',
    },

    screenshot: {
        // transform: 'rotate(-30deg)',
        width: '80%',
        height: 'auto',
        padding: '5px',
        alignContent: 'center',
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
               {/* do we need this header?? looks off. 
               potentially use background color shift or rename section? */}
                <Grid item xs={10} lg={8}>
             
                <h1 className={classes.title}>about</h1>
                <p style={{padding: '1.5rem', marginLeft: '2rem', marginRight: '2rem', backgroundColor: 'rgb(255, 143, 143, 0.5)', borderRadius: '5px'}} 
                    className={classes.subtext}>
                    Brief block of text about our mission and how we center intersectionality on our platform
                    with the goal of connecting college students and strengthening community. As a design rule, 
                    all small text should be this size and capitalized/punctuated normally. Medium and large headers
                    should similarly remain consistent with sizing.
                </p>

                </Grid>
                

                <Grid container item xs={12} justify='center' alignItems='center' spacing={2} style={{padding:'10px'}}>
                    <Grid item xs={5}>
                        <Box className={classes.box}>
                            <img src={`${process.env.PUBLIC_URL + '/assets/illuminate2.png'}`} height='200px' weight='200px'></img>
                        </Box>
                    </Grid>

                    <Grid item xs={5}>
                        <Box className={classes.box}>
                            <p className={classes.subtitle}>Illuminate hidden similarities.</p>
                            <p className={classes.subtext}>From niche interests and identities to college coursework, engage with peers who share overlapping similarities. </p>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container item xs={12} justify='center' alignItems='center' spacing={2} style={{padding:'10px'}}>
                    <Grid item xs={5}>
                        <Box className={classes.box}>
                            <p className={classes.subtitle}>Develop community.</p>
                            <p className={classes.subtext}>Explore communities and shape new ones as you connect and chat with peers.</p>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box className={classes.box}>
                            <img src={`${process.env.PUBLIC_URL + '/assets/mobile_user.png'}`} height='200px' weight='200px'></img>
                        </Box>
                    </Grid>
                </Grid>

        
                
                <Grid item xs={12} md={6} style={{padding: '0'}}>
                    <Box>
                    <div style={{paddingBottom: '20px'}}><hr
                    style={{
                        color: '#FF8F8F',
                        backgroundColor: '#FF8F8F',
                        height: 5,
                        width: '80%',
                        }}/></div>
                        <Typography className={classes.subtitle} style={{marginTop: '2rem', marginLeft: '2rem', marginRight: '2rem'}}>
                            Explore and engage with intersectional communities.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box>
                        <Typography>
                            <img src={`${process.env.PUBLIC_URL + '/assets/screenshot.png'}`} className={classes.screenshot}></img>
                        </Typography>
                    </Box>
                </Grid>
                <Typography className={classes.subtitle}>
                    Walkthrough..
                </Typography>

                {/* Graphics */}
                <Grid container item xs={12} justify='center' alignItems='center' spacing={3} style={{padding:'10px'}}>
                    <Grid item xs={3}>
                        <Box className={classes.box}>
                            <p>subtext: select intersections...</p>
                            <img src={`${process.env.PUBLIC_URL + '/assets/venn_diagram.png'}`} height='100px' weight='100px'></img>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className={classes.box}>
                            <p>select tagssss</p>
                            <img src={`${process.env.PUBLIC_URL + '/assets/tag_selection.png'}`} height='100px' weight='100px'></img>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className={classes.box}>
                            <p>begin chatting</p>
                            <img src={`${process.env.PUBLIC_URL + '/assets/chatting2.png'}`} height='100px' weight='100px'></img>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12}  id="aboutTags">
                    <hr
                        style={{
                            color: '#FF8F8F',
                            backgroundColor: '#FF8F8F',
                            height: 5,
                            width: '80%',
                            }}/>
                    <AboutTags />              
                </Grid>

                <Grid item container className={classes.mapContainer} xs={12}> 

                    {/*<Grid item xs={12} className={classes.mapText}>
                        <span > <b> Enriching campus communities. </b> </span>
                        <img style={{width: '50%'}}src={`${process.env.PUBLIC_URL + '/assets/world.png'}`}  className={classes.connect}></img>

                    </Grid>
                    */}
                    <Grid item xs={10} md={6}>
                        {/*<img src={`${process.env.PUBLIC_URL + '/assets/map.png'}`}  className={classes.connect}></img> */}
                        <Map />
                    </Grid>
                    <Grid item xs={4}
                           style={{backgroundColor: 'rgb(255, 143, 143, 0.5)',
                                textAlign:'left',
                                margin: '10px',
                                padding: '1rem',
                                borderRadius: '5px',
                                }}>
                        <div style={{alignContent: 'center'}}><p>At 3 schools and counting.</p>
                        <li>Harvard University</li>
                        <li>Loyola University Chicago</li>
                        <li>Yale University</li></div>
                        <Grid item xs={12}>
                            <ColorButton
                                onClick={(e) => {
                                e.preventDefault();
                                window.location.href="https://campfireconvos.com/registration";}}
                            > 
                                <b style={{fontSize: '1rem', color: 'rgb(0, 0, 0, 0.5)'}}> register now  </b>
                            </ColorButton> 
                        </Grid>
                        Bring Campfire to your school.
                        <Grid item xs={12}>
                            <ColorButton
                                onClick={(e) => {
                                e.preventDefault();
                                // scroll to contact page
                                window.location.href="https://campfireconvos.com";}}
                            > 
                                <b style={{fontSize: '1rem', color: 'rgb(0, 0, 0, 0.5)'}}> contact us  </b>
                            </ColorButton> 
                        </Grid>

                    </Grid>
                </Grid>

                

            </Grid>
            
        </div>
        
    )
}