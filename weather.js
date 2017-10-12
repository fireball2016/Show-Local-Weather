$(document).ready(function(){
var long;
var lat;
var fTemp;
var cTemp;
var kTemp;
var tempSwap=true;

$.getJSON("http://ip-api.com/json", function(data2){
  lat=data2.lat;
  long=data2.lon;
  var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=d2e8b077f83c793f14584c6a429dac03"

  $.getJSON(api, function(data){

    var weatherType = data.weather[0].description;
    var kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;

    fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp-273).toFixed(1);
    windSpeed = (2.237*(windSpeed)).toFixed(1);


    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp + " &#8457;");
    $("#fTemp").click(function() {

      if(tempSwap===false){
        $("#fTemp").html(cTemp + " &#8451;");
        tempSwap=true;
      }
      else {
        $("#fTemp").html(fTemp + " &#8457;");
        tempSwap=false;
      }
    })

    $("#windSpeed").html(windSpeed + " mph");




  });

})

});
