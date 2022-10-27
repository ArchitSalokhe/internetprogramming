var simple_interest = ()=>
{
var p,t,r,si;
p = document.getElementById ("Amount").value;
t = document.getElementById ("time").value;
r = document.getElementById ("interest").value;

si = parseInt((p*t*r)/100 );
var a = (+p + +si);
console.log(a, si)
document.getElementById ('num').innerHTML ="Simple interest : "+si;
document.getElementById ('num1').innerHTML ="Total Amount:" +a;
}
