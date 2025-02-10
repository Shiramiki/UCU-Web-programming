
// Callbacks
function dataFetcher(callback){
    fetch("https://data.montgomerycountymd.gov/api/views/e54u-qx42/rows.json?")
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null))
}

function displayData(){
    dataFetcher((error, data) => {
        if (error){
            // console.error("There was a Fetching error", error);
            document.getElementById("displaydiv1").innerHTML = `<p style "color:red"> There was a fetching Error: ${error}</p>`;
        }
    
    
        else{
            // console.log("This is the Data Using Callback:", data);
            let htmlContent = `<h2>Pet Information:</h2><ul>
            <table>
                    <tr>
                        <th> ID</th>
                        <th> Name</th>
                        <th> Type </th>
                        <th> Breed </th>
                        <th> Age </th>
                    </tr>`

            data.data.forEach(item => {
                // Replace 'item[4]' with the correct property indices based on your data structure
                htmlContent += `
                <tr>
                    <td>${item[8]}</td>
                    <td>${item[11]}</td>
                    <td>${item[12]}</td>
                    <td>${item[16]}</td>
                    <td>${item[13]}</td>
                </tr>
                `
            });
            htmlContent += "</table>";
            document.getElementById("displaydiv1").innerHTML = htmlContent;
        }
    
    })

}

//promise

function promiseFetcher(){
    fetch("https://data.montgomerycountymd.gov/api/views/e54u-qx42/rows.json?")
    .then(response => {
        if (!response.ok){

            throw new Error("the response was not okay");
        }

        return response.json();
    })
    .then(data =>{
        let htmlContent = "<h2>Fetching with Promise</h2><ul>";
        data.data.forEach(item => {
            htmlContent += `<li>
          <strong>ID:</strong> ${item[8]} &nbsp&nbsp&nbsp
          <strong>Name:</strong> ${item[11]} &nbsp&nbsp&nbsp
          <ul>
                <li><strong>Type:</strong> ${item[12]} </li>
                <li><strong>Breed:</strong> ${item[16]}</li> 
                <li><strong>Age:</strong> ${item[13]}</li>
          </ul> 
        </li>
        <br>`
      });
      htmlContent += "</ul>";

      document.getElementById("displaydiv2").innerHTML = htmlContent;
        })
    .catch(error=> {
        document.getElementById("displaydiv2").innerHTML = `<p> There was an Error Fetching your Data: ${error}</p>`
    })
}


// Await / async
async function asyncDataFetching(){
    try{
        const response =await fetch("https://data.montgomerycountymd.gov/api/views/e54u-qx42/rows.json?");

        if (!response.ok){
            throw new Error("The network is not okay");
        }
        const data = await response.json();
        let htmlContent = "<h2>Fetch data with Async/ Await</h2><ul>";
        data.data.forEach(item =>{
            htmlContent += `<li>
        <strong>ID:</strong> ${item[8]}&nbsp&nbsp&nbsp
        <strong>Name:</strong> ${item[11]}
        
      </li>`;
        });

        htmlContent += "</ul>";
        document.getElementById("displaydiv3").innerHTML = htmlContent;
        
        
  }     
        catch (error) {
            document.getElementById("displaydiv3").innerHTML = `<p>"Encountered a Fetching error: ${error}</p>`
    }
}