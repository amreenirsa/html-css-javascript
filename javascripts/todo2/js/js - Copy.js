// JavaScript Document

function addEle(){
	
	// create li
      var li = document.createElement("li");
	  var inputValue = document.getElementById("inputvalue").value;
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	 // show data 
	 
	 
     /* if (inputValue === '') {
      alert("You must write something!");
      } else {
      document.getElementById("mydata").appendChild(li);
      }*/
	  document.getElementById("mydata").appendChild(li);
	   
	   
	
	   
 	 // up button
	   
	   
	  var upButton = document.createElement("button");
      var txt = document.createTextNode("up");
      upButton .appendChild(txt);
      var b = li.appendChild(upButton );
	  
	  
	  b.onclick = function xyz() {
      li.parentNode.insertBefore(li, li.previousSibling);
     
      };
	   
	 
      // down button
	   
	   
	  var downButton = document.createElement("button");
      var txt = document.createTextNode("down");
      downButton .appendChild(txt);
      var c = li.appendChild(downButton );
	  
	  c.onclick = function zzz() {
      li.parentNode.insertBefore(li,li.nextSibling.nextSibling);
     
      };
       
	   
	   
	//create cross button 
	  var removeButton = document.createElement("button");
      var txt = document.createTextNode("remove");
      removeButton.appendChild(txt);
      var z = li.appendChild(removeButton);

	  // remove child
	  z.onclick = function abc() {
      this.parentElement.removeChild(this);
	  
      };
      
	  
    }
    