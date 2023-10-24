const display = document.querySelector(".passDisplay");
const range = document.querySelector(".range");
const length = document.querySelector(".len");

const lowerCase = document.querySelector("#lowerCase");
const upperCase = document.querySelector("#upperCase");
const numbers = document.querySelector("#Number");
const symbols = document.querySelector("#symbols");

const sumbitBtn = document.querySelector(".submit");
length.innerText = range.value;

range.addEventListener("input", ()=>{
    length.innerText = range.value;

})
sumbitBtn.addEventListener("click",()=>{

    let uCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lCase = "abcdefghijklmnopqrstuvwxyz";
    let nums= "0123456789";
    let sym = "~!@#$%^&*_";

    let chars =""; 
    let genPass = "";
    chars +=lowerCase.checked?lCase:"";
    chars +=upperCase.checked?uCase:"";
    chars +=numbers.checked?nums:"";
    chars +=symbols.checked?sym:"";
   let i=0;

  length.value = range.value;
  console.log(range.value)
    while(i<range.value){
         genPass += chars.charAt(Math.floor(Math.random()*chars.length));

         i++;
    }
   
    display.value = genPass;


})