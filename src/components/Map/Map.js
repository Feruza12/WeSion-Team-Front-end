import React from 'react';
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

import points from "./points.json";
import Grid from '@material-ui/core/Grid';

const mapState = {
    center: [41.311081, 69.240562],
    zoom: 9,
    behaviors: ["default", "scrollZoom"]
};

const getPointData = index => {
    return {
        balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
        clusterCaption: "placemark <strong>" + index + "</strong>"
    };
};


const getPointOptions = () => {
    return {
        preset: "islands#violetIcon"
    };
};


export default function YanMap() {
    return (
        <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                <YMaps>
                    <Map state={mapState}  width= '100%' height= '80vh'>
                        <Clusterer
                            options={{
                                preset: "islands#invertedVioletClusterIcons",
                                groupByCoordinates: false,
                                clusterDisableClickZoom: true,
                                clusterHideIconOnBalloonOpen: false,
                                geoObjectHideIconOnBalloonOpen: false
                            }}
                        >
                            {points.map((coordinates, idx) => (
                                <Placemark
                                    key={idx}
                                    geometry={{ coordinates }}
                                    properties={getPointData(idx)}
                                    options={getPointOptions()}
                                />
                            ))}
                        </Clusterer>
                    </Map>
                </YMaps>
            </Grid>
        </Grid>
    )
}