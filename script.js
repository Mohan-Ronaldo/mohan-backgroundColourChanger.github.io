var css= document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body=document.getElementById("gradient");
// console.log(css);
// console.log(color1);
// console.log(color2);
function backGroundChanger(){
  body.style.background= " linear-gradient(to right ,"
  + color1.value
  +"," 
  +color2.value
  +")"
  css.textContent=body.style.background;
}
color1.addEventListener("input" ,backGroundChanger);
  // console.log("this is from 1");
  // console.log(color1.value);
 



color2.addEventListener("input",backGroundChanger);
  // console.log("this is from 2");
  // console.log(color2.value);
  

