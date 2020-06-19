// Business Logic for AddressBook ---------
function pizzaBook() {
  this.pizzas = [];
  this.currentId = 0
}

AddressBook.prototype.addPizza = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// AddressBook.prototype.findContact = function(id) {
//   for (let i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         return this.contacts[i];
//       }
//     }
//   };
//   return false;
// }

// AddressBook.prototype.deleteContact = function(id) {
//   for (let i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         delete this.contacts[i];
//         return true;
//       }
//     }
//   };
//   return false;
// }

// Business Logic for Contacts ---------
function Pizza(size, top1, top2, top3, top4, price) {
  this.top1 = top1,
  this.top2 = top2,
  this.top3 = top3;
  this.top4 = top4;
  this.price = price;
}
let toppings = [1, 2, 3, 4];
function priceCalculator(toppings) {
  let totalPrice = toppings[0] + toppings[1] + toppings[2] + toppings [3];
  console.log(totalPrice);
  }


// Bussiness Logic for Places ---------
function Place() {
  this.places = [];
  this.currentId = 0
}
Place.prototype.addPlace = function(location) {
  location.id = this.assignId2();
  this.places.push(location);
}

Place.prototype.assignId2 = function() {
  this.currentId += 1;
  return this.currentId;


}// Bussiness Logic for Locations ---------
function Locations(location1, location2) {
  this.location1 = location1;
  this.location2 = location2;
}


// User Interface Logic ---------

let addressBook = new AddressBook();
let locationBook = new Place();

//Begin Display Contact

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
  
}
// End Display Contact
function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  // const places = locations.findPlace(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email").html(contact.email);
  $(".location1").html(contact.location1);
  $(".location2").html(contact.location2);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};
// Begin User Input
$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedEmail = $("input#new-email").val();
    const location1 = $("input#new-location1").val();
    const location2 = $("input#new-location2").val();
    
    let newPlaces = new Address(location1, location2);
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, newPlaces);
    // locations.addPlace(newPlaces);
    addressBook.addContact(newContact);
    //console.log(addressBook.contacts);
    displayContactDetails(addressBook); 
  })
})
