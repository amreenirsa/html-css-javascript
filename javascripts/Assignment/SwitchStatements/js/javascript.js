// JavaScript Document




<!-- =====1st alert ===== -->
$(document).ready(function(){
$(".flip1").click(function(){
$(".panel1").slideToggle("slow");
});
});

function f1() {

var age = document.getElementById("input1").value;

switch (true) {
    case (age < 18):
        var b = "Too young";
        break;
    case (age >= 18):
        var b = "Old enough";
        break;
}
 document.getElementById('f1').innerHTML = b;
}
<!-- =====2nd alert ===== -->


$(document).ready(function(){
$(".flip2").click(function(){
$(".panel2").slideToggle("slow");
});
});

function f2() {

var num = document.getElementById("input2").value;

switch (true) {
    case (num%3 == 0):
       var b =( num + " Number is divisible by 3");
        break;
   default :
       var b =( num + " Number is not divisible by 3");
        break;
}
 document.getElementById('f2').innerHTML = b;
}


<!-- =====3 alert ===== -->


$(document).ready(function(){
$(".flip3").click(function(){
$(".panel3").slideToggle("slow");
});
});

function f3() {

var num = Number(document.getElementById("input3").value);
var num1 = Number(document.getElementById("input4").value);
var ope = document.getElementById("input5").value;

switch (ope) {
    case (ope ="+"):
        var b = num + num1;
        break;
		
	case (ope ="-"):
        var b =num - num1;
        break;	
		
	case (ope ="*"):
        var b = num * num1;
        break;		
		
	case (ope ="/"):
        var b =num / num1;
        break;	
		
		
		case (ope ="%"):
        var b = num % num1;
        break;	
		
		
		
}
document.getElementById('f3').innerHTML = b;
}



<!-- =====4th alert ===== -->


$(document).ready(function(){
$(".flip4").click(function(){
$(".panel4").slideToggle("slow");
}); f4() 
});

function f4() {
var a = new Date();
var day = a.getDay()
switch(day){
	case (day = 0):
	var b ="Sunday";
	break;
	
	case (day = 1) :
	var b = "Monday" ;
	break;
	
	case (day = 2):
	var b = "Tuesday" ;
	break;
	
	case (day = 3):
	var b = "Wednesday" ;
	break;
	
	
	case (day = 4):
	var b ="Thursday" ;
	break;
	
	
	case (day = 5):
	var b = "Friday" ;
	break;
	
	case (day = 6):
	var b = "Saturday" ;
	break;
	
	
	
	
	}
	

document.getElementById('f4').innerHTML = b;
}


<!-- =====5th alert ===== -->


$(document).ready(function(){
$(".flip5").click(function(){
$(".panel5").slideToggle("slow");
});f5() 
});

function f5() {
var a = new Date();
var day = a.getDay()
switch(day){
	case (day = 0):
	case (day = 6):
	var b = "Its week Day";
	break;

    default :
	var b = "Its Working Day" ;
	break;
	
	
	
	
	
	
	
	
	
	}
	
document.getElementById('f5').innerHTML = b;
}



<!-- =====6th alert ===== -->


$(document).ready(function(){
$(".flip6").click(function(){
$(".panel6").slideToggle("slow");
});
});

function f6() {
	
	
function checkCar() {  

   var text;
  var favCar = document.getElementById("input6").value;
   var favCar =  favCar.toLowerCase() 
  switch(favCar) {        
   //Add code here 
   case (favCar = "bmw") :
    text = "German car" ;
	break; 
   
     
	
	case (favCar = "ford"):
     text = "American car";
	break;  
   
      
	
	case (favCar ="peugeot"):
      text = "French car" ;
	break; 
	 
	 default :
	 text = "Unknown car name" ;
	break; }
   
        
	
	document.getElementById('f6').innerHTML = text; }
	
  checkCar(); 
	
	
	
	
	
	
	
	
	
	}
	



<!-- =====7th alert ===== -->


$(document).ready(function(){
$(".flip7").click(function(){
$(".panel7").slideToggle("slow");
});
});

function f7() {
	
	
function checkFruit() {   
  var text;
  var fruits = document.getElementById("input7").value;
   var fruits =  fruits.toLowerCase()
  
  
  switch(fruits) {
   
   
   case "banana" :
   text = "Banana is good!" ; 
   break ;
   
  case "orange" :
  text = "I am not a fan of orange."; 
  break;
 
 case "apple"  :
 text = "How you like them apples?";  
 break;	
 
 
 default  :
 text = "I have never heard of that fruit.";     } 
			 
			 
document.getElementById('f7').innerHTML = text;} 

checkFruit(); 
	
	
	
	
	
	
	
	
	}

<!-- =====8th alert ===== -->


$(document).ready(function(){
$(".flip8").click(function(){
$(".panel8").slideToggle("slow");
});
});

function f8() {
	
	
function grade (){
var a = document.getElementById("input8").value; 
var a = a.toLowerCase();



switch(a){
	
	case ("a+") :
	var b = ">= 70 and <80 " ;
	break ;
	
	
	case ("a") :
	var b = ">= 70 and <80 " ;
	break ;
	
	
	
	
	case ("b") :
	var b = ">= 60 and <70 " ;
	break ;
	
	case ("c") :
	var b =">= 50 and <60 " ;
	break ;
	
	
	
	
	
	
	default :
	var b = "Fail";
	break;
	
	
	}	
	document.getElementById('f8').innerHTML = b ;} 
	
grade() 
	
	
	
	
	
	
	
	
	}






<!-- =====8th alert ===== -->


$(document).ready(function(){
$(".flip9").click(function(){
$(".panel9").slideToggle("slow");
});
});

function f9() {
	
var a =Number( document.getElementById("input9").value) ;

switch (a){
	case (1) :
	var b = "january";
	break;
	
	
	case (2) :
	var b = "February";
	break;
	
	case (3) :
	var b = "March";
	break;
	
	case (4) :
	var b = "April";
	break;
	
	case (5) :
	var b = "May";
	break;
	
	case (6) :
	var b = "June";
	break;
	
	case (7) :
	var b = "July";
	break;
	
	case (8) :
	var b = "August";
	break;
	
	case (9) :
	var b = "September";
	break;
	
	case (10) :
	var b = "October";
	break;
	
	case (11) :
	var b = "November";
	break;
	
	case (12) :
	var b = "December";
	break;
	
	
	} 

	document.getElementById('f9').innerHTML = b ;} 
	

	
	
<!-- =====10 alert ===== -->
$(document).ready(function(){
$(".flip10").click(function(){
$(".panel10").slideToggle("slow");
});
});

function f10() {

var age = document.getElementById("input10").value;

switch (true) {
    case (age < 18):
        var b = "Too young";
        break;
    case (age >= 18):
        var b = "Old enough";
        break;
}
 document.getElementById('f10').innerHTML = b;
}	
	
	
<!-- =====11 alert ===== -->
$(document).ready(function(){
$(".flip11").click(function(){
$(".panel11").slideToggle("slow");
});f11()
});


function f11(){
	
	var i = 1; 
var b = "";
 while (i <= 5){ 
    b += "Hello World" + "<br>"; 
   i++;  
}
document.getElementById('f11').innerHTML = b;
 
}
	
<!-- =====11.D alert ===== -->
$(document).ready(function(){
$(".flip11d").click(function(){
$(".panel11d").slideToggle("slow");
});f11d()
});


function f11d(){
	
	var i = 1; 
var b = "";
 do{ 
    b += "Hello World" + "<br>"; 
   i++;  
}while (i <= 5)
document.getElementById('f11d').innerHTML = b;
  
}
		
	
	
	
<!-- =====12 alert ===== -->
$(document).ready(function(){
$(".flip12").click(function(){
$(".panel12").slideToggle("slow");
});f12()
});


function f12(){
	
	var i = 1; 
var b = "";
  
   while ( i <=10){
	   
 b += i + "<br>"; 
	 i++;
	 
	  }
document.getElementById('f12').innerHTML = b;
 
}	
	
	
	
	
<!-- =====12w alert ===== -->
$(document).ready(function(){
$(".flip12d").click(function(){
$(".panel12d").slideToggle("slow");
});f12d()
});


function f12d(){
	
	var i = 1; 
var b = "";
  
   do{
	   
 b += i + "<br>"; 
	 i++;
	 
	  }while ( i <=10)
document.getElementById('f12d').innerHTML = b;
 
}		
	
	
	
	
	
	
<!-- =====13 alert ===== -->
$(document).ready(function(){
$(".flip13").click(function(){
$(".panel13").slideToggle("slow");
});
});


function f13(){
	
	var i = 1; 

  
   var a = Number(document.getElementById("input11").value);
 var b = Number(document.getElementById("input12").value);
 var c = "";
 var i = 1;
var z =  "<h5>" + "Multiplication Table Of " + a + "</h5>" + "<h6>" + "Length " + b + "</h6>" ;
 while( i <= b){
	 
	  c += a + " * " + i + " = " + i *a+ "<br>";
	
	i++;
	 
	  }

document.getElementById('f13').innerHTML = z + c;
 
}		
	
	
	
<!-- =====13d alert ===== -->
$(document).ready(function(){
$(".flip13d").click(function(){
$(".panel13d").slideToggle("slow");
});
});


function f13d(){
	
	var i = 1; 

  
   var a = Number(document.getElementById("input13").value);
 var b = Number(document.getElementById("input14").value);
 var c = "";
 var i = 1;
var z =  "<h5>" + "Multiplication Table Of " + a + "</h5>" + "<h6>" + "Length " + b + "</h6>" ;
 do{
	 
	  c += a + " * " + i + " = " + i *a+ "<br>";
	
	i++;
	 
	  }while( i <= b)

document.getElementById('f13d').innerHTML = z + c;
 
}		


<!-- =====14 alert ===== -->
$(document).ready(function(){
$(".flip14").click(function(){
$(".panel14").slideToggle("slow");
});f14()
});


function f14(){
	
	var i = 1; 
var b = "";
  
   

var a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"] 
var i = 0;
while (i < a.length){
	
	b += a[i] +"<br>";
	i++;
	};

document.getElementById('f14').innerHTML = b;
 
}		
<!-- =====14d alert ===== -->
$(document).ready(function(){
$(".flip14d").click(function(){
$(".panel14d").slideToggle("slow");
});f14d()
});


function f14d(){
	
	var i = 1; 
var b = "";
  
   

var a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"] 
var i = 0;
do{
	
	b += a[i] +"<br>";
	i++;
	}while (i < a.length);

document.getElementById('f14d').innerHTML = b;
 
}	


<!-- =====15 alert ===== -->
$(document).ready(function(){
$(".flip15").click(function(){
$(".panel15").slideToggle("slow");
});f15()
});


function f15(){
	
	var i = 1; 
var x = "";
var y = "";
  
var a = ["apple", "banana", "mango", "orange", "strawberry"] ; 
while (i < a.length){
	 x += a[i] + "<br>" ;
	
	
	
	i++;
	
	}
	
var j = 0;	
 while (j < a.length){
	
	 y += "Element at index " + j + " is " + a[j] +"<br>" ;
    
	
	j++;}
document.getElementById('f15').innerHTML = x  + y;
 
}		




<!-- =====15 alert ===== -->
$(document).ready(function(){
$(".flip15d").click(function(){
$(".panel15d").slideToggle("slow");
});f15d()
});


function f15d(){
	
	var i = 1; 
var x = "";
var y = "";
  
var a = ["apple", "banana", "mango", "orange", "strawberry"] ; 
do{
	 x += a[i] + "<br>" ;
	
	
	
	i++;
	
	}while (i < a.length)
	
var j = 0;	
do{
	
	 y += "Element at index " + j + " is " + a[j] +"<br>" ;
    
	
	j++;} while (j < a.length)
document.getElementById('f15d').innerHTML = x  + y;
 
}	







<!-- =====16 alert ===== -->
$(document).ready(function(){
$(".flip16").click(function(){
$(".panel16").slideToggle("slow");
});
});


function f16(){
	
	var i = 1; 
var n = Number(document.getElementById("input17").value);	
 var a = [];


var t = "<h5>" + "Number Of Item " + n + "</h5>"  + "Item" + "<br>";
var i = 0;
var x = "";
while(i < n){
	  
	 
	 a.push(prompt("Please enter the item name.")); 
	 
	 x += a[i] + "<br>" ;
	 
	i++;}
document.getElementById('f16').innerHTML = t + x ;
 
}	



<!-- =====16d alert ===== -->
$(document).ready(function(){
$(".flip16d").click(function(){
$(".panel16d").slideToggle("slow");
});
});


function f16d(){
	
	var i = 1; 
var n = Number(document.getElementById("input18").value);	
 var a = [];


var t = "<h5>" + "Number Of Item " + n + "</h5>"  + "Item" + "<br>";
var i = 0;
var x = "";
while(i < n){
	  
	 
	 a.push(prompt("Please enter the item name.")); 
	 
	 x += a[i] + "<br>" ;
	 
	i++;}
document.getElementById('f16d').innerHTML = t + x ;
 
}	




<!-- =====17 alert ===== -->
$(document).ready(function(){
$(".flip17").click(function(){
$(".panel17").slideToggle("slow");
});f17();f18();f19();f20();f21();
});


function f17(){
	
	
var i = 1;
var x = "";
while(i <=15){
	x += i  + ",";
	i++;}
document.getElementById('f17').innerHTML = x ;
 
}	

function f18(){
	
	
var i = 10;
var x = "";
while(i >= 1){
	x += i  + ",";
	i--;}
document.getElementById('f18').innerHTML = x ;
 
}	


function f19(){
	
	
var i = 0;
var x = "";
while(i <=20){
	x += i  + ",";
	i+=2;}
document.getElementById('f19').innerHTML = x ;
 
}	



function f20(){
	
	
var i = 1;
var x = "";
while(i <=20){
	x += i  + ",";
	i+=2;}
document.getElementById('f20').innerHTML = x ;
 
}	




function f21(){
	
	
var i = 0;
var x = "";
while(i <=20){
	x +=  i + "k"  + ",";
	i+=2;}
document.getElementById('f21').innerHTML = x ;
 
}	


<!-- =====17d alert ===== -->
$(document).ready(function(){
$(".flip17d").click(function(){
$(".panel17d").slideToggle("slow");
});f17d();f18d();f19d();f20d();f21d();
});


function f17d(){
	
	
var i = 1;
var x = "";
do{
	x += i  + ",";
	i++;}while(i <=15)
document.getElementById('f17d').innerHTML = x ;
 
}	

function f18d(){
	
	
var i = 10;
var x = "";
do{
	x += i  + ",";
	i--;}while(i >= 1)
document.getElementById('f18d').innerHTML = x ;
 
}	


function f19d(){
	
	
var i = 0;
var x = "";
do{
	x += i  + ",";
	i+=2;}while(i <=20)
document.getElementById('f19d').innerHTML = x ;
 
}	



function f20d(){
	

var i = 1;
var x = "";
do{
	x += i  + ",";
	i+=2;}while(i <=20)
document.getElementById('f20d').innerHTML = x ;}



function f21d(){
	
	
var i = 0;
var x = "";
do{
	x +=  i + "k"  + ",";
	i+=2;}while(i <=20)
document.getElementById('f21d').innerHTML = x ;
 
}	




<!-- =====18 alert ===== -->
$(document).ready(function(){
$(".flip18").click(function(){
$(".panel18").slideToggle("slow");
});
});


function f22(){
	
	
 var bak = ["cake", "apple pie", "cookie", "chips", "patties"];
    var a = document.getElementById("input19").value;
	 var i =0;
	 var z = "";
	 var flag = true;
while( i <= bak.length){
	
	if(bak[i] === a){	
  z += "item is available at index " + i;

flag = false ;
break;
	}
	
	i++;
	}
if(flag === true){
	  z += "we are sorry item is not available" ;

	
	}
document.getElementById('f22').innerHTML = z ;
 
}	







<!-- =====18dd alert ===== -->
$(document).ready(function(){
$(".flip18d").click(function(){
$(".panel18d").slideToggle("slow");
});
});


function f22d(){
	
	
 var bak = ["cake", "apple pie", "cookie", "chips", "patties"];
    var a = document.getElementById("input20").value;
	 var i =0;
	 var z = "";
	 var flag = true;
do{
	
	if(bak[i] === a){	
  z += "item is available at index " + i;

flag = false ;
break;
	}
	
	i++;
	}while( i <= bak.length)
if(flag === true){
	  z += "we are sorry item is not available" ;

	
	}
document.getElementById('f22d').innerHTML = z ;
 
}	











<!-- =====19 alert ===== -->
$(document).ready(function(){
$(".flip19").click(function(){
$(".panel19").slideToggle("slow");
});f23()
});


function f23(){
	
	var stu = ["Ali", "Sami", "Taha", "Inam"]; 
var scores  = [58, 73, 89, 90];

var b = 0;
var a = "";
while( b < 4){
	
	a += "<table><tr><td> "+stu[b]+" </td><td> "+scores[b]+" </td></tr></table>";
	
b++;


	}
document.getElementById('f23').innerHTML = a ;
 
}	



<!-- =====19 alert ===== -->
$(document).ready(function(){
$(".flip19d").click(function(){
$(".panel19d").slideToggle("slow");
}); f23d()
});


function f23d(){
	
	var stu = ["Ali", "Sami", "Taha", "Inam"]; 
var scores  = [58, 73, 89, 90];

var b = 0;
var a = "";
do{
	
	a += "<table><tr><td> "+stu[b]+" </td><td> "+scores[b]+" </td></tr></table>";
	
b++;


	}while( b < 4)
document.getElementById('f23d').innerHTML = a ;
 
}	




<!-- =====20 alert ===== -->
$(document).ready(function(){
$(".flip20").click(function(){
$(".panel20").slideToggle("slow");
});
});


function f24(){
	
	var scores  = [12, 45, 3, 22, 34, 50]; 

var stop = document.getElementById("input21").value;
	 
stop = parseInt(stop);


var i =0;
	 var z = "";
      
while( i < stop) { 


sco = scores[i]+"<br/>";
z += sco ;


if(stop === scores[i]){
	
break;
}

i++


	}
document.getElementById('f24').innerHTML = z ;
 
}	


<!-- =====20d alert ===== -->
$(document).ready(function(){
$(".flip20d").click(function(){
$(".panel20d").slideToggle("slow");
});
});


function f24d(){
	
	var scores  = [12, 45, 3, 22, 34, 50]; 

var stop = document.getElementById("input22").value;
	 
stop = parseInt(stop);


var i =0;
	 var z = "";
      
do { 


sco = scores[i]+"<br/>";
z += sco ;


if(stop === scores[i]){
	
break;
}

i++


	}while( i < stop)
document.getElementById('f24d').innerHTML = z ;
 
}	


<!-- =====21 alert ===== -->
$(document).ready(function(){
$(".flip21").click(function(){
$(".panel21").slideToggle("slow");
});f25()
});


function f25(){
	
	var nl = [ [1,2,3] , [4,5,6] , [7,8,9] ] ;

var m = 0;
var n = 0;
var c = "";

while (m < nl.length) {
  while (n <  nl.length) {
     c += nl[n]+ "<br/>";
	
    n++;
  }
 
  m++;
}
document.getElementById('f25').innerHTML = c ;
 
}	













<!-- =====21 alert ===== -->
$(document).ready(function(){
$(".flip21d").click(function(){
$(".panel21d").slideToggle("slow");
});f25d()
});


function f25d(){
	
	var nl = [ [1,2,3] , [4,5,6] , [7,8,9] ] ;

var m = 0;
var n = 0;
var c = "";

 do{
 do{
     c += nl[n]+ "<br/>";
	
    n++;
  } while (n < 2) 
 
  m++;
}while (m < 2)
document.getElementById('f25d').innerHTML = c ;
 
}	




<!-- =====22 alert ===== -->
$(document).ready(function(){
$(".flip22").click(function(){
$(".panel22").slideToggle("slow");
});
});


function f26(){
	

	 var z = "";
      

var a = document.getElementById("input23").value;

      
while(a >=0) { 


point =  a + " , " ;
z += point ;

a-=0.5;

 }
document.getElementById('f26').innerHTML = z ;
 
}	









<!-- =====22 alert ===== -->
$(document).ready(function(){
$(".flip22d").click(function(){
$(".panel22d").slideToggle("slow");
});
});


function f26d(){
	

	 var z = "";
      

var a = document.getElementById("input24").value;

      
do { 


point =  a + " , " ;
z += point ;

a-=0.5;

 }while(a >=0)
document.getElementById('f26d').innerHTML = z ;
 
}	









<!-- =====23 alert ===== -->
$(document).ready(function(){
$(".flip23").click(function(){
$(".panel23").slideToggle("slow");
});f27()
});


function f27(){
	

	 var z = "";
      

var i = 0;
while(i <= 20 ){
	
	if(i%2==0){
j =  " is even"  ;
    }
else{
	j = " is odd " ;


    }
  z +=  i + j + "<br>";
	
	i++;
}
document.getElementById('f27').innerHTML = z ;
 
}	







<!-- =====23d alert ===== -->
$(document).ready(function(){
$(".flip23d").click(function(){
$(".panel23d").slideToggle("slow");
});f27d()
});


function f27d(){
	

	 var z = "";
      

var i = 0;
do {
	
	if(i%2==0){
j =  " is even"  ;
    }
else{
	j = " is odd " ;


    }
  z +=  i + j + "<br>";
	
	i++;
}while(i <= 20 )
document.getElementById('f27d').innerHTML = z ;
 
}	




<!-- =====24 alert ===== -->
$(document).ready(function(){
$(".flip24").click(function(){
$(".panel24").slideToggle("slow");
});f28()
});


function f28(){
	

	 var z = "";
      

var total = 1;
var i = 1;
while(i <= 7){
	
 total = total * i ;

	
i+=2;	}
	
document.getElementById('f28').innerHTML = total;
 
}	



<!-- =====24 alert ===== -->
$(document).ready(function(){
$(".flip24d").click(function(){
$(".panel24d").slideToggle("slow");
});f28d()
});


function f28d(){
	

	 var z = "";
      

var total = 1;
var i = 1;
while(i <= 7){
	
 total = total * i ;

	
i+=2;	}
	
document.getElementById('f28d').innerHTML = total;
 
}	







<!-- =====25 alert ===== -->
$(document).ready(function(){
$(".flip25").click(function(){
$(".panel25").slideToggle("slow");
});f29()
});


function f29(){
	var  x ="";
var i =0;
while(i<5) {var j = 5;
while(j>i){
	x += "*" ;
j--;}

x += "<br>" ;

i++;
}

	
document.getElementById('f29').innerHTML = x;
 
}	

<!-- =====25 alert ===== -->
$(document).ready(function(){
$(".flip25d").click(function(){
$(".panel25d").slideToggle("slow");
});f29d()
});


function f29d(){
	var  x ="";
var i =0;
do {var j = 5;
do{
	x += "*" ;

j--;}while(j>i);

x += "<br>" ;

i++;
}while(i<5)

	
document.getElementById('f29d').innerHTML = x;
 
}





<!-- =====26 alert ===== -->
$(document).ready(function(){
$(".flip26").click(function(){
$(".panel26").slideToggle("slow");
});f30();f31();f32()
});

function f30(){
	var  x ="";
var i =0;
while(i<5) {
	x += "*****" +"<br>" ;


i++;
}

	
document.getElementById('f30').innerHTML = x;
 
}	











function f31(){
	var x = 1;
var y = 1;
var chr = "";
var z ="";
while( x<= 6){
	
	while( y< x){
	
	
    chr +=("*");
	y++;        
      }
  z += chr + "</br>";
  x++
	
	}	document.getElementById('f31').innerHTML = z;
 
}	










function f32(){
	var  x ="";
var i =0;
while(i<5) {var j = 5;
while(j>i){
	x += "*" ;
j--;}

x += "<br>" ;

i++;
}

	
document.getElementById('f32').innerHTML = x;
 
}	










<!-- =====26d alert ===== -->
$(document).ready(function(){
$(".flip26d").click(function(){
$(".panel26d").slideToggle("slow");
});f30d();f31d();f32d()
});

function f30d(){
	var  x ="";
var i =0;
do{
	x += "*****" +"<br>" ;


i++;
}while(i<5) 
	
document.getElementById('f30d').innerHTML = x;
 
}	











function f31d(){
	var x = 1;
var y = 1;
var chr = "";
var z ="";
do{
	
	do{
	
	
    chr +=("*");
	y++;        
      }while( y< x) ;
	    z += chr + "</br>";
  x++
	
	}	while( x<= 6);
	
	
	document.getElementById('f31d').innerHTML = z;
 
}	










function f32d(){
		var  x ="";
var i =0;
do {var j = 5;
do{
	x += "*" ;

j--;}while(j>i);

x += "<br>" ;

i++;
}while(i<5)

	
document.getElementById('f32d').innerHTML = x;
 
}	
