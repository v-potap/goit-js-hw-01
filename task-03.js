const ADMIN_PASSWORD = "jqueryismyjam";
let message;

message = prompt("Password :");

if (message === null) {
  alert("Отменено пользователем!");
} else if (ADMIN_PASSWORD === message) {
  alert("Добро пожаловать!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}
