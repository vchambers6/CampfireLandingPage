import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import { makeStyles, withStyles } from '@material-ui/core/styles'; 
import {Container } from '@material-ui/core'

import allStates from "./allstates.json";
import schools from "../../static/schoolsOnboard.json";

const InteractiveMarker = withStyles((theme) => ({
    style: {

    },
    '&:hover': {
        backgroundColor: '#000',
        color: '#fff', 
      },

}))(Marker); 

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

const useStyles = makeStyles((theme) => ({
    root: {
    },
    map: {
        //justifyContent: 'center', 
        //alignItems: 'center', 
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/MapBG.png"})`,
        backgroundColor: 'rgba(255,255,255,0.3)', 
        backgroundBlendMode: 'lighten', // changes opacity of background image. 
        backgroundRepeat: 'no-repeat',
        //backgroundSize: '840px',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundPosition: '20% 40%',
    },
    marker: {
        '&:hover': {
            fill: '#000'
          },
    },
}))

const MapChart = () => {
    const classes = useStyles(); 


  return (
      <div className={classes.root}>
        <div className={classes.map}>
            <ComposableMap projection="geoAlbersUsa"
                width='1000'
                style={{strokeWidth: 2,}}
            > 
            <Geographies geography={geoUrl}
            >
                {({ geographies }) => (
                <>
                    {geographies.map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        stroke="#000"
                        geography={geo}
                        fill="transparent"
                        style={{
                            default: { outline: "none" },
                            hover: { outline: "none" },
                            pressed: { outline: "none" },
                          }}
                        
                    />
                    ))}
                    {/* 
                    {geographies.map(geo => {
                    const centroid = geoCentroid(geo);
                    const cur = allStates.find(s => s.val === geo.id);
                    return (
                        <g key={geo.rsmKey + "-name"}>
                        </g>
                    );
                    })}
                    */}
                </>
                )}
            </Geographies>

            {/* coordinate system is [lon, lat] (order of d3-geo */}
            {schools.map(school => (
                <Marker coordinates={[school["lon"], school["lat"]]}>
                    <circle className={classes.marker} r={8} fill="#fc6060" />
                </Marker>
            ))}
            
            </ComposableMap>
        </div>
    </div>
  );
};

export default MapChart;
