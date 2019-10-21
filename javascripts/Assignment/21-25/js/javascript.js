// JavaScript Document



<!-- Example script -->
					
			$(document).ready( function() {
				
				
			
<!-- =====1st alert ===== -->	
				
$(".prompt1").click( function() {
	
jPrompt("Please enter your first name.","","FullName", function(firstName) {
jPrompt("Please enter your last name.","","FullName", function(lastName){   
	if( firstName) 
{
  firstChar1 = firstName.slice(0,1);
otherChars1 = firstName.slice(1);


firstChar2 = lastName.slice(0,1);
otherChars2 = lastName.slice(1);


firstChar1 = firstChar1.toUpperCase();
otherChars1 = otherChars1.toLowerCase();

firstChar2 = firstChar2.toUpperCase();
otherChars2 = otherChars2.toLowerCase();

jAlert(firstChar1 + otherChars1 + " " + firstChar2 + otherChars2 ,"FullName");
	
	
	
	
	  
                    
							
					};
					
					});
					});
						});	
					


						
	
<!-- =====2nd alert ===== -->

$(".prompt2").click( function() {
	
   jPrompt("Please enter your favorite mobile phone model.","","your favorite mobile phone model", function(mobile){
						if( mobile) {
   
   
  firstChar = mobile.slice(0,1);
otherChars = mobile.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var mobile= mobile.length; 

	
	
	
	  
                        jAlert("<b>My favorite phone is :</b>" + firstChar + otherChars + "\n" + 
       "<b>Length of string is :</b>" + mobile  ,"your favorite mobile phone model"); 
							
						};
						
				 });
						});		
						
	
					
						
											
	<!-- =====3rd alert ===== -->

$(".prompt3").click( function() {
					
				
        var a = "pakistan";
var b = a.indexOf("n")
					jAlert("<b>String :</b> Pakistani " + "\n"+ "<b>Index of letter “n” : </b>" + b, "find the index of letter “n”");
				});												
													
<!-- =====4th alert ===== -->

$(".prompt4").click( function() {
					
var a = "Hello World";
var b = a.lastIndexOf("l")

					jAlert("<b>String :</b> Hello World " + "\n"+ "<b>Last index of letter “l” : </b> " + b, "Find the last index of letter “l”");
				});			
						
						
						
	<!-- =====5 alert ===== -->	
				
$(".prompt5").click( function() {
					
var a = "pakistan";
var b = a.charAt(3);


					jAlert("<b>String :</b> Pakistani " + "\n"+ "<b>Character at 3rd index : </b>" + b, "find the character at 3rd index");
				});						
						
						
						
						
						
						
						
						
	<!-- =====6 alert ===== -->	
$(".prompt6").click( function() {
	
jPrompt("Please enter your first name.","","FullName", function(firstName) {
jPrompt("Please enter your last name.","","FullName", function(lastName){   
	if( firstName) 
{
  firstChar1 = firstName.slice(0,1);
otherChars1 = firstName.slice(1);


firstChar2 = lastName.slice(0,1);
otherChars2 = lastName.slice(1);


firstChar1 = firstChar1.toUpperCase();
otherChars1 = otherChars1.toLowerCase();

firstChar2 = firstChar2.toUpperCase();
otherChars2 = otherChars2.toLowerCase();

jAlert(firstChar1 + otherChars1 + " " + firstChar2 + otherChars2 ,"FullName");
	
	
	
	
	  
                    
							
					};
					
					});
					});
						});										
						
	<!-- =====7 alert ===== -->						
$(".prompt7").click( function() {
var text = "Hydrabad";
var firstChar = text.indexOf("Hydra");
if (firstChar !== -1) {
text = text.slice(0, firstChar) + "Islam" + text.slice(firstChar+4);
jAlert("<b> City :</b> Hydrabad " + "\n"+ "<b>After replacement : </b> " + text , "Replace the “Hyder” to “Islam”"); }



					
				});		
						
						
						
						
						
		<!-- =====8 alert ===== -->	
				
$(".prompt8").click( function() {
	
var message = "Ali and Sami are best friends. They play cricket and football together.";
message = message.replace(/and/g,"&");
	
	

jAlert( message , "Replace the “and” to “&”"); 



					
				});														
						
						
						
						
						
						
						
						
						
		<!-- =====9 alert ===== -->	
				
$(".prompt9").click( function() {
	
var val = "472";
 a = typeof(val);
 
 
 val2 = parseInt(val);
 val2 = typeof(val2);
  
	
	

jAlert("<b>Value :</b>" + val + "\n" + 
       "<b>Type : </b>" + a + "\n" + 
	   "<b>Value :</b>" + val + "\n" + 
	   "<b>Type : </b>"+ val2 , "Converts a string to a number"); }



					
				);	
				
				
				
	<!-- =====10 alert ===== -->	
				

$(".prompt10").click( function() {
	
   jPrompt("Please enter URL.","","URL", function(firstName){
						if(firstName) {
   
   
  

firstChar = firstName.slice(0,3);
otherChars = firstName.slice(3);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();

	
	
	
	  
                        jAlert(firstChar + otherChars  ,"URL"); 
							
						};
						
				 });
						});				
									
						
						
<!-- =====11 alert ===== -->	
				

$(".prompt11").click( function() {
	
   jPrompt("Please enter your name.","","Capital Letters", function(firstName){
						if(firstName) {
   
   
  

firstName = firstName.toUpperCase();


	
	
	
	  
                        jAlert(firstName ,"Capital Letters"); 
							
						};
						
				 });
						});		
						
						
						
						
<!-- =====12 alert ===== -->	
				

$(".prompt12").click( function() {
	
   jPrompt("Please enter your name.","","Small Letters", function(firstName){
						if(firstName) {
   
   
  

firstName = firstName.toLowerCase();


	
	
	
	  
                        jAlert(firstName ,"Small Letters"); 
							
						};
						
				 });
						});								
						
											
						
	<!-- =====13 alert ===== -->	
				

$(".prompt13").click( function() {
	
   jPrompt("Please enter your name.","","Title Case.", function(firstName){
						if(firstName) {
   
   
  

firstChar = firstName.slice(0,1);
otherChars = firstName.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();

	
	
	
	  
                        jAlert(firstChar + otherChars  ,"Title Case."); 
							
						};
						
				 });
						});	
						
						
						
		


				
						
						
						
						
						
						
						
						
						
						
						
							
						
	<!-- =====14 alert ===== -->	
			
$(".prompt14").click( function() {
	
var a = 35.36;
b = Number(a);
b = b.toString() *100;



	
	

jAlert("<b>Number :</b>" + a + "\n" + 
       "<b>Result : </b>" + b  , "Converts a number to a string"); }



					
				);		

	
						
			<!-- =====15 alert ===== -->	
				
$(".prompt15").click( function() {
	
    jPrompt("Please enter your name.","","username",function(userName){
	
						if( userName ) {
							
						

var matchFound = false;
for (var i = 0; i < userName.length; i++) {
if (userName.charAt(i) === "!" || userName.charAt(i) === "." || userName.charAt(i) === "," || userName.charAt(i) === "@") {
 a = "Please enter a valid username.";
 var matchFound =  true;
 break;
 }
 }
  if(matchFound === false){
	a = userName;}	
	
	
	  
                        jAlert(a ,"username"); 
							
						
						};
						
				 });
						});
						
								
						
						
	<!-- =====16 alert ===== -->	
				
$(".prompt16").click( function() {
	var itemList= ["cake","apple pie","cookie","chips","patties"];
   jPrompt("Welcome to <b>Abc Bakery !</b> what do you want sir madam ?","","Welcome to Abc Bakery", function(itemName) {
						if( itemName ) 
{
   
  


itemName = itemName.toLowerCase();
var index = itemList.indexOf(itemName);
 
 
 var matchFound = false;
for (var i = 0; i < itemList.length; i++) {
if (itemName === itemList[i] ) {
 a= "<b>" + itemName + "</b>"+ " is available at index "+ "<b>" +index + "</b>" +" in our bakery";
 var matchFound =  true;
 break;
 }
 }
  if(matchFound === false){
	 a = "We are sorry " + "<b>" + itemName + "</b>" + " is not available in our bakery";}
	
	
	
	  
                        jAlert(a,"Welcome to Abc Bakery"); 
							
					};
					});
						});	
											
						
						
						
						
						
						
		
													
						
						
						
						
						
						
		<!-- =====17 alert ===== -->	
				
$(".prompt17").click( function() {
	
   jPrompt("Please enter a password","","Password", function(pass) {
						if( pass ) 
{
	
	 firstChar = pass.slice(0, 1);

if(pass.length > 6 ){
	
	if(firstChar === "1" || firstChar === "2" || firstChar === "3" || firstChar === "4" || firstChar === "5" || firstChar === "6" || firstChar === "7" || firstChar === "8" || firstChar === "9" || firstChar === "0" ){
 
  jPrompt("It should not start with a number","","Password")
		}
	
    else{
		a = "<b>Password : </b>"+ pass ;
		
		}	

}


else{
	 jPrompt("It must at least 6 characters long","","Password")
}
	  
                        jAlert(a,"Password"); 
							
					};
					});
						});	
	
	
<!-- =====18 alert ===== -->	
				
$(".prompt18").click( function() {
	
 // Create a variable that contains a string
var myString = "University of Karachi";
// Create a variable to contain the array
var mySplitResult;
// Use the string.split function to split the string
// using empty quotation marks as a criteria for splitting the string
mySplitResult = myString.split("");
for(i = 0; i < mySplitResult.length; i++)
           {
  document.write("<br /> "+  mySplitResult[i]);
           }
						
				
						});	
						
						
		<!-- =====19 alert ===== -->	
				
$(".prompt19").click( function() {
	
   jPrompt("Please enter a city name","","the last character", function(a) {
						if( a ) 
{
		

var b = a.charAt(a.length - 1);


	  
                        jAlert(b,"the last character"); 
							
					};
					});
						});						
										
						
						
						
						
						
	<!-- =====20 alert ===== -->	
				
$(".prompt20").click( function() {
	
 
							
						
	 var text = "The quick brown fox jumps over the lazy dog";
	var text =text.toLowerCase();
    var startIndex = 0;
    var counter = 0;

    for(var a = 0; a < text.length ;a++){
        var newIndex = text.indexOf("the",startIndex);
        if(newIndex !== -1){
            counter++;
            startIndex = newIndex + 1;
        }
    

    

	
	
	
	  
                        jAlert("<b>Text :</b> The quick brown fox jumps over the lazy dog." +"\n"+ 
					            "There are " + counter + " occurance(s) of the word 'the'" ,"Statement"); 
							
						
						};
						
				 });
					
						
								
						
	<!-- =====21 alert ===== -->	
				
$(".prompt21").click( function() {
	
 
							
						
	 var a = "3";
	 var b = "3";
	 x = a + b
    jAlert("<b>a is : '3'</b> "  +"\n"+ 
		   "<b>b is : '3'</b> "  +"\n"+
		   "<b>a + b is :</b> " + x  ,"The value of a + b"); 
							
						
						;
						
				 });
										
		
						
						
	<!-- =====22 alert ===== -->	
				
$(".prompt22").click( function() {
	
 
							
						
	 var a = "3";
	 var b = "3";
	 x = a - b
    jAlert("<b>a is : '3'</b> "  +"\n"+ 
		   "<b>b is : '3'</b> "  +"\n"+
		   "<b>a - b is :</b> " + x  ,"The value of a- b"); 
							
						
						;
						
				 });
											
						
<!-- =====23 alert ===== -->						
						

		$(".prompt23").click( function() {
	
jPrompt("Please enter your first name.","","String Comparison", function(a) {
jPrompt("Please enter your last name.","","String Comparison", function(b){   
	if( a) 
{
var c = a.length;
var d = b.length;

if(c>d){
	a = a + "is grater than" + b;
	
	}
if(c<d){
	a = b + " is grater than" + a;
	
	}
jAlert(a ,"String Comparison");
	
	
	
	
	  
                    
							
					};
					
					});
					});
						});						
						
						
						
	<!-- =====24 alert ===== -->	
				
$(".prompt24").click( function() {
	
 var string = "pakistan";
   
var vowelsCount = 0;

  //turn the input into a string


  //loop through the string
  for (var i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
	  	  jAlert(vowelsCount,"Vowels");
	  
	  }
	  
  }
  return vowelsCount;	
		 });


		 
  		$(".prompt25").click( function() {
	
 var string = "pakistan";
   
var consCount = 0;

  //turn the input into a string


  //loop through the string
  for (var i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "p" || string.charAt(i) == "k" || string.charAt(i) == "s" || string.charAt(i) == "t" || string.charAt(i) == "n") {
      consCount += 1;
	  	  jAlert(consCount,"Consonants");
	  
	  }
	  
  }
  return consCount;	
					
						
	
						
				 });					
						
						
						
						
										});
	

