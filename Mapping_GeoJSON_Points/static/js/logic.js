// Add console.log to check to see if our code is working
console.log("working");

// Create a map object with a center and zoom level
let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data
let sanFranAirport = {
    "type":"FeatureCollection",
    "features":[{
        "type":"Feature",
        "properties":{
            "id":"3469",
            "name":"San Francisco International Airport",
            "city":"San Francisco",
            "country":"United States",
            "faa":"SFO",
            "icao":"KSFO",
            "alt":"13",
            "tz-offset":"-8",
            "dst":"A",
            "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}
    }]
};

///////// pointToLayer //////////
// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // Turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country);
//     }
// }).addTo(map);

///////// onEachFeature /////////
L.geoJSON(sanFranAirport, {
    // Turn each feature into a marker on the map
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h1>" + feature.properties.faa + "</h1><hr><h3>" + feature.properties.city + ", " + feature.properties.country);
    }
}).addTo(map);


// We create the tile layer that will be the background of our map.
// Mapbox Styles API.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


//////////// access GeoJSON via URL - Airport data on GitHub //////////////
let airportData = "https://raw.githubusercontent.com/m-miley/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing GeoJSON data 
d3.json(airportData).then(function(data) {
    console.log(data);
    //Create GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            console.log(feature);
            return L.marker(latlng).bindPopup("<h2>" + feature.properties.faa + "</h2><hr><h3>" + feature.properties.name);
        }
    }).addTo(map);
});

