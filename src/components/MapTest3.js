import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import { makeStyles } from '@material-ui/core/styles'; 
import {Container } from '@material-ui/core'

import allStates from "./allstates.json";
import schools from "../static/schoolsOnboard.json";

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
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/mapBackground.png"})`,
        backgroundRepeat: 'no-repeat',
        //backgroundSize: '840px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
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
            <Geographies geography={geoUrl}>
                {({ geographies }) => (
                <>
                    {geographies.map(geo => (
                    <Geography
                        key={geo.rsmKey}
                        stroke="#000"
                        geography={geo}
                        fill="transparent"
                        
                    />
                    ))}
                    {geographies.map(geo => {
                    const centroid = geoCentroid(geo);
                    const cur = allStates.find(s => s.val === geo.id);
                    return (
                        <g key={geo.rsmKey + "-name"}>
                        </g>
                    );
                    })}
                </>
                )}
            </Geographies>

            {/* coordinate system is [lon, lat] (order of d3-geo */}
            {schools.map(school => (
                <Marker coordinates={[school["lon"], school["lat"]]}>
                    <circle r={8} fill="#fc6060" />
                </Marker>
            ))}
            
            </ComposableMap>
        </div>
    </div>
  );
};

export default MapChart;
