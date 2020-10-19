import React from 'react';
//import htmlContent from './MapTest.html';
import Chart from 'react-google-charts'; 
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    map: {
    },
}))


export default function MapTest() {
    const classes = useStyles();  
    return (
        <div className={classes.root}>
        <Chart
        width={'500px'}
        height={'300px'}
        chartType="GeoChart"
        data={[
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
        ]}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        rootProps={{ 'data-testid': '1' }}
        mapsApiKey='https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAGBgYFlWucdHEIhilqzD_AAByiVxGXQL0'
        />
</div>
    );
}

