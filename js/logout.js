// Obtener el botón de logout
const logoutButton = document.getElementById("logoutButton");

// Función para cerrar sesión
const logout = () => {
    localStorage.removeItem("user");
    location.href = "../index.html"; // Redirigir a la página de inicio de sesión
};

// Agregar un evento click al botón de logout
logoutButton.addEventListener("click", logout);

// Verificar si el usuario está autenticado
const user = JSON.parse(localStorage.getItem("user"));

if (user && user.login) {
    // Si el usuario está autenticado, mostrar el botón de logout
    logoutButton.style.display = "block";
}
