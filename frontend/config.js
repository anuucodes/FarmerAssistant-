// Firebase configuration for Jeevika - Farmer Assistant Platform
// Using var so module scripts can access these via window
var firebaseConfig = {
  apiKey: "your firebase api key",
  authDomain: "jeevika-f683f.firebaseapp.com",
  projectId: "jeevika-f683f",
  storageBucket: "jeevika-f683f.firebasestorage.app",
  messagingSenderId: "150767985205",
  appId: "1:150767985205:web:fb3e00f3173eaebdffc77c"
};

// data.gov.in API credentials
var DATAGOV_API_KEY    = process.env.DATA_APIKEY;
var MANDI_RESOURCE_ID  = process.env.MANDI_RESPURCE_ID;

// Mandi API base URL
var MANDI_API_BASE = "https://api.data.gov.in/resource/" + MANDI_RESOURCE_ID + "?api-key=" + DATAGOV_API_KEY + "&format=json&limit=100";

// OpenWeatherMap API — free key from openweathermap.org
var OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
