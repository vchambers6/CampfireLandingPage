import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import './App.css';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import About from './components/About';
import Map from './components/Map';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';

const useStyles = makeStyles((theme) => ({
  root: {
    // 100vh means 100% of the viewPort height 
    minHeight: '100vh', 
    // this is a BACKTICK, not an apostrophe/quote. located beneath 'esc' on mac keyboard
    //backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.png'})`, 
    background: 'linear-gradient(to bottom, #ff9999 60%, #FC976A 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    overflowX: 'hidden',
  },
})); 
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <About />
      <Map />
      <OurTeam />
      <Contact />
    </div>
  );
}
