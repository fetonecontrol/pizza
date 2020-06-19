// Business Logic for Pizza Order ---------
function Order() {
  this.pizzaOrder = [];
  this.currentId = 0
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzaOrder.push(pizza);
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.findPizza = function(id) {
  for (let i=0; i< this.pizzaOrder.length; i++) {
    if (this.pizzaOrder[i]) {
      if (this.pizzaOrder[i].id == id) {
        return this.pizzaOrder[i];
      }
    }
  };
  return false;
}
// Bussiness Logci for Pizzas


function Pizza(size, top1,) {
  this.size = size;
  this.top1 = top1;
}
function pricer(selection){
  if (selection.includes("14inches")){
    console.log("working");
  }
}
let pizzaOrder = new Order();
// pizza cost

// Display Selection
function displayOrder(pizzaId){
  const pizza = pizzaOrder.findPizza(pizzaId);
  $(".pizzaSize").html(pizza.size);
  $(".pizzaTop1").html(pizza.top1);
}
// Begin User Input
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    const top1 = $("#top1Choice").val();
    let newPizza = new Pizza (size, top1);
    pizzaOrder.addPizza(newPizza);
    displayOrder(pizzaOrder);
    $(".pizzaSize").text(newPizza.size);
    $(".top1").text(newPizza.top1);
    console.log(newPizza);
  })
})
