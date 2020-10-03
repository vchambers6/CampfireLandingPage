import React from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      
      <CssBaseline />
      <Header/>
    </div>
  );
}

export default App;
