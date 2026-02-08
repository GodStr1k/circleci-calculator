function addNumbers(){
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

document.getElementById("result").innerText =
"Result: " + add(a,b);
}
function subtractNumbers(){
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

document.getElementById("result").innerText =
"Result: " + subtract(a,b);
}