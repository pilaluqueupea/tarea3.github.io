document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "usuario" && password === "contraseña") {
        document.getElementById("welcomeMessage").textContent = "Bienvenidos al sitio web Tarea3";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

document.getElementById("googleLogin").addEventListener("click", function() {
    // Lógica de autenticación con Google
    alert("Iniciar sesión con Google");
});

document.getElementById("facebookLogin").addEventListener("click", function() {
    // Lógica de autenticación con Facebook
    alert("Iniciar sesión con Facebook");
});
