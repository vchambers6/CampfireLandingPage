import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar, Button} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { Link } from 'react-router-dom';
import ThemedLink from './ThemedLink';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Alef',
    },
    appbar: {
        background: 'rgba(254, 108, 108, 0.5)',    
    },
    appbarWrapper: {
        width: '90%',
        margin: '0 auto', 
        height: 36,
        borderRadius: 16,
    },
    appbarLogo: {
        flexGrow: '2',
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
    return(
        <div className={classes.root} id='header'>
            <AppBar className = {classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarLogo}>
                        <Button>
                            <img src={`${process.env.PUBLIC_URL + '/assets/flamelogo.png'}`} width='35' height='35'></img>
                        </Button>
                         
                    </h1>
                    {/* generate these with js? */}
                    <div className={classes.toolBarButtons}>
                        <Button className={classes.toolBarButtons}>
                            About
                            {/*<ThemedLink to='./About.js'></ThemedLink>*/}
                        </Button >
                        <Button className={classes.toolBarButtons}>
                            Learn More
                        </Button>
                        <Button className={classes.toolBarButtons}>
                            Our Team
                        </Button>
                        <Button className={classes.toolBarButtons}>
                            Register
                        </Button>
                    </div>
                    
                    {/*<h3>  .</h3>
                    <h3>Learn More  .</h3>
                    <h3>Our Team  .</h3>
                    <h3>Login  .</h3> */}
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



