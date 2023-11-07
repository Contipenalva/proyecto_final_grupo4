const users = JSON.parse(localStorage.getItem("users")) || [];

const admins = [
  {
    id: 1,
    usuario: "admin1",
    contrasenia: "123",
    login: false,
    role: "admin",
    deleted: false,
  },
  {
    id: 2,
    usuario: "admin2",
    contrasenia: "123",
    login: false,
    role: "admin",
    deleted: false,
  },
  {
    id: 3,
    usuario: "user1",
    contrasenia: "123",
    login: false,
    role: "user",
    deleted: false,
  },
];

if (users.length === 0) {
  localStorage.setItem("users", JSON.stringify(admins));
}
