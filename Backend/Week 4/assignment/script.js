import fetch from 'node-fetch'

function dataFetcher(callback){
    fetch("https://data.cityofnewyork.us/api/views/c3uy-2p5r/rows.json?accessType=DOWNLOAD")
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null))
}

dataFetcher((error, data) => {
    if (error){
        console.error("There was a Fetching error", error);

    }


    else{
        console.log("This is the Data Using Callback:", data);
    }

})


// dataFetcher(dataFetcherCallback)