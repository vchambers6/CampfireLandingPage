import React from 'react';
//import htmlContent from './MapTest.html';
import Chart from 'react-google-charts'; 
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/mapBackground.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '840px',
        backgroundPosition: 'center',
    },
    map: {
    },
}))


export default function MapTest() {
    const classes = useStyles();  
    var columns = [
        {'a' : 'b'}
      ];
    return (
        <div className={classes.root}>
        <Chart
        className={classes.map}
        columns={columns}
        width={'800px'}
        height={'480px'}
        chartType="GeoChart"
        data={[
            /*['City', 'Population', 'Area'],
            ['Rome', 2761477, 1285.31],
            ['Milan', 1324110, 181.76],
            ['Naples', 959574, 117.27], */

            ['City', ''],
            ['New Orleans',   1], 
            ['Los Angeles',    1], 
            ['Phoenix', 1], 
            ['Cambridge', 1],
                /*['US-AL', 0],
                ['US-AK', 0],
                ['US-AR', 0],
                ['US-AK', 0],
                ['US-AZ', 0],
                ['US-Colorado', 0],
                ['US-CO', 0],
                ['US-DE', 0],
                ['US-FL', 0],
                ['US-HI', 0],
                ['US-KS', 0],
                ['US-KY', null],
                ['US-MI', 0],
                ['US-MO', 0],
                ['US-MS', 0],
                ['US-MT', null],
                ['US-NE', 0],
                ['US-NJ', 0],
                ['US-NM', 0],
                ['US-NY', 0],
                ['US-OR', 0],
                ['US-PA', 0],
                ['US-TX', 0],
                ['US-UT', 0],
                ['US-VA', 0],
                ['US-WA', 0],
                ['US-WV', 0],
                ['US-WY', 0], */
        ]}
        options={{
            region: 'US',
            displayMode: 'markers',
            resolution: 'provinces',
            colorAxis: { colors: ['black'] },
            sizeAxis: { minValue: 0, maxValue: 100 },
            datalessRegionColor: 'transparent',
            defaultColor: '#f5f5f5',
            chartArea: {
                backgroundColor: {
                    fill: 'transparent',
                    fillOpacity: 0.0,
                    stroke: '#000000',
                },
            },
            backgroundColor: {
                fill: 'transparent',
                stroke: '#000000',
            },
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey='https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAGBgYFlWucdHEIhilqzD_AAByiVxGXQL0'
        rootProps={{ 'data-testid': '3' }}
        />
</div>
    );
}

