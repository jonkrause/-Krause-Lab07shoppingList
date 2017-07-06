var eggs = {
    name: "eggs",
    price: 3.00
}

var milk = {
    name: "milk",
    price: 2.50
}

var cheese = {
    name: "cheese",
    price: 2.25
}

var array01 = [];

array01.splice(0, 0, eggs, milk, cheese);
console.log(array01);



var subTotal = (eggs.price + milk.price + cheese.price);
var salesTax = .06;
var total = ((subTotal * salesTax) + subTotal);
console.log("Sub-Total: " + subTotal);
console.log("Sales Tax: " + (subTotal * salesTax).toFixed(2));
console.log("Total: " + total.toFixed(2));
