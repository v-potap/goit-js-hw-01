let credits = 23580;
const pricePerDroid = 3000;

const qtyOfDroidsOrdered = prompt(
  "What quantity of droids you'd like to order ?"
);

if (qtyOfDroidsOrdered === null) {
    console.log('Отменено пользователем!');
} else {
  const totalPrice = qtyOfDroidsOrdered * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${qtyOfDroidsOrdered} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`
    );
  }
}
