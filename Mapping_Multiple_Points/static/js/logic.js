// Add console.log to check to see if our code is working
console.log("working");

// Create a map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4.5);

// // We create the tile layer that will be the background of our map. 
// // Leaflet Quickstart. 
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: apiKey
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// We create the tile layer that will be the background of our map.
// Mapbox Styles API.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: apiKey
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add marker to map for LA, CA
// var marker = L.marker([34.0522, -118.2437]).addTo(map);

// var marker = L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// var marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: 'yellow',
//  }).addTo(map);

// // Get data from cities.js
// let cityData = cities;
// // Iterate through cities objects and map a marker for each city location
// cityData.forEach(city => {
//     console.log(city);
//     L.circleMarker(city.location, {
//         radius: city.population / 100000, // dividing to reduce circle size

//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// Get data from cities.js
let cityData = cities;
// Iterate through cities objects and map a marker for each city location
cityData.forEach(city => {
    console.log(city);
    L.circleMarker(city.location, {
        radius: city.population / 200000, // dividing to reduce circle size
        color: "orange",
        weight: 4
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});


