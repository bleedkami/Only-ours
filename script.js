function register() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if (name && password) {
        localStorage.setItem("userName", name);
        alert("Sign up successful! Redirecting...");
        window.location.href = "welcome.html"; // Redirect to welcome page
    } else {
        alert("Please fill in all fields!");
    }
}