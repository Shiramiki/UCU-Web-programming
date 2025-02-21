let temperature;

function checkTemp(temp){
    if (temp>30){
        console.log("It is too hot");
    }
    else if (temp<20){
        console.log("It's cold");
    }

    else{
        console.log("It's moderate");
    }
}
temperature = 25;
checkTemp(temperature);
temperature = 39;
checkTemp(temperature);
temperature = 13;
checkTemp(temperature);