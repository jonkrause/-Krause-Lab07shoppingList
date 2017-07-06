function makeArray() {
    var array01 = [];
    var array02 = [];
    var inputLow = prompt("Enter a starting number");
    var inputHigh = prompt("Enter an ending number");
    inputLow = parseInt(inputLow);
    for (var i = inputLow; i <= inputHigh; i++) {
        array02.push(i);
    }
    console.log(array02);
}

makeArray();
