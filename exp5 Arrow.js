function simpleInterest(){
    var p = parseInt(document.getElementById("Amount").value);
    var r = parseInt(document.getElementById("interest").value);
    var t = parseInt(document.getElementById("time").value);
    var fnc1 = () =>{       //using arrow function
        return si = (p*r*t)/100;
    }
    function func2(){       // using normal function
        return si = (p*r*t)/100;
    }
    var si = fnc1();
    var a = p + si;
    console.log(a, si);
    document.getElementById("num").innerHTML= "Amount : " + a ;
    document.getElementById("num1").innerHTML="Simple Interest: " + si;
}