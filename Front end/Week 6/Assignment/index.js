function tog() {
    let toggle = document.getElementById("darkModeToggle");
    let body = document.body;
    
    let home = document.getElementById("Header");
    let contact = document.getElementById("Contact");
    let about = document.getElementById("personals");
    let career = document.getElementById("myCareer");
    let hobbies = document.getElementById("Hobbies");
    let results = document.getElementById("Results");

    let isDark = body.getAttribute("data-theme") === "dark";

    if (!isDark) {
        // Switch to Dark Mode
        home.style.backgroundColor = "#1E1E1E";
        contact.style.backgroundColor = "#1E1E1E";
        about.style.backgroundColor = "#1E1E1E";
        career.style.backgroundColor = "#1E1E1E";
        hobbies.style.backgroundColor = "#1E1E1E";
        results.style.backgroundColor = "#1E1E1E";
        body.style.color = "#FFFFFF";
        document.getElementById("navigation").style.backgroundColor = "#444444";
        toggle.textContent = "Light Mode";
        body.setAttribute("data-theme", "dark");
    } else {
        // Switch to Light Mode
        home.style.backgroundColor = "beige";
        contact.style.backgroundColor = "beige";
        about.style.backgroundColor = "beige";
        career.style.backgroundColor = "beige";
        hobbies.style.backgroundColor = "beige";
        results.style.backgroundColor = "beige";
        body.style.color = "#333333";
        document.getElementById("navigation").style.backgroundColor = "#FBD5D5";
        toggle.textContent = "Dark Mode";
        body.setAttribute("data-theme", "light");
    }
}
