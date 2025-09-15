const countElement = document.getElementById("counter");
const plusbtn = document.getElementById("plusbtn");
const minusbtn = document.getElementById("minusbtn");

let counter = 0;

function updatebtn () {
    plusbtn.disabled = counter >= 10;
    minusbtn.disabled = counter <= 0;
}

plusbtn.addEventListener("click", ()=>{
    counter++;
    countElement.textContent = counter;
    updatebtn();
});
minusbtn.addEventListener("click", ()=>{
    counter--;
    countElement.textContent = counter;
    updatebtn();
});
updatebtn();