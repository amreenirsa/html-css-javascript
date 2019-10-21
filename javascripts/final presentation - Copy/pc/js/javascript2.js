// JavaScript Document



<!-- Example script -->
					
			$(document).ready( function() {
				
				
			
<!-- =====1st alert ===== -->	
				
$(".prompt31-1").click( function() {
 var rightNow = new Date();
	  
 jAlert("The Time is " + rightNow ,"alert ( rightNow )");
						                  
							
					
	
					
					
						});	
					


/*
Rough work						
	
<!-- =====2nd alert ===== -->

$(".alert_style_example1").click( function() {
	
 var rightNow = new Date();
	  
 jAlert("The Time is " + rightNow);
						            
	
	jConfirm('Can you confirm this?', 'Confirmation Dialog', function(r) {
                    jAlert('Confirmed: ' + r, 'Confirmation Results');
                });
	
	
	jAlert('Can you confirm this?', 'Confirmation Dialog', function(r) {
                    jAlert('Confirmed: ' + r, 'Confirmation Results');
                });
	
	
	
						});		
	*/					
						
<!-- =====2nd alert ===== -->
						
$(".prompt31-2").click( function() {
	
    var a = "Hello World";
   
	
	 var rightNow = new Date();
  
	
   
    					
						
						
		jAlert(a.indexOf("e"), 'alert ( a.indexOf ( "e" ) )', function(r) {
                    jAlert(""+rightNow , 'alert ( rightNow )')	
						
					   });	
                	
	
	
    					
						
						
	});						
						

	
<!-- =====3 alert ===== -->
						
$(".prompt31-3").click( function() {
	
    var a = "Hello World";
	var b = a.slice(0 , 2);
   
	
	 var rightNow = new Date();
    
	
	// var d = rightNow.slice(0 , 2)
	 
  
    					
		jAlert( b , 'alert ( b )', function(r) {
                    jAlert(""+ rightNow , 'alert ( rightNow ) ' ,function(s) {
					jAlert(d , 'alert ( d )')	
						
					   });	
                });	
					
						
						
	});		
		
	
	

	
	
    					
						
						
		
	
	
	
<!-- =====4 alert ===== -->
						
$(".prompt31-4").click( function() {
	
    var a = "Hello World";
    var rightNow = new Date();
   

	
jAlert(a.charAt("2"), 'alert ( ( a . charAt ( "2" ) )', function(r) {
                    jAlert(""+rightNow , 'alert ( rightNow)' ,function(s) {
					jAlert(rightNow.charAt("m") , 'alert ( rightNow )')	
						
					   });	
                });	
	
	
    					
						
						
	});		
	
	
	
<!-- =====5 alert ===== -->
						
$(".prompt31-5").click( function() {
	
    var rightNow = new Date();
    

    
    var b = 45;
    var c = b.toString();
	

 

    var dateString = rightNow.toString();
    

  
   

	
jAlert(""+rightNow, 'alert ( rightNow )', function(r) {
                    jAlert(c , 'alert ( c )' ,function(s) {
					jAlert(dateString , 'alert ( dateString )')	
						
					   });	
                });	
	
	
    					
						
						
	});			
	
	
	
	
<!-- =====6 alert ===== -->
						
$(".prompt31-6").click( function() {
	
    var rightNow = new Date();
    

    var b = rightNow.getDay();
    
   

	
                    jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert(b , 'alert ( b )' )});
						
						
                });		
	
	
	
	
	
	
	
	
<!-- =====7 alert ===== -->
						
$(".prompt31-7").click( function() {
	var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var rightNow = new Date();
    

    var b = rightNow.getDay();
   

    var c = 6;
    var d = 4;
   

	
                    jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert(b , 'alert ( b )' ,function(s) {
					jAlert(days[d] , 'alert ( days[d] )' ,function(t) {
					jAlert(days[b] , 'alert ( days[b] )' ,function(u) {
					jAlert(days[4] , 'alert ( days[4] )')	
						
					   });		
						
						
					   });		
						
					   });	
                });	
	
	
    					
						
						
	});			
	
	
	
	
	
	
<!-- =====8 alert ===== -->
						
$(".prompt31-8").click( function() {
	 var monthsName = ["January","Febuary","March","April","May","June","July","August","September","October",                   "November","Decmber"];

    var rightNow = new Date();
    

    var b = rightNow.getMonth();

 

    var c = 6;
    var d = 4;
   


	
                    jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert(b , 'alert ( b )' ,function(s) {
					jAlert(monthsName[d] , 'alert ( monthsName[d] )' ,function(t) {
					jAlert(monthsName[b] , 'alert ( monthsName[b] )' ,function(u) {
					jAlert(monthsName[4] , 'alert ( monthsName[4] )')	
						
					   });		
						
						
					   });		
						
					   });	
                });	
	
	
    					
						
						
	});			
	
	
///////////////////////////////////////////////////chp32	
	
	
	<!-- =====1 alert ===== -->
	
	$(".prompt32-1").click( function() {
		
		
		var rightNow = new Date();
    

	
	var currentMonth = rightNow.getMonth();
    	
	
	jAlert( "" +rightNow, 'alert ( alert )', function(r) {
                    jAlert(currentMonth  , 'alert ( currentMonth )' )});
						
						
               
	
						
	});
	
	
	
	
	<!-- =====2 alert ===== -->
	
	$(".prompt32-2").click( function() {
		
	var rightNow = new Date();
    

	
	var currentDate = rightNow.getDate();
    	
	
	jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert(currentDate  , 'alert ( currentDate )' )});	
		
		
	
	
						
	});	
	
	
	
	
	<!-- =====3 alert ===== -->
	
	$(".prompt32-3").click( function() {
		
		var rightNow = new Date();
    

	 var currentYear = rightNow.getFullYear();
    	
	
	jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert(currentYear  , 'alert ( currentYear )' )});	
		
		
		
	
	
						
	});	
	
	
	
	
	<!-- =====4 alert ===== -->
	
	$(".prompt32-4").click( function() {
		
		
		var rightNow = new Date();
    

    var currentHour = rightNow.getHours();
	
	jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert(currentHour  , 'alert ( currentHour )' )});		
		
	
	
						
	});	
	
				
<!-- =====5 alert ===== -->
	
	$(".prompt32-5").click( function() {
		
		
			var rightNow = new Date();
    

   var currentMinute = rightNow.getMinutes();
	
	jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert( currentMinute  , 'alert ( currentMinute )' )});		
		
	
	
						
	});					
		
		
		
		
<!-- =====6 alert ===== -->
	
	$(".prompt32-6").click( function() {
		
		
			var rightNow = new Date();
    

    var currentSeconds = rightNow.getSeconds();
	
	jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert( currentSeconds  , 'alert ( currentSeconds  )' )});		
		
	
	
						
	});			
		
		
<!-- =====7 alert ===== -->
	
	$(".prompt32-7").click( function() {
		
		
			var rightNow = new Date();
    

   var currentMills = rightNow.getMilliseconds();
	
	jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert( currentMills  , 'alert ( currentMills )' )});		
		
	
	
						
	});		
		
		
	
		
		
		
		
		
		
		
	<!-- =====8 alert ===== -->
	
	$(".prompt32-8").click( function() {
		
		
			var rightNow = new Date();
    

     var currentTime = rightNow.getTime();
	
	jAlert( "" +rightNow, 'alert ( rightNow )', function(r) {
                    jAlert(currentTime  , 'alert ( currentTime )' )});		
		
	
	
						
	});		
		
		
		
///////////////////////////////////////////////////////////////chp33		
		
		
<!-- =====1 alert ===== -->
	
	$(".prompt33-1").click( function() {
		
		
	var age = 2;
    var ageInDays = age * 365;
    

    var ageInHours = age * 365 * 24;
    

    //var ageInMinutes = ageInHours * 60;
    var ageInMinutes = age * 365 * 24 * 60;
  

    var ageInSeconds = age * 365 * 24 * 60 * 60;
    

    var ageInMills = age * 365 * 24 * 60 * 60 * 1000;
    
	
	
                    jAlert( ageInDays, 'alert ( ageInDays )', function(r) {
                    jAlert(ageInHours , 'alert ( ageInHours )' ,function(s) {
					jAlert(ageInMinutes , 'alert ( ageInMinutes  )' ,function(t) {
					jAlert(ageInSeconds , 'alert ( ageInSeconds )' ,function(u) {
					jAlert(ageInMills , 'alert (ageInMills )')	
						
					   });		
						
						
					   });		
						
					   });	
                });	
			
		
	
	
						
	});		
		
		
		
<!-- =====2 alert ===== -->
	
	$(".prompt33-2").click( function() {
		
var today = new Date();
var milliSec = today.getTime();



var year = milliSec / (1000 * 60 * 60 * 24*365);
var year = Math.floor(year);


var days = milliSec / (1000 * 60 * 60 * 24);
var days = Math.floor(days);



var hours = milliSec / (1000 * 60 * 60 );
var hours = Math.floor(hours);


var minutes = milliSec / (1000 * 60 );
var minutes= Math.floor(minutes);



var sec = milliSec / ( 1000  );
var sec = Math.floor(sec);

    
	
	
                    jAlert(  milliSec, 'alert ( milliSec )', function(r) {
                    jAlert(year , 'alert ( year  )' ,function(s) {
					jAlert(days , 'alert  (days  )' ,function(t) {
					jAlert(hours , 'alert ( hours )' ,function(u) {
					jAlert(minutes , 'alert ( minutes )',function(v) {
					jAlert(sec , 'alert ( sec )')	
						
					   });		
						
					   });		
						
						
					   });		
						
					   });	
                });	
			
		
	
	
						
	});		
			
			
			
			
			
			
	<!-- =====3 alert ===== -->
	
	$(".prompt33-3").click( function() {
		
    var rightNow = new Date();
    var a = new Date();
	 rightNow.getTime();

    var otherDay = new Date("June 11, 2017");
   

    var msDiff = otherDay.getTime() - rightNow.getTime();
   

    var diffInDays = msDiff / (1000 * 60 * 60 * 24);
	 var diffInDays = Math.floor(diffInDays);
   

    
	
	
                    jAlert(  "" + a, 'alert ( rightNow ) ', function(r) {
                    jAlert( "" +  otherDay , 'alert ( otherDay ) ' ,function(s) {
					jAlert(msDiff , 'alert ( msDiff ) ' ,function(t){
					jAlert(diffInDays , 'alert ( diffInDays  ) ' )
						
					   });	
						
					   });	
                });	
			
		
	
	
						
	});		
					
			
			
			
			
			
			
			
			
			
	<!-- =====4 alert ===== -->
	
	$(".prompt33-4").click( function() {
		
     
	   var a = new Date();
   
   var rightNow = new Date();
   
    rightNow.getTime();

    var birthdayCelebrationDate = new Date("June 11, 2017 19:00:00");
   

    var msDiff = birthdayCelebrationDate.getTime() - rightNow.getTime();
   

    var diffInDays = msDiff / (1000 * 60 * 60 * 24);
    
	 var diffInDays = Math.floor(diffInDays);
   

    
	
	
                    jAlert(  "" + a, 'alert ( rightNow ) ', function(r) {
                    jAlert( "" +  birthdayCelebrationDate , 'alert ( birthdayCelebrationDate ) ' ,function(s) {
					jAlert(msDiff , 'alert ( msDiff ) ' ,function(t){
					jAlert(diffInDays , 'alert ( diffInDays  ) ' )
						
					   });	
						
					   });	
                });	
			
		
	
	
						
	});		
					
			
			
			
			
			
///////////////////////////////////////////////////////////////chp34					
			
			



<!-- =====1 alert ===== -->
	
	$(".prompt34-1").click( function() {
		
	var a = new Date();
	var rightNow = new Date();
    rightNow.setFullYear(2001);
	
	jAlert( "" + a, 'alert ( rightNow ) ', function(r) {
    jAlert( ""+rightNow  , 'alert ( rightNow ) ' )});		
		
	
	
						
	});	




<!-- =====2 alert ===== -->
	
	$(".prompt34-2").click( function() {
		
	var a = new Date();
	var rightNow = new Date();
    rightNow.setMonth(11);
	
	jAlert( "" + a, 'alert ( rightNow ) ', function(r) {
    jAlert( ""+rightNow  , 'alert ( rightNow ) ' )});		
		
	
	
						
	});	




<!-- =====3 alert ===== -->
	
	$(".prompt34-3").click( function() {
		
	var a = new Date();
	var rightNow = new Date();
    rightNow.setDate(15);
	
	jAlert( "" + a, 'alert ( rightNow ) ', function(r) {
    jAlert( ""+rightNow  , 'alert ( rightNow ) ' )});		
		
	
	
						
	});	






<!-- =====4 alert ===== -->
	
	$(".prompt34-4").click( function() {
		
	var a = new Date();
	var rightNow = new Date();
    rightNow.setHours(13);
	
	jAlert( "" + a, 'alert ( rightNow ) ', function(r) {
    jAlert( ""+rightNow  , 'alert ( rightNow ) ' )});		
		
	
	
						
	});	




<!-- =====5 alert ===== -->
	
	$(".prompt34-5").click( function() {
		
	var a = new Date();
	var rightNow = new Date();
    rightNow.setMinutes(05);
	
	jAlert( "" + a, 'alert ( rightNow ) ', function(r) {
    jAlert( ""+rightNow  , 'alert ( rightNow ) ' )});		
		
	
	
						
	});	


	<!-- =====6 alert ===== -->
	
	$(".prompt34-6").click( function() {
		
	var a = new Date();
	var rightNow = new Date();
    rightNow.setSeconds(55);
	
	jAlert( "" + a, 'alert ( rightNow ) ', function(r) {
    jAlert( ""+rightNow  , 'alert ( rightNow ) ' )});		
		
	
	
						
	});	
		
		<!-- =====7 alert ===== -->
	
	$(".prompt34-7").click( function() {
		
	var a = new Date();
	var rightNow = new Date();
    rightNow.setMilliseconds(867);
	
	jAlert( "" + a, 'alert ( rightNow ) ', function(r) {
    jAlert( ""+rightNow  , 'alert ( rightNow ) ' )});		
		
	
	
						
	});	
	
			
			
			
			
			
	/*Rough work		
			
				
											
	
<!-- =====2nd alert ===== -->
$(".prompt").click( function() {
	
	
    var rightNow = new Date();
    alert(rightNow);

    var a = "Hello World";
    alert(a.indexOf("e"));
    
    var b = 45;
    var c = b.toString();

    // Error 
    //alert(rightNow.indexOf("Feb"));	
	
		
	
	
var rightNow = new Date();
    

    var a = "Hello World";
   
    
    var b = 45;
    var c = b.toString();

    // Error 
    //alert(rightNow.indexOf("Feb"));

    var dateString = rightNow.toString();
  
    //var dateString = rightNow.toString();	
	
	
	
jAlert(""+rightNow, 'Confirmation Dialog', function(r) {
                    jAlert(a.indexOf("e") + r, 'Confirmation Results' ,function(s) {
					jAlert(dateString + s, 'Confirmation Results')	
						
					   });	
                });	
	
	
	
	
	
	
});	
	
	
	
///////////////////////////////////////////////////chp33	
						
						
						
						
										
*/});