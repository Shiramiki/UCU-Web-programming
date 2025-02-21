let waterAvailable;

function waterChecker(water){
    if (water>500){
        console.log("Enough water");
    }

    else if (water<200){
        console.log("Water shortage");
    }

    else{
        console.log("Water is limited");
    }
}

waterAvailable = 300;
waterChecker(waterAvailable);