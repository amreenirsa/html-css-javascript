// JavaScript Document




var users=[];

function submituser(){
	
var studentName= prompt("");


users.push[studentName];



document.getElementById("showdata").innerHTML+="<tr>"+'<th>'+'<img src="img/adduser-01.png" />'+"</th>"+"<th id='headt'>"+studentName+"</th>"+'<th id="headadd"> <img  src="img/add-01.png" onclick="submituser()"></th>'+"</tr>";


}

