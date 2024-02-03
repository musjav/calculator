var displayInput = document.getElementById("displayInput")
function getVal(val) {
    console.log(val);
    displayInput.value += val;
}
// //put this on each button[onclick="getval(buttons numbers/"symbol")"]except C and =
function calculate(){
var a=eval(displayInput.value);
// a=eval(a);
// console.log(a);
displayInput.value=a;
}
// //= onclick="calculate()"
function clearAll(){
    displayInput.value="";
}