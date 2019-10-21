// JavaScript Document



var index=0;
var data=[];

function add(){
	
var studentName=document.getElementById("studentName").value;


data.push({Name:studentName});

document.getElementById("showStudentData").innerHTML+="<tr>"+'<th>'+index+"</th>"+"<td>"+studentName+"</td>"+'<td><span  onclick="deleteStudent('+index+')">&#x2716</span></td>'+"</tr>";

index=index+1;

document.getElementById("studentName").value="";
}

function deleteStudent(id){for(var i=0;i<data.length;i++)
{
	if(i==id){data.splice(i,1);
	document.getElementById("showStudentData").innerHTML=""}}
	reAssign()}
	
	
	function reAssign(){
    for(var i=0;i<data.length;i++)
	{document.getElementById("showStudentData").innerHTML+="<tr>"+'<th>'+i+"</th>"+"<td>"+ data[i].Name+"</td>"+'<td><span  onclick="deleteStudent('+i+')">&#x2716</span></td>'+"</tr>"}index=data.length}