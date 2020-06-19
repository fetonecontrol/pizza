// Business Logic for Pizzas ---------
// function Pizza(size, top1, top2, top3, top4) {
//   this.size = size
//   this.top1 = top1,
//   this.top2 = top2,
//   this.top3 = top3;
//   this.top4 = top4;

// }
// Pizza.prototype.dressPizza = function(pizza){
//   let toppings = [pepperoni, mushroom, pineApple, squirellJerkyr];

// }

// let toppings = [1, 2, 3, 4];
// function priceCalculator(toppings) {
//   let totalPrice = size + toppings[0] + toppings[1] + toppings[2] + toppings [3];
//   console.log(totalPrice);
//   }

// User Interface Logic ---------

//Begin Display Contact

// Begin User Input
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    // allToppings = size;
    console.log(size);
    //let newPizza = new Pizza(size);
    // locations.addPlace(newPlaces);
    //pizzaOrder.addPizza(newPizza);
    //console.log(addressBook.contacts);
    //displayContactDetails(pizzaOrder); 
  })
})
