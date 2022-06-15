// We create the tile layer that will be the background of our map.
// Mapbox Styles API.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});
// Create a base layer that holds both maps
let baseMaps = {
    Light: light,
    Dark: dark
};

// Create the map object with center, zoom level and default layer.
// ALT method to set the view. //let map = L.map('mapid').setView([30, 30], 2);
let map = L.map('mapid', {
    center: [44.0, -10.0],
    zoom: 3,
    layers: [dark]
});
// Pass map layers into layers control and add the layers control to map
L.control.layers(baseMaps).addTo(map);

//////////// access GeoJSON via URL - Toronto airlines routes data on GitHub //////////////
let torontoData = "https://raw.githubusercontent.com/m-miley/Mapping_Earthquakes/main/torontoRoutes.json";
// Grabbing GeoJSON data 
d3.json(torontoData).then(function(data) {
    console.log(data);
    //Create GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        color: "yellow",
        weight: 2.5,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2>" + feature.properties.airline + feature.properties.airline_id + "</h2><hr><h3>" + feature.properties.src + " to " + feature.properties.dst + "</h3>");
        }        
    }).addTo(map);
});