import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar, Button, Grid, Divider, Box} from '@material-ui/core';
import { Link as Scroll} from 'react-scroll'
import Drawer from './Drawer';
import HeadMainContent from './HeaderMainContent';
import HeaderMainContent from './HeaderMainContent';
import { NearMeSharp } from '@material-ui/icons';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '100vh', 
        fontFamily: 'Poppins',
        width: '100vw',
    },
    appbar: {
        background: 'rgb(255, 143, 143, 1)',    
        position: 'fixed',
        //height: 50,
        display: 'flex',
        borderBottom: '5em soild white',
    },
    appbarWrapper: {
        width: '90%',
        margin: '0 auto',    
    },
    appbarLogo: {
        flexGrow: 5,
        margin: '0 auto', 
    },
    icon: {
        [theme.breakpoints.up('md')]: {
              display: 'none',
        },
        toolbar: theme.mixins.toolbar,
          drawerPaper: {
            width: drawerWidth,
            [theme.breakpoints.up('sm')]: {
              position: 'relative',
            },
          },
    },
    
    colorText: {
        color: '#ff9f87',
    },
    toolBarButtons: {
        color: '#ffffff',
        fontSize: '1.3rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        alignSelf: 'right',

    },
    dividerColor: {
        background: 'rgb(48, 46, 65)',
    },
    goDown: {
        color: '#ff9f87', 
        fontSize: '4rem',
    },
    mainContent: {
        marginTop: '40px',
    }
})) 

export default function Header() {
    const classes = useStyles(); 
    const [checked,setChecked] = useState(false);  
    useEffect(()=> {
        setChecked(true)
    }, [])

    var toolBarItems = [["about", "about"], ["ourTeam", "our team"], ]
    const names = ['register', 'login']
    
    return(
        <div className={classes.root} id='header'>
            <AppBar className = {classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <Scroll to="header" smooth={true} className={classes.appbarLogo}>
                        <h1>
                            <Button>
                                <img src={`${process.env.PUBLIC_URL + '/assets/firelogo_purple.png'}`} width='35' height='35'></img>
                            </Button>
                        </h1>
                    </Scroll>
                    <Grid container justify='flex-end' className={classes.toolBarButtons}>
                        
                            {toolBarItems.map(toolBarItem => {
                            return ( 
                                <Scroll to={toolBarItem[0]} smooth={true}>
                                    <Button className={classes.toolBarButtons} style={{textTransform: 'none', fontFamily: 'Poppins', color: 'rgb(48, 46, 65)'}}>
                                        {toolBarItem[1]}
                                    </Button>
                                </Scroll>
                            )})}  
                            
                            <Divider classes={{root: classes.dividerColor}} orientation='vertical' flexItem/> 
                            
                            
                            
                            <div>
                                {names.map (name => {
                                    return (
                                        <Button 
                                            className={classes.toolBarButtons} 
                                            style={{textTransform: 'none', fontFamily: 'Poppins', color: 'rgb(48, 46, 65)'}}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                name === 'register' ? window.location.href="https://campfireconvos.com/registration" : 
                                                window.location.href="https://campfireconvos.com/login" ;
                                            }}
                                        >
                                           {name} 
                                        </Button>
                                    )
                                 })}
                            </div>   
                                  
                    </Grid>
                    <div className={classes.icon}>
                        <Drawer />
                    </div>  
                </Toolbar>  
            </AppBar>    
            <div className={classes.mainContent}>
                <HeaderMainContent />    
            </div>
                 
        </div>
    )
}



