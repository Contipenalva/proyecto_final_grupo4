const user = JSON.parse(localStorage.getItem("user"));

if (!user) {

} else {
  if (
    user.role === "admin" &&
    window.location.pathname !== "../admin.html"
  ) {
    location.href = "../admin.html";
  } else if (
    user.role === "user" &&
    window.location.pathname !== "../user.html"
  ) {
    location.href = "../user.html";
  }
}


  /*  EL PATH VA POR AQUI OJO  location.href = "../index.html"; */
