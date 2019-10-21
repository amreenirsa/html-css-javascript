// JavaScript Document



<!-- Example script -->
					
			$(document).ready( function() {
				
				
			
<!-- =====1st alert ===== -->	
				
$(".prompt25-1").click( function() {
var text = "the quick brown fox jumps over the lazy dog";
var nextText1 = text.replace("brown","white");
var nextText2 = text.replace("hello","white");
var nextText3 = text.replace(/the/g,"not");
    
   
	jAlert( text , 'alert ( text ) ', function(r) {
                    jAlert( nextText1, 'alert (  nextText1  )' ,function(s) {
					jAlert( nextText2 , 'alert (  nextText2 )',function(t) {
					jAlert(nextText3 , 'alert ( nextText3  )')	
						
					   });		
						
					   });	
                });						                  
							
					
	
					
					
						});	
					


//---------------------------------------------chp 26

					
	
<!-- =====1  alert ===== -->

$(".prompt26-1").click( function() {
	
 var a = Math.round(3.4);
   

    var  b = Math.round(3.5);
    

    var c = Math.round(3.7);
    

    var d = Math.round(-3.7);
    

    var e = Math.round(-3.5);
    

    var f = Math.round(-3.2);
    
					
					
		
	jAlert( a , 'alert ( a ) ', function(r) {
                    jAlert( b , 'alert ( b )' ,function(s) {
					jAlert( c , 'alert ( c )',function(t) {
					jAlert( d , 'alert ( d  )',function(s) {
					jAlert( e , 'alert ( e  )',function(t) {
					jAlert( f , 'alert ( f )')	
						
					   });		
						
					   });		
						
					   });		
						
					   });	
                });						                  
								
					
					
					
					
					
					
					
					
					
					
					
					
							
						
						});		
						
	
					
						
		
<!-- =====2 alert ===== -->	

$(".prompt26-2").click( function() {
			var a = Math.round(0.0678437);
    

    var b = Math.round(.2678437);
    

    var c = Math.round(.6678437);
  		
						
						
						
				jAlert( "A : "+ a , 'alert ( "A : " + a ) ', function(r) {
                    jAlert( "B : "+ b , 'alert ( "B : " + b )' ,function(s) {
					jAlert( "C : "+c , 'alert ( "C : " + c)')	
						
					   });	
                });						                  
								
						
						
						
						
						
						
						
						
						
					});		
						


<!-- =====3 alert ===== -->	

$(".prompt26-3").click( function() {
			var c = Math.ceil(3.4);
    

    var d = Math.ceil(3.9);
   		
					
	jAlert("C : " + c , 'alert ( "C : " + c ) ', function(r) {
                    jAlert( "D : " + d , 'alert ( "D : " + d )' )	
						
					  	
                });					
					
					
					
					
					
					
					
					
						
					});		
						
						
						
						
						
<!-- =====4 alert ===== -->	

$(".prompt26-4").click( function() {
				

    var c = Math.ceil(-3.4);
    

    var d = Math.ceil(-3.9);
    
	
	
		jAlert("C : " + c , 'alert ( "C : " + c ) ', function(r) {
                    jAlert( "D : " + d , 'alert ( "D : " + d )' )	
						
					  	
                });	
	
	
	
	
	
		
						
					});						
						
						
						
						
						
<!-- =====5 alert ===== -->	

$(".prompt26-5").click( function() {
		
var a = Math.floor(3.4);
    

    var b = Math.floor(3.9);
    
			
			
			
			jAlert("A : " + a , 'alert ( "A : " + a ) ', function(r) {
                    jAlert( "B : " + b , 'alert ( " B : " + b )' )	
						
					  	
                });	
			
			
			
			
			
			
			
						
					});							
						
						
<!-- =====6 alert ===== -->	

$(".prompt26-6").click( function() {
					
				var a = Math.floor(-3.4);
    

    var b = Math.floor(-3.9);
   		
	
	
	
	jAlert("A : " + a , 'alert ( "A : " + a ) ', function(r) {
                    jAlert( "B : " + b , 'alert ( "B : " + b ) ' )	
						
					  	
                });	
	
	
	
	
	
	
	
	
					});						
						
						
						
//---------------------------------------------chp 27						
									
									
<!-- =====1 alert ===== -->	

$(".prompt27-1").click( function() {
					

 var a = Math.random();
    
    var b = a*10;
    var c = a*100;
    var d = a*1000;


   
   jAlert( a , 'alert ( a ) ', function(r) {
			jAlert("A : " + a + " -- B : " + b , 'alert ("A : " + a + " -- B : " + b) ', function(r) {
                    jAlert( " C : " + c + " -- D : " + d , 'alert ( " C : " + c + " -- D : "  +  d)' )	
						
				   });	  	
                });		
					});										
									
									
									
<!-- =====2 alert ===== -->	

$(".prompt27-2").click( function() {
					var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 6)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);

   jAlert(bigDecimal + " -- " +improvedNum + " -- "+ addOneInNum + " -- "+numberOfStars , 'alert ( "Random Die number ") ');
				
					});										
									
									
<!-- =====3 alert ===== -->	

$(".prompt27-3").click( function() {
	var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 2)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);
if(numberOfStars == 1){
	a ="Tail"
	
	}
else if(numberOfStars == 2){
	a ="Head"
	
	}	
	
	
    jAlert( numberOfStars +"\n" + "Random coin value "+ a , 'alert ( " Random coin value )" ' );
				
					});										
														
									
									
<!-- =====4 alert ===== -->	

$(".prompt27-4").click( function() {
					
		var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 100)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);

	
	
   jAlert("Random number between 1 and 100 is " + numberOfStars  , 'alert ( " Random number between 1 and 100 ")  '  );		
					});										
									
									
									
<!-- =====5 alert ===== -->	

$(".prompt27-5").click( function() {
					
				
jPrompt("please enter number between 1-10.",""," number between 1-10", function(a) {
if( a) {
if(a > 10  ||  a < 1){
	b = "please enter number between 1-10"  }
	
	
else{	
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 10)
    var addOneInNum = improvedNum + 1;
    var numberOfStars = Math.floor(addOneInNum);
	if(a === numberOfStars){
		b = "Congratulation" + a + "is secret number";}
	else{
		b = "Try again the secret number is " + numberOfStars ;}	
}


jAlert( b , 'alert ( " Random number between 1 and 100" ) ' );
					
}
					});	
					
				
					});	
					
					
					
					
					
//---------------------------------------------chp 28

<!-- =====1 alert ===== -->	
$(".prompt28-1").click( function() {
			 var a = 23;
    var b = "23";

    var c = b + 5;

   jAlert(c , 'alert (  c ) ');		

});
										

							
<!-- =====2 alert ===== -->	
$(".prompt28-2").click( function() {
				 var a = 23;
    var b = "abc";

    var c = b + 5;

  jAlert(c , 'alert (  c  ) ');	
    	

});
															
					
<!-- =====3 alert ===== -->	
$(".prompt28-3").click( function() {
jPrompt("please enter Enter your age.","","your age ", function(a) {
if( a) { 
    var b = a + 5;



jAlert( a , 'alert ( a ) ', function(r) {
                    jAlert(  b , 'alert ( b )' )	
						
					  	
          	
		   	     });	
	

 } });

    
});
															
<!-- =====4 alert ===== -->	
$(".prompt28-4").click( function() {
					
jPrompt("please enter Enter your age.","","your age ", function(currentAge) {
if(currentAge) {					
					
					
    var yearsEligibleToVote = currentAge - 18;
    var concatNumbers = currentAge + 18;
            
						 jAlert(currentAge , 'alert ( yearsEligibleToVote ) ', function(r) {

			 jAlert(yearsEligibleToVote , 'alert ( yearsEligibleToVote ) ', function(r) {
                    jAlert( concatNumbers, 'alert ( concatNumbers )' )	
						
					  	
          	});
		   	     });
} });   
});
		
		
		
															
	<!-- =====5 alert ===== -->	
$(".prompt28-5").click( function() {
	var profit = "200" - "150";
   var profit1 = "200" - "duck";

    	
	
	jAlert(profit , 'alert ( profit ) ', function(r) {
                    jAlert( profit1, 'alert ( profit1 )' )	
						
					  	
          	
		   	     });
	
	
	
	
	
	
	
	
	
	
				

});
																							
	<!-- =====6 alert ===== -->	
$(".prompt28-6").click( function() {
	
	jPrompt("please enter Enter your age.","","your age ", function(currentAge) {
if(currentAge) {
		
  var qualifyingAge = parseInt(currentAge) + 1;
  var ageStr = currentAge + 1;



jAlert(currentAge , 'alert ( currentAge ) ', function(r) {
                    jAlert( qualifyingAge, 'alert ( qualifyingAge )', function(s) {
                    jAlert( ageStr , 'alert ( ageStr )' )	
				  });
				  
				  });
} });   


 
				

});			

	<!-- =====7 alert ===== -->	
$(".prompt28-7").click( function() {
			var num = "2.333"
  var convertedNum = parseInt(num);
  var convertedNumDecimal = parseFloat(num);
  var newVal = convertedNumDecimal + 1;

 
  
  
  jAlert(num , 'alert ( num ) ', function(r) {
                    jAlert( convertedNum , 'alert ( convertedNum )', function(s) {
                    jAlert( convertedNumDecimal , 'alert ( convertedNumDecimal )', function(t) {
                    jAlert( newVal , 'alert ( newVal )' )	
				  });
				  	
				  });
				  
				  });
  
  
  
  
  
  
  
  
  	

});


<!-- =====8 alert ===== -->	
$(".prompt28-8").click( function() {
					
var num = "-2.333"
  var convertedNum = parseInt(num);
  var convertedNumDecimal = parseFloat(num);


  
  
  jAlert(num , 'alert ( num ) ', function(r) {
                    jAlert( convertedNum, 'alert ( convertedNum )', function(s) {
                    jAlert(convertedNumDecimal , 'alert ( convertedNumDecimal )' )	
				  });
				  
				  });
});



//---------------------------------------------chp 29

<!-- =====1 alert ===== -->	
$(".prompt29-1").click( function() {
		var a = "34";
    

    var b = Number(a) + 4;
    		
	
	
	  jAlert( a , 'alert ( a ) ', function(r) {
                    jAlert(  b , 'alert ( b )' )	
				 
				  
				  });
	
	
	
	
	
	
	
	
	
	
		

});

<!-- =====2 alert ===== -->	
$(".prompt29-2").click( function() {
					
var num = "2.333"
 
  var convertedNumDecimal = Number(num);
  var newVal = convertedNumDecimal + 1;

  
  
   jAlert(num , 'alert ( num ) ', function(r) {
                   
                    jAlert( convertedNumDecimal , 'alert ( convertedNumDecimal )', function(t) {
                    jAlert( newVal , 'alert ( newVal )' )	
				  });
				  	
				
				  
				  });
});

<!-- =====3 alert ===== -->	
$(".prompt29-3").click( function() {
					var num = 1548
  var newVal = num + 1;
  

  var numString = num.toString();
  
  
  jAlert(num , 'alert ( num ) ', function(r) {
                    jAlert( newVal, 'alert ( newVal )', function(s) {
                    jAlert(numString.length , 'alert ( numString.length )' )	
				  });
				  
				  });

});
						
										
										
										
//---------------------------------------------chp 30


<!-- =====1 alert ===== -->	
									
										
$(".prompt30-1").click( function() {
				  
var a = 1.3;
var b = a.toFixed();
jAlert(b , 'alert ( b )');



		  

   
});	


<!-- ====2 alert ===== -->	
									
										
$(".prompt30-2").click( function() {
				  
				  
var a = 1.5;
var b = a.toFixed();
jAlert(b , 'alert ( b )')


   
});	

<!-- =====3 alert ===== -->	
									
										
$(".prompt30-3").click( function() {
				  
	var a = 1.6;
var b = a.toFixed();
jAlert(b , 'alert ( b )')



			  

   
});	



<!-- =====4 alert ===== -->	
									
										
$(".prompt30-4").click( function() {
				  
	
var a = 1.49;
var b = a.toFixed();
jAlert(b , 'alert ( b )')


			  

   
});	

<!-- =====5 alert ===== -->	
									
										
$(".prompt30-5").click( function() {
				  
	var a = 1.50;
var b = a.toFixed();
jAlert(b , 'alert ( b )')

			  

   
});


<!-- =====6 alert ===== -->	
									
										
$(".prompt30-6").click( function() {
				  



var a = 1.77;
var b = a.toFixed();
jAlert(b , 'alert ( b )')			  

   
});




<!-- =====7 alert ===== -->	
									
										
$(".prompt30-7").click( function() {
				  
var a = - 1.3;
var b = a.toFixed();
jAlert(b , 'alert ( b )');



		  

   
});	


<!-- ====8 alert ===== -->	
									
										
$(".prompt30-8").click( function() {
				  
				  
var a = -1.5;
var b = a.toFixed();
jAlert(b , 'alert ( b )')


   
});	

<!-- =====9 alert ===== -->	
									
										
$(".prompt30-9").click( function() {
				  
	var a = -1.6;
var b = a.toFixed();
jAlert(b , 'alert ( b )')



			  

   
});	



<!-- =====10 alert ===== -->	
									
										
$(".prompt30-10").click( function() {
				  
	
var a = -1.49;
var b = a.toFixed();
jAlert(b , 'alert ( b )')


			  

   
});	

<!-- =====11 alert ===== -->	
									
										
$(".prompt30-11").click( function() {
				  
	var a = -1.50;
var b = a.toFixed();
jAlert(b , 'alert ( b )')

			  

   
});


<!-- =====12 alert ===== -->	
									
										
$(".prompt30-12").click( function() {
				  



var a = -1.77;
var b = a.toFixed();
jAlert(b , 'alert ( b )')			  

   
});




























	

										
										
	<!-- =====13 alert ===== -->	
									
										
$(".prompt30-13").click( function() {
	var price =  9.95;
    var tax = 6.5;
    var total = price * 6.5 /100;
	
	 var fixedValue = total.toFixed(2);
	
	jAlert(total , 'alert ( total ) ', function(r) {
                    jAlert(fixedValue , 'alert ( fixedValue )' )	
				  });
				  
				  

   
});										
										
	
	
<!-- =====14 alert ===== -->	
									
										
$(".prompt30-14").click( function() {
					var price =  9.95;
    var price =  9.95;
    var tax = 6.5;
    var num = price * 6.5 /100;

   var str = num.toString();
 if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";
}
 num = Number(str);
 prettyNum = num.toFixed(2);
 jAlert(prettyNum , 'alert ( prettyNum )')
});			
	
	
		
	
	
	
	
	
	
	
										
										
				});							
										
										
										