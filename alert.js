const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;
//1.2
alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    ", and " +
    pepperoni +
    " pizzas."
);
//2.3
var orderName = prompt("Enter the name of the pizza you want to order today.");
var orderQuantity = prompt("How many of " + orderName + " do you want?");
//2.4
var orderTotal = orderQuantity * pizzaPrice;
alert(
  "Great, I'll get started on your " +
    orderName +
    " right away, it will cost " +
    orderTotal +
    " kr"
);
//3.

let cookingTime;
if (orderQuantity <= 2) {
  cookingTime = 10;
} else if (orderQuantity <= 5) {
  cookingTime = 15;
} else {
  cookingTime = 20;
}
var orderTotal = orderQuantity * pizzaPrice;
alert(
  "Great, I'll get started on your " +
    orderName +
    " right away, it will cost " +
    orderTotal +
    " kr. The pizzas will take " +
    cookingTime +
    " minutes."
);
