// JavaScript Document

var count=1;
studentData =[];

 function f1() {
 var studentName = document.getElementById("studentName").value;
 var studentAge = document.getElementById("studentAge").value;
  var studentAdd = document.getElementById("studentAdd").value;
  //studentData.push(studentName,studentAge,studentAdd);
 document.getElementById('f1').innerHTML += "<tr>" + 
                                             "<th id='th1'>" + count +"</th>"+
											 "<td>" + studentName +"</td>"+
											 "<td>" + studentAge +"</td>"+
											 "<td>" + studentAdd +"</td>" +
								     "<td>"+ '<div onclick="myFunction('+count+')">delete</div>'+"</td>"
        +"</tr>" ;
		
		// a= studentData.push(studentName,studentAge,studentAdd);
		 
		 //b = studentData.pop(studentName,studentAge,studentAdd);
		 
		 
		 
		studentData.push(studentName,studentAge,studentAdd);
       

 	count ++;
     
        }
function myFunction(index) {

	alert(index)	
	document.getElementById('f1').innerHTML = '';
	// delete current item
	studentData ;
	

	//loop
 document.getElementById('f1').innerHTML += "<tr>" + 
                                             "<th>" + studentData[i]count +"</th>"+
											 "<td>" + studentName +"</td>"+
											 "<td>" + studentAge +"</td>"+
											 "<td>" + studentAdd +"</td>" +
								     "<td>"+ '<div onclick="myFunction('+count+')">delete</div>'+"</td>"
        +"</tr>" ;
}