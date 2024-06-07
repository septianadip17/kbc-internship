import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default icon issue
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMarker = () => {
  const map = useMap();

  useEffect(() => {
    map
      .locate({
        setView: true,
        enableHighAccuracy: true,
      })
      .on("locationfound", (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup("You are here :)")
          .openPopup();
      })
      .on("locationerror", (e) => {
        console.log(e);
        alert("Location access denied.");
      });
  }, [map]);

  return null;
};

const MapComponent = () => {
  return (
    <MapContainer
      center={[52.22977, 21.01178]}
      zoom={13}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapComponent;
