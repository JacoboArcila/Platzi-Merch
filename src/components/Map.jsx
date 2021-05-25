import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

function Map() {

    const mapStyles = {
        height: "58vh",
        with: "100%"
    }

    const defaultCenter = {
        lat: 19.4264261, lng: -99.178796
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyBM7R1KmgkUzj-vs8r_4HSYxCwXrSmRn_U' >
            <GoogleMap
                MapStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}


export default Map;