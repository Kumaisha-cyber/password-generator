function generatePassword() {

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for (let i = 0; i < 12; i++) {

        let randomNumber =
            Math.floor(Math.random() * characters.length);

        password += characters[randomNumber];
    }

    document.getElementById("password").value = password;
}
