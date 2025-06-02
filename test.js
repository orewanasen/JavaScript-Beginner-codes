const increase = document.getElementById("Increasebtn");
const reset = document.getElementById("Resetbtn");
const decrease = document.getElementById("Decreasebtn");
const number = document.getElementById("number")
let count = 0;
increase.onclick = function(){
    count++ ;
    number.textContent = count;
}
reset.onclick = function (){
    count = 0;
    number.textContent = count;
}
decrease.onclick = function (){
    count -- ; 
    number.textContent = count;
}