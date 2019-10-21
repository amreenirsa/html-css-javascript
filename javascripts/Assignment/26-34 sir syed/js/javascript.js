// JavaScript Document



<!-- Example script -->
					
			$(document).ready( function() {
				
				
			
<!-- =====1st alert ===== -->	
				
$(".prompt1").click( function() {
	
jPrompt("Please enter positive integer.","","Positive Integer", function(num) {
	
	
	if( num) {

	a = Number(num);
	b = Math.round(num);
	c =Math.floor(num);
	d =Math.ceil(num);
	

jAlert( "<b>Number : </b>" + a+"\n"+
        "<b>Round Off Value : </b>" +b +"\n"+
		"<b>Floor Value : </b>" +c +"\n"+
		"<b>Ceil Value : </b>" + d+"\n"  ,"Positive Integer");
	
	
	
	
	  
                    
							
					
	};
					
					});
						});	
					


						
	
<!-- =====2nd alert ===== -->

$(".prompt2").click( function() {
	
  jPrompt("Please enter negative integer.","","Negative Positive Integer", function(num) {
	
	
	if( num) {

	a = Number(num);
	b = Math.round(num);
	c =Math.floor(num);
	d =Math.ceil(num);
	

jAlert( "<b>Number : </b>" + a+"\n"+
        "<b>Round Off Value : </b>" +b +"\n"+
		"<b>Floor Value : </b>" +c +"\n"+
		"<b>Ceil Value : </b>" + d+"\n"  ,"Negative Positive Integer");
							
						};
						
				 });
						});		
						
	
					
						
		
<!-- =====3rd alert ===== -->	
				
$(".prompt3").click( function() {
	
jPrompt("Please enter positive floating point.","","positive floating point", function(num) {
	
	
	if( num) {

	a = Number(num);
	b = Math.round(num);
	c =Math.floor(num);
	d =Math.ceil(num);
	

jAlert( "<b>Number : </b>" + a+"\n"+
        "<b>Round Off Value : </b>" +b +"\n"+
		"<b>Floor Value : </b>" +c +"\n"+
		"<b>Ceil Value : </b>" + d+"\n"  ,"positive floating point");
	
	
	
	
	  
                    
							
					
	};
					
					});
						});	
					


						
	
<!-- =====4th alert ===== -->

$(".prompt4").click( function() {
	
  jPrompt("Please enter negative floating point.","","negative floating point", function(num) {
	
	
	if( num) {

	a = Number(num);
	b = Math.round(num);
	c =Math.floor(num);
	d =Math.ceil(num);
	

jAlert( "<b>Number : </b>" + a+"\n"+
        "<b>Round Off Value : </b>" +b +"\n"+
		"<b>Floor Value : </b>" +c +"\n"+
		"<b>Ceil Value : </b>" + d+"\n"  ,"Negative Floating Point");
							
						};
						
				 });
						});		

		
		
											
	<!-- =====5th alert ===== -->

$(".prompt5").click( function() {
					
	jPrompt("Please enter any number.","","Absolute value", function(num) {
	
	
	if( num) {

	var abs=Math.abs(num);
	

jAlert( "The Absolute value of " + num +" is "+abs ,"Absolute value");
							
						};
						
				 });
						});												
													
<!-- =====6th alert ===== -->

$(".prompt6").click( function() {
					
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 6)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);

					jAlert("<b>Random Dice Value :</b>  " + numberOfStars, "Random Dice Value");
				});			
						
						
						
	<!-- =====7 alert ===== -->	
				
$(".prompt7").click( function() {
					
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 2)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);
if(numberOfStars === 1){
		a =  "Head" ;
		b = 2 + "\n";
		}
else if(numberOfStars === 2){
		a =  "Tail" ;
		b = 1 + "\n";
		}

					jAlert( b + "<b>Random coin Value :</b>  " + a, "Random coin Value");
				});						
						
						
						
						
						
						
						
						
	<!-- =====8 alert ===== -->	
$(".prompt8").click( function() {
	
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 100)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);

	jAlert("<b>Random Number Between 1 and 100 is : </b>  " + numberOfStars, "Random Number Between 1 and 100");
				
	
	
	  
                    
							
					
					
					
					
						});										
						
	<!-- =====9 alert ===== -->						
$(".prompt9").click( function() {
jPrompt("Please enter your weight.","","Your Weight", function(num) {
if( num) {
        var parse=num.toString();
        jAlert("The weight of user is "+   "<b>" + parse +  "</b>"  ,"Your Weight");
							
						};
						
				 
						});		
						


					
				});		
						
						
						
						
						
<!-- =====10 alert ===== -->	
				
$(".prompt10").click( function() {
jPrompt("Please enter a number between 1 and 10.","","Secret Number", function(num) {
if( num) {

    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 10)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);
	
	if(num === numberOfStars){
		
	a ="congratulate" + "\n" + +  "<b>" + numberOfStars +  "<b>"  + "is the Secret Number";}
	
	else{
	a = "Try Again !!" + "\n"+ "The Secret Number is "+  "<b>" + numberOfStars +  "</b>" ;}

	jAlert(  a, "Secret Number");
					
					
					};	
					
				});														
						
					});														
						
						
						
<!-- =====11 alert ===== -->	



$(".prompt11").click( function() {
	
var a = new Date();

jAlert("<b>Current date:</b>  " + a, "Current date");

					
						});							
						
						
						
<!-- =====12 alert ===== -->	
$(".prompt12").click( function() {
 var monthsName = ["January","Febuary","March","April","May","June","July","August","September","October","November","Decmber"];

    var rightNow = new Date();
	var month = rightNow.getMonth();
	var monthName = monthsName[month];
 

jAlert("<b>Current Month : </b>  " + monthName, "Current Month");

					
						});	
	
<!-- =====13 alert ===== -->	


$(".prompt13").click( function() {
 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
 

jAlert("<b>Current Day : </b>  " + nameOfToday, "Current Day");

					
						});	
						
						
<!-- =====14 alert ===== -->	
$(".prompt14").click( function() {
 
 var now = new Date();
 var theDay = now.getDay();
 if(theDay == 5 || theDay == 6){
	 
	 a = "<b>It’s Fun day</b>";
	 }
	 
else{ a = "<b>It’s not a Fun day</b>";}	 
	 
 

jAlert(a, "Day");

					
						});						
						
						
						
<!-- =====15 alert ===== -->	
$(".prompt15").click( function() {
 
 var now = new Date();
 var date = now.getDate();
 if(date <= 15){
	 
	 a = "<b>First fifteen days of the month.</b>";
	 }
	 
else
{ a = "<b>Last days of the month.</b>";}	 
	 
 

jAlert( a, "Days Of Month");

					
						});							
						
<!-- =====16 alert ===== -->	
$(".prompt16").click( function() {
 
  var a = new Date();
  var b = a.getTime();
  var c = b / (1000*60);
  c=Math.floor(c)

jAlert( "<b>" + "Current Date : " + "</b>"+ a + "\n" +
        "<b>" +"Elapsed Milisecond since 1 jan,1970 : " + "</b>" + b + "\n" +
		"<b>" +"Elapsed Minutes since 1 jan,1970 : " +"</b>" + c, "Seconds/Minutes");

					
						});								
						
						
						
	<!-- =====17 alert ===== -->	
$(".prompt17").click( function() {
 
 var now = new Date();
 var hr = now.getHours();
 if(hr <= 12){
	 
	 a = "<b>A.M</b>";
	 }
	 
else{ a = "<b>P.M</b>";}	 
	 
 

jAlert( a, "Am/Pm");

					
						});						
						
						
						
	<!-- =====18 alert ===== -->	
$(".prompt18").click( function() {
 
 var now = new Date();
 var newdate = new Date("Dec 31, 2020");;
 	 
	 
 

jAlert( "<b>" + "Later Date : " + "</b>" + newdate, "Later Date");

					
						});							
						
						
						
						
<!-- =====19 alert ===== -->	
$(".prompt19").click( function() {
 
 var now = new Date();
 var a = new Date("June 18, 2015");
 var b = now.getTime();
 var c = a.getTime();
 var d = b - a;
 var d = d/ (1000 * 60 * 60 * 24);
 var d=Math.floor(d);
  
	 
 

jAlert( "<b>" + d + "</b>" + " Days past since 1st Ramadan , 2015 " , "number of days past since 1st Ramadan");

					
						});							
						
						
						
<!-- =====20 alert ===== -->	
$(".prompt20").click( function() {
 
 var now = new Date();
 var a = new Date("Dec 5, 2015 22:50:16");
 
 var z = new Date("jan 1, 2015 00:00:00");
 
 var b = a.getTime();
 var c = z.getTime();
 var d = b - c;
 var d = d /( 1000*60 ) ;
 var d=Math.floor(d);
  
jAlert(   "<b>" +" On a reference date : " + "</b>"+ a + "\n" + d
		+ "<b>"+" Seconds had passed since beginning of 2015 : " + "</b>", "Seconds");

					
						});								
						
						
		
<!-- =====21 alert ===== -->	
$(".prompt21").click( function() {
 var a = new Date();

 var now = new Date();
 now.setHours(-0);
 
  
jAlert( "<b>" + "Current Date : " + "</b>" + a + "\n" 
	  + "<b>" + "1 hour ago : " + "</b>" + now , "1 Hours ago");

					
						});								
							
							

<!-- =====22 alert ===== -->	
$(".prompt22").click( function() {
 var a = new Date();
 var now = new Date();
 now.setYear(1917);
 
  
jAlert(  "<b>" + "Current Date : " + "</b>"+ a + "\n" 
		+"</b>"+ "100 years back : " + "</b>" + now , "100 years back");

					
						});	
						
						
						
						
<!-- =====23 alert ===== -->	
$(".prompt23").click( function() {
 
 jPrompt("Please enter your age.","","Birth year", function(num) {
if( num) {

	var now = new Date();
	a = now.getFullYear();
	b = a - num ;


	jAlert( "<b>" + "Your age is : "+  "</b>" + num + "\n" + 
            "<b>" + "your birth Year : " +  "</b>" + b  , "Birth year");
					
					
					};							
												
						
						
						
				});});		
						
						
						
						
						
						
						
						
						
						
														
													
<!-- =====24 alert ===== -->	
$(".prompt24").click( function() {
 
 jPrompt("Please enter a number Number of units.","","K-Electric bill", function(num) {
if( num) {
	
	
    var monthsName = ["January","Febuary","March","April","May","June","July","August","September","October",                   "November","Decmber"];
    var rightNow = new Date();
	var month = rightNow.getMonth();
	var monthName = monthsName[month];
    var ChargesPU = 14; 
	var netAmount = num * ChargesPU;
    var surCharges = 500 ;
	var grossAmount = surCharges + netAmount;




	jAlert( "<b>" + "Customer Name : "+  "</b>" + "Wajiha khan. " + "\n" +
"<b>" + "Current Month : " +  "</b>" + monthName  + "\n" +
"<b>" + "Number of units : " +  "</b>" + num  + "\n" +
"<b>" + "Charges per unit : " +  "</b>" + ChargesPU  + "\n" +
"<b>" + "Net Amount Payable (within Due Date) : " + "</b>" + netAmount + "\n"  +
"<b>" + "Late Payment Surcharge : " + "</b>" + surCharges  + "\n"  +
"<b>" + "Gross Amount Payable (after Due Date): " +"</b>" + grossAmount , "K-Electric bill");
					
					
					};							
												
					});});	
						
						
						
						
						
						
						
						
						
										});
