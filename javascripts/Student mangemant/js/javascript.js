var count=0;

var StudentData=[];
function f1(){
	
var studentName=document.getElementById("studentName").value;

var studentAge=document.getElementById("studentAge").value;

var studentAddress=document.getElementById("studentAddress").value;

StudentData.push({Name:studentName,Age:studentAge,Address:studentAddress});

document.getElementById("f2").innerHTML+="<tr>"+"<th>"+count+"</th>"+"<td>"+studentName+"</td>"+"<td>"+studentAge+"</td>"+"<td>"+studentAddress+"</td>"+"<td>" + '<img src="img/trash-01.png"  onclick="deleteStudent('+count+')">  '+ "</td>"+"</tr>";

count=count+1;

document.getElementById("studentName").value="";

document.getElementById("studentAge").value="";

document.getElementById("studentAddress").value="";}

function deleteStudent(f3){for(var i=0;i<StudentData.length;i++)

{if(i==f3){StudentData.splice(i,1);

document.getElementById("f2").innerHTML=""}} repeat()}

function  repeat(){for(var i=0; i<StudentData.length ; i++){
	
document.getElementById("f2").innerHTML+="<tr>"+"<th>"+i+"</th>"+"<td>"+StudentData[i].Name+"</td>"+"<td>"+StudentData[i].Age+"</td>"+"<td>"+StudentData[i].Address+"</td>"+"<td>" +'<img src="img/trash-01.png"  onclick="deleteStudent('+i+')">' + "</td>"+"</tr>"}

count=studentData.length;}



