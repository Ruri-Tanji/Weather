function place(){
    location.href = "./place.html";
}

const API_KEY_WEATHER = '3973573df4b90d77334586fa2dfedd87';
const URL = "https://api.openweathermap.org/data/2.5/weather?";
const CITY = 'q=Tokyo'; 


$.ajax({
    url: URL + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let dateObj = new Date();
        dateObj.setTime(Number(data.dt) * 1000); 
        let month = dateObj.getMonth(); 
        let date = dateObj.getDate();  
        htmltext += '今日：' +String(month + 1) + '月' + date + '日 ' ;
        document.getElementById("today").innerHTML = htmltext;
    }
});

$.ajax({
    url: URL + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let dateObj = new Date();
        dateObj.setTime(Number(data.dt) * 1000); 
        let month = dateObj.getMonth(); 
        let date = dateObj.getDate();  
        htmltext += '明日：' +String(month + 1) + '月' + (date+1) + '日 ' ;
        document.getElementById("tomorrow").innerHTML = htmltext;
    }
});

$.ajax({
    url: URL + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="250" height="250" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="250" height="250"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="250" height="250"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="250" height="250"/>';
        else if (weather == "Thunder") htmltext += '<img src="img/thunder.png" width="250" height="250"/>';
        else htmltext += '<img src="img/cloudy.png" width="250" height="250"/>';
        document.getElementById("weather1").innerHTML = htmltext;
    }
});

$.ajax({
    url: URL + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = ""; 
        let mainTemp = data.main.temp;
        htmltext += Math.floor(mainTemp) + "℃";
        document.getElementById("temp1").innerHTML = htmltext;
    }
});


$.ajax({
    url: URL + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = ""; 
        let humidity = data.main.humidity;
        if (humidity <= 55 ) htmltext += '<img src="img/wash5.png" width="150" height="150" />';
        else if (55 <= humidity && humidity <= 65) htmltext += '<img src="img/wash4.png" width="150" height="150" />';
        else if (65<= humidity && humidity <= 75) htmltext += '<img src="img/wash3.png" width="150" height="150" />';
        else if (75 <= humidity && humidity <= 85) htmltext += '<img src="img/wash2.png" width="150" height="150" />';
        else if (85 <= humidity) htmltext += '<img src="img/wash1.png" width="150" height="150" />';
        document.getElementById("wash").innerHTML = htmltext;
    }
});

$.ajax({
    url: URL + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = ""; 
        let humidity = data.main.humidity;
        if (humidity <= 55 ) htmltext += '大変よく乾く';
        else if (55 <= humidity && humidity <= 65) htmltext += '良く乾く';
        else if (65<= humidity && humidity <= 75) htmltext += '乾く';
        else if (75 <= humidity && humidity <= 85) htmltext += '乾きにくい';
        else if (85 <= humidity) htmltext += '大変乾きにくい';
        document.getElementById("wash_text").innerHTML = htmltext;
    }
});

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/uvi/history?lat=37.75&lon=-122.37&start=1498049953&end=1498481991&"  + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = ""; 
        let humidity = data.value;
        htmltext += humidity;
        document.getElementById("pollen_text").innerHTML = htmltext;
    }
});

function today(){
$.ajax({
    url: URL + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="250" height="250" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="250" height="250"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="250" height="250"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="250" height="250"/>';
        else if (weather == "Thunder") htmltext += '<img src="img/thunder.png" width="250" height="250"/>';
        else htmltext += '<img src="img/cloudy.png" width="250" height="250"/>';
        document.getElementById("weather1").innerHTML = htmltext;
    }
});

$.ajax({
    url: URL + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = ""; 
        let mainTemp = data.main.temp;
        htmltext += Math.floor(mainTemp);
        document.getElementById("temp1").innerHTML = htmltext;
    }
});

//$.ajax({
    //url: URL + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    //type: "GET",
    //success: function(data) {
      //  let htmltext = "";  
       // let maxTemp = data.main.temp_max;
        //let minTemp = data.main.temp_min;
        //htmltext += Math.floor(maxTemp) + "/" + Math.floor(minTemp);
        //document.getElementById("temp2").innerHTML = htmltext;
    //}
//});

$.ajax({
    url: URL + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = ""; 
        let humidity = data.main.humidity;
        if (humidity <= 55 ) htmltext += '<img src="img/wash5.png" width="150" height="150" />';
        else if (55 <= humidity && humidity <= 65) htmltext += '<img src="img/wash4.png" width="150" height="150" />';
        else if (65<= humidity && humidity <= 75) htmltext += '<img src="img/wash3.png" width="150" height="150" />';
        else if (75 <= humidity && humidity <= 85) htmltext += '<img src="img/wash2.png" width="150" height="150" />';
        else if (85 <= humidity) htmltext += '<img src="img/wash1.png" width="150" height="150" />';
        document.getElementById("wash").innerHTML = htmltext;
    }
});

$.ajax({
    url: URL + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = ""; 
        let humidity = data.main.humidity;
        if (humidity <= 55 ) htmltext += '<img src="img/wash1.png" width="150" height="150" />';
        else if (55 <= humidity && humidity <= 65) htmltext += '<img src="img/wash2.png" width="150" height="150" />';
        else if (65<= humidity && humidity <= 75) htmltext += '<img src="img/wash3.png" width="150" height="150" />';
        else if (75 <= humidity && humidity <= 85) htmltext += '<img src="img/wash4.png" width="150" height="150" />';
        else if (85 <= humidity) htmltext += '<img src="img/wash5.png" width="150" height="150" />';
        document.getElementById("wash").innerHTML = htmltext;
    }
});

$.ajax({
    url: URL + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = ""; 
        let humidity = data.main.humidity;
        if (humidity <= 55 ) htmltext += '大変よく乾く';
        else if (55 <= humidity && humidity <= 65) htmltext += '良く乾く';
        else if (65<= humidity && humidity <= 75) htmltext += '乾く';
        else if (75 <= humidity && humidity <= 85) htmltext += '乾きにくい';
        else if (85 <= humidity) htmltext += '大変乾きにくい';
        document.getElementById("wash_text").innerHTML = htmltext;
    }
});

}

function tomorrow(){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
        type: "GET",
        success: function(data) {
            let htmltext = "";  
            let weather = data.list[23].weather[0].main; 
            if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="250" height="250" />';
            else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="250" height="250"/>';
            else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="250" height="250"/>';
            else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="250" height="250"/>';
            else if (weather == "Thunder") htmltext += '<img src="img/thunder.png" width="250" height="250"/>';
            else htmltext += '<img src="img/cloudy.png" width="250" height="250"/>';
            document.getElementById("weather1").innerHTML = htmltext;
        }
    });
    
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
        type: "GET",
        success: function(data) {
            let htmltext = ""; 
            let  mainTemp= data.list[23].main.temp;
            htmltext += Math.floor(mainTemp);
            document.getElementById("temp1").innerHTML = htmltext;
        }
    });

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
        type: "GET",
        success: function(data) {
            let htmltext = ""; 
            let  mainTemp= data.list[23].main.temp;
            htmltext += Math.floor(mainTemp);
            document.getElementById("temp1").innerHTML = htmltext;
        }
    });

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
        type: "GET",
        success: function(data) {
            let htmltext = "";  
            let humidity= data.list[23].main.humidity; 
            if (humidity <= 55 ) htmltext += '<img src="img/wash5.png" width="150" height="150" />';
            else if (55 <= humidity && humidity <= 65) htmltext += '<img src="img/wash4.png" width="150" height="150" />';
            else if (65<= humidity && humidity <= 75) htmltext += '<img src="img/wash3.png" width="150" height="150" />';
            else if (75 <= humidity && humidity <= 85) htmltext += '<img src="img/wash2.png" width="150" height="150" />';
            else if (85 <= humidity) htmltext += '<img src="img/wash1.png" width="150" height="150" />';
            document.getElementById("wash").innerHTML = htmltext;
        }
    });

    $.ajax({
        url: URL + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
        type: "GET",
        success: function(data) {
            let htmltext = ""; 
            let humidity= data.list[23].main.humidity; 
            if (humidity <= 55 ) htmltext += '大変よく乾く';
            else if (55 <= humidity && humidity <= 65) htmltext += '良く乾く';
            else if (65<= humidity && humidity <= 75) htmltext += '乾く';
            else if (75 <= humidity && humidity <= 85) htmltext += '乾きにくい';
            else if (85 <= humidity) htmltext += '大変乾きにくい';
            document.getElementById("wash_text").innerHTML = htmltext;
        }
    });
    
}

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let date = new Date(data.list[0].dt_txt);
        date.setHours(date.getHours() + 9);
        let hours = date.getHours();
        htmltext +=hours;
        document.getElementById("t0").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.list[0].weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="40" height="40" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="40" height="40"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="40" height="40"/>';
        else htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        document.getElementById("w0").innerHTML = htmltext;
    }
});


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let  mainTemp= data.list[0].main.temp; 
        htmltext += Math.floor(mainTemp);
        document.getElementById("mp0").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let humidity= data.list[0].main.humidity; 
        htmltext += humidity;
        document.getElementById("h0").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let windspeed= data.list[0].wind.speed; 
        htmltext += windspeed;
        document.getElementById("ws0").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let winddeg= data.list[0].wind.deg; 
        if (337.5 <= winddeg && winddeg <= 382.5 ) htmltext += '北';
        else if (22.5 <= winddeg && winddeg <= 67.5) htmltext += '北東';
        else if (67.5 <= winddeg && winddeg <= 112.5) htmltext += '東';
        else if (112.5 <= winddeg && winddeg <= 157.5) htmltext += '南東';
        else if (157.5 <= winddeg && winddeg <= 202.5) htmltext += '南';
        else if (202.5 <= winddeg && winddeg <= 247.5) htmltext += '南西';
        else if (247.5 <= winddeg && winddeg <= 292.5) htmltext += '西';
        else if (292.5 <= winddeg && winddeg <= 337.5) htmltext += '北西';
        document.getElementById("wd0").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let date = new Date(data.list[1].dt_txt);
        date.setHours(date.getHours() + 9);
        let hours = date.getHours();
        htmltext += hours;
        document.getElementById("t1").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.list[1].weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="40" height="40" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="40" height="40"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="40" height="40"/>';
        else htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        document.getElementById("w1").innerHTML = htmltext;
    }
});


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let  mainTemp= data.list[1].main.temp; 
        htmltext += Math.floor(mainTemp);
        document.getElementById("mp1").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let humidity= data.list[1].main.humidity; 
        htmltext += humidity;
        document.getElementById("h1").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let windspeed= data.list[1].wind.speed; 
        htmltext += windspeed;
        document.getElementById("ws1").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let winddeg= data.list[1].wind.deg; 
        if (337.5 <= winddeg && winddeg <= 382.5 ) htmltext += '北';
        else if (22.5 <= winddeg && winddeg <= 67.5) htmltext += '北東';
        else if (67.5 <= winddeg && winddeg <= 112.5) htmltext += '東';
        else if (112.5 <= winddeg && winddeg <= 157.5) htmltext += '南東';
        else if (157.5 <= winddeg && winddeg <= 202.5) htmltext += '南';
        else if (202.5 <= winddeg && winddeg <= 247.5) htmltext += '南西';
        else if (247.5 <= winddeg && winddeg <= 292.5) htmltext += '西';
        else if (292.5 <= winddeg && winddeg <= 337.5) htmltext += '北西';
        document.getElementById("wd1").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let date = new Date(data.list[2].dt_txt);
        date.setHours(date.getHours() + 9);
        let hours = date.getHours();
        htmltext += hours;
        document.getElementById("t2").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.list[2].weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="40" height="40" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="40" height="40"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="40" height="40"/>';
        else htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        document.getElementById("w2").innerHTML = htmltext;
    }
});



$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let  mainTemp= data.list[2].main.temp; 
        htmltext += Math.floor(mainTemp);
        document.getElementById("mp2").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let humidity= data.list[2].main.humidity; 
        htmltext += humidity;
        document.getElementById("h2").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let windspeed= data.list[2].wind.speed; 
        htmltext += windspeed;
        document.getElementById("ws2").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let winddeg= data.list[2].wind.deg; 
        if (337.5 <= winddeg && winddeg <= 382.5 ) htmltext += '北';
        else if (22.5 <= winddeg && winddeg <= 67.5) htmltext += '北東';
        else if (67.5 <= winddeg && winddeg <= 112.5) htmltext += '東';
        else if (112.5 <= winddeg && winddeg <= 157.5) htmltext += '南東';
        else if (157.5 <= winddeg && winddeg <= 202.5) htmltext += '南';
        else if (202.5 <= winddeg && winddeg <= 247.5) htmltext += '南西';
        else if (247.5 <= winddeg && winddeg <= 292.5) htmltext += '西';
        else if (292.5 <= winddeg && winddeg <= 337.5) htmltext += '北西';
        document.getElementById("wd2").innerHTML = htmltext;
    }
});
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let date = new Date(data.list[3].dt_txt);
        date.setHours(date.getHours() + 9);
        let hours = date.getHours();
        htmltext += hours;
        document.getElementById("t3").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.list[3].weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="40" height="40" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="40" height="40"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="40" height="40"/>';
        else htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        document.getElementById("w3").innerHTML = htmltext;
    }
});


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let  mainTemp= data.list[3].main.temp; 
        htmltext += Math.floor(mainTemp);
        document.getElementById("mp3").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let humidity= data.list[3].main.humidity; 
        htmltext += humidity;
        document.getElementById("h3").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let windspeed= data.list[3].wind.speed; 
        htmltext += windspeed;
        document.getElementById("ws3").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let winddeg= data.list[3].wind.deg; 
        if (337.5 <= winddeg && winddeg <= 382.5 ) htmltext += '北';
        else if (22.5 <= winddeg && winddeg <= 67.5) htmltext += '北東';
        else if (67.5 <= winddeg && winddeg <= 112.5) htmltext += '東';
        else if (112.5 <= winddeg && winddeg <= 157.5) htmltext += '南東';
        else if (157.5 <= winddeg && winddeg <= 202.5) htmltext += '南';
        else if (202.5 <= winddeg && winddeg <= 247.5) htmltext += '南西';
        else if (247.5 <= winddeg && winddeg <= 292.5) htmltext += '西';
        else if (292.5 <= winddeg && winddeg <= 337.5) htmltext += '北西';
        document.getElementById("wd3").innerHTML = htmltext;
    }
});
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let date = new Date(data.list[4].dt_txt);
        date.setHours(date.getHours() + 9);
        let hours = date.getHours();
        htmltext += hours;
        document.getElementById("t4").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.list[4].weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="40" height="40" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="40" height="40"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="40" height="40"/>';
        else htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        document.getElementById("w4").innerHTML = htmltext;
    }
});


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let  mainTemp= data.list[4].main.temp; 
        htmltext += Math.floor(mainTemp);
        document.getElementById("mp4").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let humidity= data.list[4].main.humidity; 
        htmltext += humidity;
        document.getElementById("h4").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let windspeed= data.list[4].wind.speed; 
        htmltext += windspeed;
        document.getElementById("ws4").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let winddeg= data.list[4].wind.deg; 
        if (337.5 <= winddeg && winddeg <= 382.5 ) htmltext += '北';
        else if (22.5 <= winddeg && winddeg <= 67.5) htmltext += '北東';
        else if (67.5 <= winddeg && winddeg <= 112.5) htmltext += '東';
        else if (112.5 <= winddeg && winddeg <= 157.5) htmltext += '南東';
        else if (157.5 <= winddeg && winddeg <= 202.5) htmltext += '南';
        else if (202.5 <= winddeg && winddeg <= 247.5) htmltext += '南西';
        else if (247.5 <= winddeg && winddeg <= 292.5) htmltext += '西';
        else if (292.5 <= winddeg && winddeg <= 337.5) htmltext += '北西';
        document.getElementById("wd4").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let date = new Date(data.list[5].dt_txt);
        date.setHours(date.getHours() + 9);
        let hours = date.getHours();
        htmltext += hours;
        document.getElementById("t5").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.list[5].weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="40" height="40" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="40" height="40"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="40" height="40"/>';
        else htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        document.getElementById("w5").innerHTML = htmltext;
    }
});


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let  mainTemp= data.list[5].main.temp; 
        htmltext += Math.floor(mainTemp);
        document.getElementById("mp5").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let humidity= data.list[5].main.humidity; 
        htmltext += humidity;
        document.getElementById("h5").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let windspeed= data.list[5].wind.speed; 
        htmltext += windspeed;
        document.getElementById("ws5").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let winddeg= data.list[5].wind.deg; 
        if (337.5 <= winddeg && winddeg <= 382.5 ) htmltext += '北';
        else if (22.5 <= winddeg && winddeg <= 67.5) htmltext += '北東';
        else if (67.5 <= winddeg && winddeg <= 112.5) htmltext += '東';
        else if (112.5 <= winddeg && winddeg <= 157.5) htmltext += '南東';
        else if (157.5 <= winddeg && winddeg <= 202.5) htmltext += '南';
        else if (202.5 <= winddeg && winddeg <= 247.5) htmltext += '南西';
        else if (247.5 <= winddeg && winddeg <= 292.5) htmltext += '西';
        else if (292.5 <= winddeg && winddeg <= 337.5) htmltext += '北西';
        document.getElementById("wd5").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let date = new Date(data.list[6].dt_txt);
        date.setHours(date.getHours() + 9);
        let hours = date.getHours();
        htmltext += hours;
        document.getElementById("t6").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.list[6].weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="40" height="40" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="40" height="40"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="40" height="40"/>';
        else htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        document.getElementById("w6").innerHTML = htmltext;
    }
});


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let  mainTemp= data.list[6].main.temp; 
        htmltext += Math.floor(mainTemp);
        document.getElementById("mp6").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let humidity= data.list[6].main.humidity; 
        htmltext += humidity;
        document.getElementById("h6").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let windspeed= data.list[6].wind.speed; 
        htmltext += windspeed;
        document.getElementById("ws6").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let winddeg= data.list[6].wind.deg; 
        if (337.5 <= winddeg && winddeg <= 382.5 ) htmltext += '北';
        else if (22.5 <= winddeg && winddeg <= 67.5) htmltext += '北東';
        else if (67.5 <= winddeg && winddeg <= 112.5) htmltext += '東';
        else if (112.5 <= winddeg && winddeg <= 157.5) htmltext += '南東';
        else if (157.5 <= winddeg && winddeg <= 202.5) htmltext += '南';
        else if (202.5 <= winddeg && winddeg <= 247.5) htmltext += '南西';
        else if (247.5 <= winddeg && winddeg <= 292.5) htmltext += '西';
        else if (292.5 <= winddeg && winddeg <= 337.5) htmltext += '北西';
        document.getElementById("wd6").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let date = new Date(data.list[7].dt_txt);
        date.setHours(date.getHours() + 9);
        let hours = date.getHours();
        htmltext += hours;
        document.getElementById("t7").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let weather = data.list[7].weather[0].main; 
        if (weather == "Sunny") htmltext += '<img src="img/sunny.png" width="40" height="40" />';
        else if (weather == "Cloudy") htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        else if (weather == "Rain") htmltext += '<img src="img/rainy.png" width="40" height="40"/>';
        else if (weather == "Snow") htmltext += '<img src="img/snow.png" width="40" height="40"/>';
        else htmltext += '<img src="img/cloudy.png" width="40" height="40"/>';
        document.getElementById("w7").innerHTML = htmltext;
    }
});


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let  mainTemp= data.list[7].main.temp; 
        htmltext += Math.floor(mainTemp);
        document.getElementById("mp7").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let humidity= data.list[7].main.humidity; 
        htmltext += humidity;
        document.getElementById("h7").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let windspeed= data.list[7].wind.speed; 
        htmltext += windspeed;
        document.getElementById("ws7").innerHTML = htmltext;
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?" + CITY + '&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {
        let htmltext = "";  
        let winddeg= data.list[7].wind.deg; 
        if (337.5 <= winddeg && winddeg <= 382.5 ) htmltext += '北';
        else if (22.5 <= winddeg && winddeg <= 67.5) htmltext += '北東';
        else if (67.5 <= winddeg && winddeg <= 112.5) htmltext += '東';
        else if (112.5 <= winddeg && winddeg <= 157.5) htmltext += '南東';
        else if (157.5 <= winddeg && winddeg <= 202.5) htmltext += '南';
        else if (202.5 <= winddeg && winddeg <= 247.5) htmltext += '南西';
        else if (247.5 <= winddeg && winddeg <= 292.5) htmltext += '西';
        else if (292.5 <= winddeg && winddeg <= 337.5) htmltext += '北西';
        document.getElementById("wd7").innerHTML = htmltext;
    }
});

