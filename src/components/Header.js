import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar, Button} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
//import { Link } from 'react-router-dom';
import { Link as Scroll} from 'react-scroll'
import { Link } from 'react-router-dom';
import ThemedLink from './ThemedLink';

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
        height: '10%',

    },
    appbarWrapper: {
        width: '90%',
        margin: '0 auto',    
        borderRadius: 16,
    },
    appbarLogo: {
        flexGrow: '5',
    },
    icon: {
        color: '#fff', 
        fontSize: '2rem',
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
            <div className={classes.containerLeft}>
                <img src={`${process.env.PUBLIC_URL + '/assets/dog.png'}`}></img>
            </div>
            <div className={classes.containerRight}> 
                <h1 className={classes.title}>campfire</h1>
                <h1 className={classes.title}>convos</h1>
            </div>
            
        </div>
    )
}



