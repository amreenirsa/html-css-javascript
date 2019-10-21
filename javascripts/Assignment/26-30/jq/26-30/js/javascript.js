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
	
  jPrompt("Please enter positive integer.","","Negative Floating Point", function(num) {
	
	
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
						
	
					
						
											
	<!-- =====3rd alert ===== -->

$(".prompt3").click( function() {
					
	jPrompt("Please enter any number.","","Absolute value", function(num) {
	
	
	if( num) {

	var abs=Math.abs(num);
	

jAlert( "The Absolute value of " + num +" is "+abs ,"Absolute value");
							
						};
						
				 });
						});												
													
<!-- =====4th alert ===== -->

$(".prompt4").click( function() {
					
 var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 6)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);

					jAlert("<b>Random Dice Value :</b>  " + numberOfStars, "Random Dice Value");
				});			
						
						
						
	<!-- =====5 alert ===== -->	
				
$(".prompt5").click( function() {
					
var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 2)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);
	if(numberOfStars === 1){
		a = "Head"
		}
else if(numberOfStars === 2){
		a = "Tail"
		}

					jAlert("<b>Random coin Value :</b>  " + a, "Random coin Value");
				});						
						
						
						
						
						
						
						
						
	<!-- =====6 alert ===== -->	
$(".prompt6").click( function() {
	
var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 100)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);

					jAlert("<b>Random Number Between 1 and 100 is:</b>  " + numberOfStars, "Random Number Between 1 and 100");
				
	
	
	  
                    
							
					
					
					
					
						});										
						
	<!-- =====7 alert ===== -->						
$(".prompt7").click( function() {
jPrompt("Please enter your weight.","","Your Weight", function(num) {
	
	
	if( num) {
        var parse=num.toString();

	
	
	

jAlert("The weight of user is "+   "<b>" + parse +  "</b>"  ,"Your Weight");
							
						};
						
				 
						});		
						


					
				});		
						
						
						
						
						
		<!-- =====8 alert ===== -->	
				
$(".prompt8").click( function() {
jPrompt("Please enter a number between 1 and 10.","","Secret Number", function(num) {
	
	
	if( num) {

var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 10)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);
	
	if(num === numberOfStars){
		
		a ="congratulate" + "\n" + +  "<b>" + numberOfStars +  "<b>"  + "is the Secret Number";}
	
	else{
		a = "Try Again" + "\n"+ "The Secret Number is "+  "<b>" + numberOfStars +  "</b>" ;}

					jAlert(  a, "Secret Number");
					
					
					};	
					
				});														
						
					});														
						
						
						
						
						
						
						
						
		
						
						
						
										});
	

