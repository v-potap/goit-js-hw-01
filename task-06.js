let total = 0;
let userInput = null;

while ((userInput = prompt("Enter any NUMBER:")) !== null) {
  if (isNaN(Number.parseInt(userInput))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += Number.parseInt(userInput);
  }
}

alert(`Общая сумма чисел равна ${total}`);
