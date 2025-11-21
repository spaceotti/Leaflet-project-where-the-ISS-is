// Interface for API Response
interface ISSPosition {
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
}

// Leaflet Map init
const map = L.map("map").setView([0, 0], 2);

// OpenStreetMap Tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// ISS Marker

const issMarker = L.marker([0, 0]).addTo(map);

// Get actual ISS-Position
const fetchISSPosition = async (): Promise<void> => {
  try {
    const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const data: ISSPosition = await res.json();

    const { latitude, longitude } = data;

    // Update marker
    issMarker.setLatLng([latitude, longitude]);

    // Center map (optional)
    map.setView([latitude, longitude]);

    console.log(`ISS is at lat: ${latitude}, lon: ${longitude}`);
  } catch (err) {
    console.error("Failed to fetch ISS position:", err);
  }
};

// Interval for regular updates
setInterval(fetchISSPosition, 5000);

// Load first position immediately
fetchISSPosition();
