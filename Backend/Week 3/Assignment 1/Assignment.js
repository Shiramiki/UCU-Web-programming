import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import fs from 'fs';


const rl = readline.createInterface({ input, output });

var app = true

while ( app === true){
    console.log("Menu")
    console.log("1.Signup \n2.Login");

    var option = await rl.question('Enter the number Coresponding to the Option you want ')
        switch(option){
            case "1":
                var validator = 0;
                var name = await rl.question('Enter your name: ');
                var email = await rl.question('Enter your email: ');
                var username = await rl.question('Enter your username: ');
                while (validator === 0){
                    var password = await rl.question('Enter your password: ');
                    var reEntry =await rl.question('Re-enter your password: ');
                    validator = validatePassword(password, reEntry);
                }
                validator = 0
                const credentials = {
                    name:name,
                    username: username,
                    email:email,
                    password: password
                };
            
                // Write the object to a JSON file
                const filePath = './credentials.json'; // Define the file path
                fs.writeFileSync(filePath, JSON.stringify(credentials, null, 2), 'utf8');

                break;
            case "2": 
                while (validator === 0){
                    var loginEmail = await rl.question('Enter your email: ');
                    var loginpassword = await rl.question('Enter your password: ');
                    var validator1 = validateEmail(email, loginEmail);
                    var validator2 = validatePassword(password, loginpassword);
                    if (validator1 === 1 && validator2 === 1){
                        validator = 1;

                    }
                    if (validator === 1){
                        validator = 2;
                }

                }
                break;
            }

            while(validator === 2){
                console.log(`Welcome ${name}`);
                console.log("Menu")
                console.log("1.View profile \n2.Logout\n3.Exit")
                option =await rl.question('Enter the number Coresponding to the Option you want ');
                    switch(option){
                        case "1" : console.log("Profile");
                                    console.log(`Name: ${name}`)
                                    console.log(`Username: ${username}`)
                                    console.log(`Email: ${email}`)

                                break;
                        case "2" : console.log("You have logged out successfully");
                                validator = 0
                                break;
                        case "3" : validator = 0
                                app = false
                                break;

                        default:
                            console.log("You have entered an invalid Input")

                    }
                   


            }

    
}
rl.close();
            

function validatePassword(password, reEntry) {
    if (password !== reEntry){
        console.log("Your passwords do not match");
        validator = 0
    }
    else{
        var validator = 1
    }

    return validator;

}

function validateEmail(email, reEntry) {
    if (email !== reEntry){
        console.log("Your email does not match any in the system");
        validator = 0;
    }
    else{
        var validator = 1

    }
    return validator

}


