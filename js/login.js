const inputUser = document.getElementById("inputUser");
const inputPass = document.getElementById("inputPass");
const buttonLog = document.getElementById("buttonLog");
const errorUser = document.getElementById("errorUser"); 
const errorPass= document.getElementById("errorPass");

errorUser.classList.add("d-none");
errorPass.classList.add("d-none");

const objForm = {
  user: "",
  pass: "",
};

const formValues = (evento) => {
  const { name, value } = evento.target;
  objForm[name] = value;
 
  if (name === "user" && value !== "") {
    inputUser.classList.remove("is-invalid");
    errorUser.classList.add("d-none");
  } else if (name === "pass" && value !== "") {
    errorPass.classList.add("d-none");
  };

};

const sendForm = (ev) => {
  ev.preventDefault();
  const { user, pass } = objForm;
  if (!user && !pass) {
    errorUser.classList.remove("d-none");
    errorPass.classList.remove("d-none");
  }
  if (!user) {
    inputUser.classList.add("is-invalid");
    errorUser.classList.remove("d-none");
  }
  if (!pass) {
    errorPass.classList.remove("d-none");
  }


  const users = JSON.parse(localStorage.getItem("users")) || [];
  const filterUser = users.filter((userLs) => userLs.usuario === user);

  if (filterUser.length > 0) {
    if (filterUser[0].contrasenia === pass && !filterUser[0].deleted) {
      filterUser[0].login = true;

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(filterUser[0]));

      filterUser[0].role === "admin"
        ? (location.href = "../admin.html")
        : (location.href = "../user.html");
    } else {
      alert("Usuario y/o Contraseña incorrecto");
    }
  } else {
    alert("Usuario inexistente");
  }
};

inputPass.addEventListener("input", formValues);
inputUser.addEventListener("input", formValues);
buttonLog.addEventListener("click", sendForm);