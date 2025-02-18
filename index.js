const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Variables to store password elements
let holder1 = document.getElementById("password1");
let holder2 = document.getElementById("password2");

// Function to generate random passwords of configurable length
function generate() {
    const passwordLength = 15;
    let password1 = "";
    let password2 = "";

    for (let i = 0; i < passwordLength; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }

    // Clear previous passwords and set new passwords
    holder1.textContent = password1;
    holder2.textContent = password2;
}