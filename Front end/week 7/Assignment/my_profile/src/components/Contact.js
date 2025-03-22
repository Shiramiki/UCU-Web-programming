const Contact = () => {
    return (
      <div id = "body">
      <div id = "Contact">
        <center>
            <h2 class = "changer">
                <u>Contact Me</u>
            </h2>
        </center>
    
        <div>
            <form>
                <label for="name">Name</label>
                <input type="text" id ="name" name ="name" required></input>
                <label for ="email"> Email</label>
                <input id ="email" name ="email" required></input>
                <label for ="subject">subject</label>
                <input type="text" id = "subjet" name = "subject" required></input>
                <label for = "message">Message</label>
                <textarea id = "message" name = "message" rows ="4" required></textarea>

                <button tyoe ="submit">Send Message</button>
            </form>
    
        </div>
        
        <div id = "links">
            <a href = "mailto:mbeizacokila@gmail.com">Email: mbeicacokila@gmail.com</a>
            <br></br>
            <a href = "https://www.linkedin.com/in/mbeiza-rachel-isooba-73969a54/"> LinkedIn</a>
            <a href="https://x.com/IsoobaMRachel">Twitter</a>
            <a href ="https://github.com/Shiramiki">Github</a>
            <a href = "mailto:mbeizacokila@gmail.com"> Email me</a>
        </div>
    </div>
  </div>

    
  );
}
  
  export default Contact;
  