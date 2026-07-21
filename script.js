function generatePassword() {

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  const length =
    document.getElementById("length").value;

  let password = ""
      
  for (let i = 0; i < length; i++) {  

        let randomNumber =
            Math.floor(Math.random() * characters.length);

        password += characters[randomNumber];
    }

    document.getElementById("password").value = password;
}
function copyPassword() {

    const passwordBox =
        document.getElementById("password");

    passwordBox.select();

    navigator.clipboard.writeText(passwordBox.value);

    alert("Password copied!");
}
