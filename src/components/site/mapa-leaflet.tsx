import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LOJA } from "@/lib/dm";

const icon = L.divIcon({
  className: "",
  html: `<div style="display:flex;flex-direction:column;align-items:center">
    <div style="background:#c9a227;color:#fff;font:600 11px/1 Karla,sans-serif;padding:7px 10px;border-radius:999px;white-space:nowrap;box-shadow:0 8px 20px -8px rgba(0,0,0,.5)">DM Modas</div>
    <div style="width:12px;height:12px;background:#c9a227;transform:rotate(45deg);margin-top:-5px;border-radius:2px"></div>
  </div>`,
  iconSize: [100, 40],
  iconAnchor: [50, 40],
  popupAnchor: [0, -40],
});

export default function Mapa() {
  return (
    <MapContainer
      center={[LOJA.lat, LOJA.lng]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      aria-label="Mapa com a localização da DM Modas em Terenos-MS"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[LOJA.lat, LOJA.lng]} icon={icon} title="DM Modas – Prazer em vesti-los">
        <Popup>
          <strong>DM Modas</strong>
          <br />
          Av. Dr. Ari Coelho de Oliveira, 238 – Centro, Terenos-MS
        </Popup>
      </Marker>
    </MapContainer>
  );
}
