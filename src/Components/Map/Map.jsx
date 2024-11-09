// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom icon for marker
const markerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = () => {
  const position = [42.223, -74.949]; // Milford, NY coordinates

  return (
    <MapContainer  center={position} zoom={13} style={{ height: "400px", width: "100%" ,zIndex: 10 }} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>
          25/B Milford, New York, USA
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
