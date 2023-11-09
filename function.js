function checkOrderName(orderName) {
  var availablePizzas = ["vegiterian", "hawaiian", "pepperioni"];
  if (availablePizzas.includes(orderName)) {
    return true;
  } else {
    return false;
  }
}
function totalCost(orderQuantity) {
  var pizzaPrice = 80;
  var orderTotal = orderQuantity * pizzaPrice;
  return orderTotal;
}
function cookingTime(orderQuantity) {
  var cookingTimePerPizza = 10;
  var totalCookingTime = orderQuantity * cookingTimePerPizza;
  return totalCookingTime;
}

function orderPizza(pizzaName) {
  var isOnMenu = checkOrderName(pizzaName);
  if (isOnMenu) {
    var orderQuantity = parseInt(
      prompt("How many " + pizzaName + " pizzas would you like to order?")
    );
    var total = totalCost(orderQuantity);
    var time = cookingTime(orderQuantity);
    console.log(
      "Your order will cost $" +
        total +
        " and will take " +
        time +
        " minutes to cook."
    );
  } else {
    console.log("Sorry, we don't have " + pizzaName + " on the menu.");
  }
}
