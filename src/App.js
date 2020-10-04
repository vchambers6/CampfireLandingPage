import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Title from './components/Title'

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      height: '100vh',
  },
  // mainImage: {
  //   height: '60%',
  //}
}));

function App() {
  return (
    <div className="App">
      <img className='classes.mainImage' src={process.env.PUBLIC_URL + '/assets/dogimg.png'}></img>
      <CssBaseline />
      <Header />
      <Title />
    </div>
  );
}

export default App;
