$(document).ready(function(){
        function getWeather() {
          var api = 'http://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=0c520a858879b1e768b3042d4693e7f3';
          $.getJSON(api, function(tempData) {
            var x = tempData.main.temp - 273.15; // Convert kelvin to celcius
            var y = tempData.sys.country;
            var z = tempData.name;
            $('.temp').text(x);
            $('.loc').text(z + ", " + y);
            $('.description').text("Haze");
            if (x >= 25) {
              $("body").css({background:'radial-gradient(circle, #f1f444,red)'});
            } else {
              $("body").css({background:'linear-gradient(to right, #53346D, #000000)'});
              $(".cloud").css({color: 'grey'});
            }
          });
        }
        getWeather();
      });