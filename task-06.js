let total = 0;
let input = null;

while ((input = prompt("Enter any NUMBER:")) !== null) {
  if (isNaN(Number.parseInt(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total += Number.parseInt(input);
  }
}

alert(`Общая сумма чисел равна ${total}`);
