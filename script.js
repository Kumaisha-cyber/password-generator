function generatePassword() {

    const length =
        document.getElementById("length").value;

    const uppercase =
        document.getElementById("uppercase").checked;

    const lowercase =
        document.getElementById("lowercase").checked;

    const numbers =
        document.getElementById("numbers").checked;

    const symbols =
        document.getElementById("symbols").checked;

    let characters = "";

    if (uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numbers) {
        characters += "0123456789";
    }

    if (symbols) {
        characters += "!@#$%^&*";
    }

    let password = "";

    for (let i = 0; i < length; i++) {

        let randomNumber =
            Math.floor(Math.random() * characters.length);

        password += characters[randomNumber];
    }

    document.getElementById("password").value = password;

    let score = 0;

if (length >= 8) {
    score++;
}

if (uppercase) {
    score++;
}

if (lowercase) {
    score++;
}

if (numbers) {
    score++;
}

if (symbols) {
    score++;
}

let strength = "";

if (score <= 2) {
    strength = "Weak";
}
else if (score <= 4) {
    strength = "Medium";
}
else {
    strength = "Strong";
}

document.getElementById("strength").textContent =
    "Strength: " + strength;
}


function copyPassword() {

    const passwordBox =
        document.getElementById("password");

    passwordBox.select();

    navigator.clipboard.writeText(passwordBox.value);

    alert("Password copied!");
}
function togglePassword() {

    const passwordBox =
        document.getElementById("password");

    if (passwordBox.type === "password") {

        passwordBox.type = "text";

    } else {

        passwordBox.type = "password";

    }
}
