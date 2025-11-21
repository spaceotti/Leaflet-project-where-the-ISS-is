# 🛰️ ISS Live Tracker — TypeScript Version

This is a small interactive project that displays the current location of the International Space Station (ISS) on a world map in real time.
Built with Leaflet.js, the ISS API from wheretheiss.at, and TypeScript.

---

## 🚀 Features

- **Live-Tracking der ISS**  
  The map shows the ISS’s current position in real time.

- **Automatic Updates**  
  Position is refreshed every few seconds.

- **Marker on the Map**  
  ISS location is displayed with a marker that moves dynamically.

- **External API Integration**  
  Data is fetched from:
  `https://api.wheretheiss.at/v1/satellites/25544`
- **Lightweight, No Backend Needed**  
  Pure HTML, CSS, and compiled TypeScript.

---

## 🧰 Technologies Used

- **Leaflet.js** – Open-Source Mapping Library
- **Fetch API** – Datenabruf
- **Open REST API** – Position der ISS
- **TypeScript** – Type safety and structured code
- **HTML + CSS + JavaScript** - (compiled from TS)

---

## 📦 Installation & Start

Clone das Repository:

```bash
git clone https://github.com/spaceotti/Leaflet-project-where-the-ISS-is.git
cd Leaflet-project-where-the-ISS-is

Install dependencies (for TypeScript):
npm install

Compile TypeScript:
npx tsc

Open index.html in a browser (or use Live Server in VSCode) to see the ISS tracker in action.
```
