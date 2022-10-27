function set_background() {
  docBody = document.getElementsByTagName("body")[0];
   
   myBodyElements = docBody.getElementsByTagName("p");
 
   myp1 = myBodyElements[0];
   myp1.style.background = "rgb(255,0,0)";
 
   myp2 = myBodyElements[1];
   myp2.style.background = "rgb(255,255,0)";
}
let check = () => {
  let color = document.getElementById('color').value;
  document.body.style.background = color;
  document.getElementById('boldbtn').style.background = color;    
}
setInterval(check,50);

