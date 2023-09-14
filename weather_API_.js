
window.onload = function() {
    openPopup();
};

function openPopup() {
    const userConfirmed = confirm("Allow GPS Access ?");
    
    if (userConfirmed) {
        (getLocation());
    } else {
        // User pressed "Cancel" or closed the dialog
        // Handle this case if needed
        alert("GPS Location access denied.");
    }
}


// function callYourFunction() {
//     // Your code here to call the desired function
//     alert("Function called!");
// }
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showWeather);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }
    
        function showWeather(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
    
            // Call a function to fetch weather data using OpenWeather API
            // Pass the latitude and longitude to the function
            fetchWeatherData(latitude, longitude);
        }
    
        // Call this function when the user clicks the "Save" button
        function saveLocation() {
            getLocation();
        }
    
        function fetchWeatherData(latitude, longitude) {
            const apiKey = 'a50afb4a864588c589df83ec0c6c2ed2';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Process and display weather data in your HTML
                    displayWeather(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        }
        
        function displayWeather(data) {
            // Use data to populate the temperature, humidity, weather condition, and rain forecast in your HTML elements
            // For example:
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const weatherCondition = data.weather[0].description;
            
            // Update your HTML elements with this data
            document.getElementById('temperature').textContent = temperature + "°C";
            document.getElementById('humidity').textContent = "Humidity: " + humidity + "%";
            document.getElementById('weather-condition').textContent = "Condition: " + weatherCondition;
        }
        
    
    


    
        