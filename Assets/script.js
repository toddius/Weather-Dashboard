// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
$(document).ready(function (){

    // establish local date and time variables
    let localDate = "";
    // get local date and time
    localDate = dayjs().format('MM/DD/YYYY');
    console.log(localDate);
    //add current day to header
    $("#currentDate").html("(" + localDate + ")");

    // establish local weather variables
    let lat = 0;
    let lon = 0;
    let weatherInfo = "";
    
    
    
    function weatherInformation (cityName){
        // cityName = $("#cName").val();
        console.log(cityName);

    //  let cityCoord = fetch("http://api.positionstack.com/v1/forward?access_key=b1fbc24590355d26e96b052c2922033d&query="+cityName);
    
    
        
    // weatherInfo = fetch("api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=6&appid=7bc7605a8b9655f82051e8076cd0e1df", {
    weatherInfo = fetch("http://api.openweathermap.org/data/2.5/forecast/daily?q=Denver,CO,US&cnt=6&appid=7bc7605a8b9655f82051e8076cd0e1df", {

    "method": "GET",
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
    console.log(weatherInfo);

    return;
    }

    $(".form-inline").on("submit", function(event){
        event.preventDefault();
        weatherInformation($("#cName").val())});



});

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
//