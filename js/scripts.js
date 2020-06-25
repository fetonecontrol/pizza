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

// Bussiness Logic for Pizzas

function Pizza(size, top1, top2, top3) {
  this.size = size;
  this.top1 = top1;
  this.top2 = top2;
  this.top3 = top3;
}

Pizza.prototype.pricer = function() {
  price = 0;

//Size conditions
    if (this.size.includes("14")) {
        price += 12;
    } else if (this.size.includes("18")){
        price += 15;
    } else if (this.size.includes("24")){
        price += 20;
    } 
//Top1 conditions
    if (this.top1.includes("Fresh")){
        price += 1;
    } else if (this.top1.includes("Cal")){
        price += 2;
    } else if (this.top1.includes("Pep")){
        price += 2;
    } else if (this.top1.includes("Squ")){
        price += 6;
    }
//Top2 conditions   
      if (this.top2.includes("Fresh")){
        price += 1;
    } else if (this.top2.includes("Cal")){
        price += 2;
    } else if (this.top2.includes("Pep")){
        price += 2;
    } else if (this.top2.includes("Squ")){
        price += 6;
    }
//Top3 conditions   
      if (this.top3.includes("Fresh")){
      price += 1;
    } else if (this.top3.includes("Cal")){
      price += 2;
    } else if (this.top3.includes("Pep")){
      price += 2;
    } else if (this.top3.includes("Squ")){
      price += 6;
    }
      return price;
    }

// Begin User Input
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    let pizzaOrder = new Order();
    const size = $("#size").val();
    const top1 = $("#top1Choice").val();
    const top2 = $("#top2Choice").val();
    const top3 = $("#top3Choice").val();
    let newPizza = new Pizza (size, top1, top2, top3);
    pizzaOrder.addPizza(newPizza);
    //$(".total").text(pricer(size, top1));
    let price = newPizza.pricer();
    $(".total").html("Your total is:" + " " + "$" + price);
    $(".pizzaSize").html(newPizza.size);
    $(".top1").html(newPizza.top1);
    $(".top2").html(newPizza.top2);
    $(".top3").html(newPizza.top3);
  })
})
