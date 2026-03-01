function checkLogin() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if (user === "Aim Lock" && pass === "FfNew") {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('dashboard-page').style.display = 'block';
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#000";
    } else {
        alert("Username atau Password Salah!");
    }
}
