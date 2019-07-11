const country = prompt("Which country deliver to ?");

let cost;

if (country === null) {
  console.log("Отменено пользователем!");
} else {
  switch (country.toUpperCase()) {
    case "КИТАЙ":
      cost = 100;
      break;
    case "ЧИЛИ":
      cost = 250;
      break;
    case "АВСТРАЛИЯ":
      cost = 170;
      break;
    case "ИНДИЯ":
      cost = 80;
      break;
    case "ЯМАЙКА":
      cost = 120;
      break;

    default:
      cost = -1;
      break;
  }

  if (cost === -1) {
    alert("В вашей стране доставка не доступна");
  } else {
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
  }
}
