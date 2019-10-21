// JavaScript Document



<!-- Example script -->
					
			$(document).ready( function() {
				
				
			
<!-- =====1st alert ===== -->	
				
$(".prompt1").click( function() {
var a = "karachi" ;
var b = a.toLowerCase() ;
	  
 jAlert( b , 'alert ( a.toLowerCase() )');
						                  
							
					
	
					
					
						});	
					


						
	
<!-- =====2nd alert ===== -->

$(".prompt2").click( function() {
	
  var a = "karachi" ;
var b = a.toUpperCase()


jAlert( b , 'alert ( a.toUpperCase() )');
							
						
						});		
						
	
					
						
		
<!-- =====3rd alert ===== -->	
				
$(".prompt3").click( function() {
var cities = ["Karachi","Lahore","Islamabd","Hyderabad"];
var myCity = "KarAchi"

for(var i=0;i< cities.length;i++){
if(cities[i] === myCity){
 a = "Yes Found";
}
}

				
		jAlert( myCity.toUpperCase() , 'alert ( myCity.toUpperCase() )', function(r) {
                    jAlert(myCity.toLowerCase() , 'alert ( myCity.toLowerCase() )' ,function(s) {
					jAlert(d + s, 'alert ( " yes found " )')	
						
					   });	
                });	

	

						});	
					


						
	
<!-- =====4th alert ===== -->

$(".prompt4").click( function() {
	
  var cities = ["Karachi","Lahore","Islamabd","Hyderabad"];
var myCity = "KarAchi";
for(var i=0;i< cities.length;i++){
//if(cities[i].toLowerCase() === myCity.toLowerCase()){
if(cities[i].toUpperCase() === myCity.toUpperCase()){  
jAlert("Yes Found" , 'alert ( " yes found " )');
}
}



							
						
						});		

		
		
											
	<!-- =====5th alert ===== -->

$(".prompt5").click( function() {
	  var cities = ["Karachi","Lahore","Islamabd","Hyderabad"];
var myCity = "KarAchi";
var myCity = myCity.toUpperCase();

for(var i=0;i< cities.length;i++){
if(cities[i].toUpperCase()=== myCity){  
jAlert("Yes Found" , 'alert ( " yes found " )');
}
}
						});												
													
<!-- =====6th alert ===== -->

$(".prompt6").click( function() {
					
 jPrompt("Please enter city name.","","City name", function(cityToCheck) {
if( cityToCheck) { 

cityToCheck = cityToCheck.toLowerCase();
 var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
 var matchFound = false;
 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
jAlert("It's one of the cleanest cities" ,' alert ( "Its one of the cleanest cities" ); ');
 matchFound = true;
 break;
 }
}
if ( matchFound === false){
	jAlert("It's not one of the cleanest cities" , ' alert ( "Its not one of the cleanest cities" )');

	}
	
	};
						
				 
						});	
				});			
						
//======================================CHP 22================================================						
						
	<!-- ===== 1alert ===== -->	
				
$(".prompt22-1").click( function() {
					
 var city = "karachi";
var a =city.slice(0,2);
jAlert(a , ' alert ( a ) ');

					
				});						
						
						
						
						
						
						
						
						
	<!-- =====2 alert ===== -->	
$(".prompt22-2").click( function() {
	
   var city = "karachi";
var a =city.slice(2,6);
jAlert(a , ' alert ( a ) ' );


	
				
	
	
	  
                    
							
					
					
					
					
						});										
						
	<!-- =====3 alert ===== -->						
$(".prompt22-3").click( function() {
var city = "karachi";
var a =city.slice(3,9);
  jAlert(a , ' alert ( a ) ');

      	
						


					
				});		
						
						
						
						
						
<!-- =====4 alert ===== -->	
				
$(".prompt22-4").click( function() {


var city = "karachi";
var a =city.slice(2,9);
jAlert(a , ' alert ( a ) ');
														
						
					});														
						
						
						
<!-- =====5 alert ===== -->	



$(".prompt22-5").click( function() {
	


 jPrompt("Please enter your city name.","","City name", function(city) {
if( city) { 
var firstChar = city.slice(0,1);
var firstChar = firstChar.toUpperCase() ;
var otherChar = city.slice(1);
var otherChar = otherChar.toLowerCase();

var c = firstChar + otherChar;
jAlert(c , ' alert ( c )');

			};		});		
						});							
						
						
						
<!-- =====6 alert ===== -->	
$(".prompt22-6").click( function() {
 

 jPrompt("Please enter your city name.","","city name", function(city) {
if( city) { 
var c =  city.length;
jAlert(c , ' alert ( c )');
	};		});		
						});							
						
	
<!-- =====7 alert ===== -->	


$(".prompt22-7").click( function() {
jPrompt("Please enter a month name.","","Month name", function(month){
if(month) { 

 //var month = "Nov";
  
  
  var monthLength = month.length;
 
  
 
 if(monthLength > 3){
  
   
    jAlert( month ,'alert (  month )',  function(z){
		  jAlert( monthLength ,'alert ( monthLength )',  function(c){
   jAlert( "yes" ,'alert ( " yes " )',  function(a){
    
     jAlert( month.slice(0,3) ,'alert ( month.slice(0,3 ))')
		  
	});});});
  
 
 }	
				
  else {
    jAlert( month ,'alert(  month )',  function(z){
		  jAlert( monthLength ,'alert ( monthLength )',  function(z){
	     jAlert( "No" ,'alert ( "No" )',  function(a){
    
     jAlert(month ,'alert ( month )')
		  
	});});	});	   
	   
	   
    }
	
	
	
		  
			  
		
		  
	

		 
	

		  
	 
	

	
		};	});	
	
	
		
			
						});	
						
						
<!-- =====8 alert ===== -->	
$(".prompt22-8").click( function() {
 
	
jPrompt("Please enter some text.","","text", function(str){
if(str) {  var numChars = str.length;
 var matchFound = false;
 for (var i = 0; i < numChars; i++) {
	 
     if (str.slice(i, i + 2) === "  ") {
    jAlert("double spaces!" ,'alert ( "double spaces!" ) ');
     matchFound = true;
     break;
}
}
if (matchFound === false){
 jAlert("No double spaces!" , ' alert ( "No double spaces!" ) ');
}

};		});		
						});							
						
		
		
		
//======================================CHP 23================================================		
		
						
<!-- =====1 alert ===== -->	
$(".prompt23-1").click( function() {
 
 
	
 var text ="World War II (often abbreviated to WWII or WW2), also known as the Second World War.World War II altered the political alignment and social structure of the world"; 
 for (var i = 0; i < text.length; i++) {
 if (text.slice(i, i + 12) === "World War II") {
 text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
 }
}
jAlert(text ,'alert ( text )')
					
						});							
						
<!-- =====2salert ===== -->	
$(".prompt23-2").click( function() {

	 var text = "The quick brown fox jumps over the lazy dog";
    var indexVal1 = text.indexOf("brown");
    var indexVal2 = text.indexOf("over");
    var indexVal3 = text.indexOf("test");
    var indexVal4 = text.indexOf("b");
    var indexVal5 = text.indexOf("B");
    var indexVal6 = text.indexOf("o"); // multiple existance

   
   
    jAlert( indexVal1 , 'alert ( indexVal1 ) ', function(r) {
                    jAlert(indexVal2 , 'alert ( indexVal2 )'  ,function(s) {
					jAlert(indexVal3 , 'alert ( indexVal3 ) ' ,function(t) {
					jAlert(indexVal4 , 'alert ( indexVal4 ) ' ,function(u) {
					jAlert(indexVal5 , 'alert ( indexVal5 ) ',function(v) {
					jAlert(indexVal6 , 'alert ( indexVal6 ) ')	
						
					   });			
						
					   });		
						
						
					   });		
						
					   });	
                });
  

						
														

					
						});								
						
						
						
	<!-- ===== 3 alert ===== -->	
$(".prompt23-3").click( function() {
 
var text ="World War II (often abbreviated to WWII or WW2), also known as the Second World War.World War II altered the political alignment and social structure of the world"; 
 var firstChar = text.indexOf("World War II");
 if (firstChar !== -1) {
 text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
jAlert(text ,'alert ( text )')
 }

					
						});						
						
						
						
	<!-- =====4 alert ===== -->	
$(".prompt23-4").click( function() {
var text = "The quick fox jumps over the brown lazy dog";
    
    var firstCharIndex = text.indexOf("brown");
    
    if(firstCharIndex !== -1){
        var a = text.slice(0,firstCharIndex);
        var b = text.slice(firstCharIndex+5);
        
      

        var c = a + "white"+ b;
        

	}				
	
	
	jAlert(firstCharIndex , 'alert ( firstCharIndex )', function(r) {
	jAlert(a , 'alert ( a )', function(r) {
		
                    jAlert(b , 'alert ( b )' ,function(s) {
					jAlert(text, 'alert ( text )',function(s) {
					jAlert(c, 'alert ( c )')	
						
					   });	});
                });		
						
					   });	
                });	
	
													
						
						
						
						
<!-- =====5 alert ===== -->	
$(".prompt23-5").click( function() {
 var text = "The quick fox jumps over the brown lazy dog";
    
    var firstCharIndex = text.indexOf("o");
    var lastCharIndex = text.lastIndexOf("o");
     
	 jAlert( firstCharIndex , 'alert ( firstCharIndex )', function(r) {
                    jAlert( lastCharIndex , 'alert ( lastCharIndex )' )	
						
					  	
                });
	 
 


					
						});							
						
						
						
<!-- =====23-6 alert ===== -->	
$(".prompt23-6").click( function() {
  var text = "The quick fox jumps over the brown lazy dog";
    
  var text = "The quick brown fox jumps over the lazy dog";
    
    var firstCharIndex = text.indexOf("o",19);
   jAlert(firstCharIndex ,'alert ( firstCharIndex )');						});								
						
						
		
<!-- =====7 alert ===== -->	
$(".prompt23-7").click( function() {
 
    var text = "The quick brown fox jumps over the lazy dog";
    var startIndex = 0;
    var counter = 0;
    for(var a = 0; a < text.length ;a++){
    var newIndex = text.indexOf("e",startIndex);
    if(newIndex !== -1){
    counter++;
    startIndex = newIndex + 1;
        }
    }
	
	jAlert(counter ,'alert ( counter )'); 
						});								
							
							
//======================================CHP 24================================================



<!-- =====1 alert ===== -->	
$(".prompt24-1").click( function() {
 var text = "The quick brown fox jumps over the lazy dog";
    jAlert(text.charAt(13 ) ,'alert ( text.charAt ( 13 ) )');
					
						});	
						
						
						
						
<!-- =====2 alert ===== -->	
$(".prompt24-2").click( function() {
 
 var text = "The quick brown fox jumps over the lazy dog";
jAlert(text.charAt(text.length - 1) ,'alert ( text.charAt(text.length - 1 )');	
					
					});		
						
						
						
						
						
						
						
						
						
						
														
													
<!-- =====3 alert ===== -->	
$(".prompt24-3").click( function() {
  var text = "Hurahh!"  
	  
for (var i = 0; i < text.length; i++) {
if (text.charAt(i) === "!") {
jAlert("Exclamation point found!" , 'alert ( "Exclamation point found! " )');
break;
}
}

});	
						
						
						
						
						
						
						
						
						
										});
