import * as  React from 'react'

// import './MapStyles.css';
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer } from 'react-leaflet';
import '../../styles/MapStyles.scss';

const position:[number, number] = [54.372158, 18.638306];
export default function MapComponent() {
    return (
        
        <div className="mapWrapper">
        <div className="mapName" >

            <Map style={{ height: "70vh", width: "70%" }}  center={position} zoom={16}>
                <TileLayer
                    url=' https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            </Map>
            </div>
         
        </div>
    )
}
