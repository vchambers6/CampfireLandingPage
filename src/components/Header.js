import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar, Button, Grid} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
//import { Link } from 'react-router-dom';
import { Link as Scroll} from 'react-scroll'
import { Link } from 'react-router-dom';
import ThemedLink from './ThemedLink';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Alef',
        width: '100vw',
    },
    appbar: {
        background: 'rgba(254, 108, 108, 0.5)',    
        position: 'fixed',
        //height: 50,
        display: 'flex',

    },
    appbarWrapper: {
        width: '90%',
        margin: '0 auto',    
        borderRadius: 16,
    },
    appbarLogo: {
        flexGrow: 5,
        margin: '0 auto', 
    },
    icon: {
        color: '#fff', 
        fontSize: '2rem',
        margin: '0 auto', 
            [theme.breakpoints.up('md')]: {
              display: 'none',
            },
          toolbar: theme.mixins.toolbar,
          drawerPaper: {
            width: drawerWidth,
            [theme.breakpoints.up('md')]: {
              position: 'relative',
            },
          },
    },
    title: {
        margin: '-3rem',
        fontSize: '6rem',
        color: 'white',
    },
    colorText: {
        color: '#ff9f87',
    },
    toolBarButtons: {
        color: '#ffffff',
        fontSize: '1rem',
    },
    containerRight: {
        textAlign: 'right',
        width: '40%'
    },  
    goDown: {
        color: '#ff9f87', 
        fontSize: '4rem',
    },
})) 

export default function Header() {
    const classes = useStyles(); 
    const [checked,setChecked] = useState(false);  
    useEffect(()=> {
        setChecked(true)
    }, [])
    const toolBarItemsDict = { 
        "about": "About", 
        "learnMore": "Learn More", 
        "ourTeam": "Our Team", 
    };
    var toolBarItems = [["about", "About"], ["learnMore", "Learn More"], ["ourTeam", "Our Team"], ]
    return(
        <div className={classes.root} id='header'>
            <AppBar className = {classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <Scroll to="header" smooth={true} className={classes.appbarLogo}>
                        <h1>
                            <Button>
                                <img src={`${process.env.PUBLIC_URL + '/assets/flamelogo.png'}`} width='35' height='35'></img>
                            </Button>
                        </h1>
                    </Scroll>
                    {/* generate these with js? */}
                    <div className={classes.toolBarButtons}>
                        {/*for (button in toolBarItems) {
                                return (
                                    <Scroll to={button} smooth={true}>
                                    <Button className={classes.toolBarButtons}>
                                        {toolBarItems[button]}
                                        </Button >
                                    </Scroll>
                                    )
                                }
                            */}
                            {toolBarItems.map(toolBarItem => {
                            return ( 
                                <Scroll to={toolBarItem[0]} smooth={true}>
                                    <Button className={classes.toolBarButtons} style={{textTransform: 'none'}}>
                                        {toolBarItem[1]}
                                    </Button>
                                </Scroll>
                            )})}   
                            <Button 
                                className={classes.toolBarButtons} 
                                style={{textTransform: 'none'}}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href="https://campfireconvos.com/registration";
                                }}
                            >
                                Register
                            </Button>         
                    </div>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>  
            </AppBar>
            <Grid
                container
                spacing={6}
                justify="center"
                alignItems="center"
            >
                <Grid item xs={4}>
                    <div className={classes.containerLeft}>
                        <img src={`${process.env.PUBLIC_URL + '/assets/dog.png'}`}></img>
                    </div>             
                </Grid>
                
                <Grid item xs={4}>
                    {/*<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}> */}
                        <div className={classes.containerRight}> 
                            <h1 className={classes.title}>campfire <br/> convos </h1>
                        </div>
                    {/*</Collapse> */}
                </Grid>

            </Grid>
            
            
            
        </div>
    )
}



