const ADMIN_PASSWORD = "jqueryismyjam";
let message;

message = prompt("Password :");

if (message === null) {
  message = "Отменено пользователем!";
} else if (ADMIN_PASSWORD === message) {
  messge = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);