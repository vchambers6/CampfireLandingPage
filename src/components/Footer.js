import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { Button, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        //background: 'linear-gradient(#fff 30%, #ff9999 90%)',
        fontFamily: 'Poppins',
        margin: 0,
        padding: 0,
    },
    section: {
        position: 'static',
        height: "40vh",
        height: '100%',
        width: "100%",
        content: '', 
        bottom: 0, 
        left: 0, 

        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',

        background: '#ff9999',
        opacity: '75%',
        //background: 'rgba(196, 196, 196, 0.7)',
        borderRadius: '50% 50% 0 0/100% 100% 0 0',
        transform: 'scaleX(1.5)',
            
    },
    content: {
        position: 'static',
        zIndex: 1,
        bottom: 0,
        color: '#fff',
        fontSize: '1.5rem',
        textAlign: 'center',
        transform: 'scaleX(.67)',
    },
}))

export default function Footer() {
    const classes = useStyles();  
    return (

        <div className={classes.root}>
            <section className={classes.section}>
                <div className={classes.content}> 
                    <h5> want to get in touch? <br/> reach us at 
                        <Button
                            href={`mailto:info@campfireconvos.com?subject=Campfire Convos Inquiry`}
                            target="_top"
                            rel="noopener noreferrer"
                            style={{fontFamily: 'Poppins', textTransform: 'none', color: 'rgb(48, 46, 65)', fontSize: '1.5rem', fontFamily: 'Poppins'}}
                        >
                            info@campfireconvos.com
                        </Button>
                    </h5>
                </div>
            </section>
            
        </div>
       
    )
}