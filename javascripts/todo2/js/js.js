// JavaScript Document

function addEle(){
	
	// create li
      var li = document.createElement("li");
	  var inputValue = document.getElementById("inputvalue").value;
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	 // show data 
	 
	
      if (inputValue === '') {
      alert("Please enter the task !");
      } 
	  
	  else {
      document.getElementById("mydata").appendChild(li);
	   document.getElementById("inputvalue").value = "";
      }
	
	 
	   
	   //create cross button 
	  var removeButton = document.createElement("span");
      removeButton.className = "glyphicon glyphicon-remove-sign";
      var z = li.appendChild(removeButton);

	  // remove child
	  z.onclick = function abc() {
    //  this.parentElement.removeChild(this);
	  li.remove();
      };
      
	
	   
 	 // up button
	   
	   
	  var upButton = document.createElement("span");
	  upButton.className = "glyphicon glyphicon glyphicon-circle-arrow-up";
      var b = li.appendChild(upButton );
	  
	  
	  b.onclick = function xyz() {
      
	 li.parentNode.insertBefore(li, li.previousSibling);
	 
      };
	   
	 
      // down button
	   
	   
	  var downButton = document.createElement("span");
	  downButton.className = "glyphicon glyphicon-circle-arrow-down";
	 
	  
	   
	  
	  
      var c = li.appendChild(downButton);
	  
	  
	  c.onclick = function zzz() {
      
	   
	  li.parentNode.insertBefore(li,li.nextSibling.nextSibling);
     
      };
       
	   
	   
	
	  
    }
    