import React, { useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import {AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { ArrowRight } from '@material-ui/icons';
//import { Link as Scroll} from 'react-scroll'
import HideOnScroll from '../other/HideOnScroll'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        height: '100vh',
        fontFamily: 'Alef',
        fontSize: '3rem',
    },
    appBarClass: {
        background: 'rgba(0, 0, 0, 0)', 
    },
    toolBarSort: {
        // puts it to the right of the screen. marginRight puts it to the left. 
        marginLeft: 'auto', 
    },
    container: {
        justifyContent: 'right',
        alignItems: 'right',
    },
    title: {
        "width": "481px",
        "height": "41px",
        "fontFamily": "Alef",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": "10 rem",
        "lineHeight": "80%",

        "letterSpacing": "-0.045em",
        "color": "#FFFFFF"
    }

}))

export default function Header() {
    const classes = useStyles(); 

    return (
        <div className = {classes.root} id='header'>
            <HideOnScroll>
                <AppBar className={classes.appBarClass} elevation={0}>
                    <Toolbar className={classes.headerToolbar}>
                        <Button class={classes.button}>
                            <img src={process.env.PUBLIC_URL + "assets/WhiteLogo.png"} height="25" width="25"/>
                        </Button>

                        <IconButton className={classes.toolBarSort}>
                            <SortIcon style={{color: '#fff'}}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div className={classes.container}>
                <h1 className={classes.title}> campfire <br /> convos</h1>
            </div>
            
        </div>
    )
}