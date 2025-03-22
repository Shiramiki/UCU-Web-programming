  import YouTubeEmbed from "./iframe";

  const Hobbies = () => {
    return (
      <div id ="body">
        <div id = "Hobbies">
      <h2 class = "changer">
          My Hobbies
      </h2>   
      <center>
      <div>
      <a href = "#local">Previous</a>
      <a href = "#online">Next</a> 
          
    </div>
      </center>
  
      <div id = "Main">
          <div  id ="Media">  
              <center>
      
                  <video id ="local" controls  width = "560" height="315">
                      <source  src = "2020 SDGs CHALLENGE, UNITED FOR CHANGE LS, LESOTHO, SDG5.mp4" type ="video/mp4"></source>
                  </video>
          
                  <YouTubeEmbed></YouTubeEmbed>
              </center>
          </div>
          
      </div>
          
  </div>
      </div>

    )
  };

export default Hobbies;
