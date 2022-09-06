// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

localStorage.setItem("myFavoriteSandwich", "turkey");
var existing = localStorage.getItem("myFavoriteSandwich");
var data = existing ? existing + " and tuna" : "tuna";
var data2 = existing ? "snikers " + " chips" : "beer";
localStorage.setItem("myFavoriteSandwich", data);
localStorage.setItem("myFavoriteSnacks", data2);

var myLunch = {
  sandwich: "turkey",
  chips: "bbq",
};
// Get the existing data
var existing2 = localStorage.getItem("myLunch");

// If no existing data, create an array
// Otherwise, convert the localStorage string to an array
existing2 = existing2 ? JSON.parse(existing2) : {};

// Add new data to localStorage Array
existing2["drink"] = "soda";

// Save back to localStorage
localStorage.setItem("myLunch", JSON.stringify(existing2));

var addToLocalStorageString = function (name, value, delimiter) {
  // Get the existing data
  var existing = localStorage.getItem(name);

  // If no existing data, use the value by itself
  // Otherwise, add the new value to it
  var data = existing ? existing + delimiter + value : value;

  // Save back to localStorage
  localStorage.setItem(name, data);
};

// Example
addToLocalStorageString("myFavoriteSandwich", "tuna", " and ");

//fetch API data from web
console.log(fetch("https://reqres.in/api/users"));
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((response) => {
    if (response.ok) {
      console.log("success!");
    } else {
      console.log("not success! something is wrong!");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));

// appi from txt doc
