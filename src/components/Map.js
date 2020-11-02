import React from "react";
import { makeStyles } from '@material-ui/core/styles'; 
import {Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
}))

const Map = () => {
    const classes = useStyles(); 


    return (
        <div className={classes.root}>
            <img src={`${process.env.PUBLIC_URL + '/assets/map.png'}`}></img>
        </div>
  );
};

export default Map;