import React from 'react'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import data from '../../../features.json'

const WordmapComponent = () => {


    const markers = [
        {
            markerOffset: -15,
            name: "Buenos Aires",
            coordinates: [-58.3816, -34.6037]
        },
        { markerOffset: -15, name: "Germany", coordinates: [10.4541, 51.1642] },
        { markerOffset: 25, name: "Brasilia", coordinates: [4.895168, 52.370216] },
        { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },


    ];
    console.log(data);


    return (

        <ComposableMap className='max-h-96 overflow-hidden'>
            <Geographies geography={data}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey}
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                            geography={geo} />
                    ))
                }

            </Geographies>

            {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                    <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                    >
                        {name}
                    </text>
                </Marker>
            ))}
        </ComposableMap>

    )
}

export default WordmapComponent