"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Leaflet Map init
const map = L.map("map").setView([0, 0], 2);
// OpenStreetMap Tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
// ISS Marker
const issMarker = L.marker([0, 0]).addTo(map);
// Get actual ISS-Position
const fetchISSPosition = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch("https://api.wheretheiss.at/v1/satellites/25544");
        const data = yield res.json();
        const { latitude, longitude } = data;
        // Update marker
        issMarker.setLatLng([latitude, longitude]);
        // Center map (optional)
        map.setView([latitude, longitude]);
        console.log(`ISS is at lat: ${latitude}, lon: ${longitude}`);
    }
    catch (err) {
        console.error("Failed to fetch ISS position:", err);
    }
});
// Interval for regular updates
setInterval(fetchISSPosition, 5000);
// Load first position immediately
fetchISSPosition();
