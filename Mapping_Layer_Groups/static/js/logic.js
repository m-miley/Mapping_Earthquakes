// Create street view tile layer that will be the background of our map.
// Mapbox Styles API.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});
// Create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});

// Create a base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Create the map object with center, zoom level and default layer.
// ALT method to set the view. //let map = L.map('mapid').setView([30, 30], 2);
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});

// Pass map layers into layers control and add the layers control to map
L.control.layers(baseMaps).addTo(map);

// access GeoJSON via URL - Airport data on GitHub
let airportData = "https://raw.githubusercontent.com/m-miley/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing GeoJSON data 
d3.json(airportData).then(function(data) {
    console.log(data);
    //Create GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng)
            .bindPopup("<h2>" + feature.properties.faa + "</h2><hr><h3>" + feature.properties.name + "</h3>");
        }
    }).addTo(map);
});

