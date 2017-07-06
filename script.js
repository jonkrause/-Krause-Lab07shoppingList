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
// console.log(array01);



var subTotal;

function runTotal() {
    subTotal = 0;
    array01.forEach(function (food) {
        subTotal += food.price;
        // console.log(food.price);

    })
}

runTotal();


var salesTax = .06;
var total = ((subTotal * salesTax) + subTotal);
console.log("Sub-Total: " + subTotal);
console.log("Sales Tax: " + (subTotal * salesTax).toFixed(2));
console.log("Total: " + total.toFixed(2));




// add to list with prompt
var newItem = prompt("new item");
var newPrice = prompt("new price");
newPrice = parseInt(newPrice);


// if user entered price that is not a number

// if(typeof newPrice == 'number'){
// } else {
//     alert("Please enter a valid price");

// array01.push({
//     name: newItem,
//     price: newPrice
// });
// console.log(array01);
// };

// update total
runTotal();
console.log("Updated Total: " + (total + newPrice).toFixed(2));
