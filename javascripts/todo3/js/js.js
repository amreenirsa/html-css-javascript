// JavaScript Document




var index=0;
var data=[];
 var x = new Date();
    var date = x.getDate()+" - ";
    var month = x.getMonth()+1 + " - ";
    var year = x.getFullYear() + " At ";
    var timeInHours = x.getHours() + " : ";
    var timeInMinutes = x.getMinutes() ;
	var time = date + month + year + timeInHours + timeInMinutes;
	
	
	 
function add(){
	
var personName=document.getElementById("name").value;


var taskName=document.getElementById("task").value;
  if (personName === ''  ) {
      alert("You must write task name!");
      }
	else if (taskName === '' ) {
      alert("You must write task details.!");
      }  
	  
	  
	  
	  
	  
	  
	   else {
     
    


data.push({Task:taskName, Name:personName});


   

document.getElementById("showStudentData").innerHTML += '<input class="strikethrough" type="checkbox" onClick="checkboxes();" >' +'<button class="accordion strikeThis">'  + index + "." + personName +'</button>'+'<div class="panel">' + taskName +"<br>"+ '<span class ="time">'+ "Posted Time : " + time  +'</div>';



var acc = document.getElementsByClassName("accordion");
var m;

for (m = 0; m < acc.length; m++) {
  acc[m].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

index=index+1;

document.getElementById("task").value="";

document.getElementById("name").value ="";


document.getElementById('total_added').innerHTML = "Total number of tasks added = " + index;
document.getElementById('remaining').innerHTML = "Number of tasks remaining = " + index;





}  }



function checkboxes(){
	    var inputElems = document.getElementsByTagName("input"),
        count = 0;
for (var i=0; i<inputElems.length; i++) { 

   
if (inputElems[i].type == "checkbox" && inputElems[i].checked == true) {
    count--;
	
	var cc = count + index  ;
   document.getElementById('remaining').innerHTML = "Number of tasks remaining = " + cc;
}
else if(inputElems[i].type == "checkbox" && inputElems[i].checked == false) {
    
	
	var cc = count + index  ;
   document.getElementById('remaining').innerHTML = "Number of tasks remaining = " + cc;
}


}}



