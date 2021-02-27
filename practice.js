function customTag(element,classname,idname){
    var tag = document.createElement(element);
    tag.setAttribute("class",classname);
    tag.setAttribute("id",idname);
    tag.setAttribute("required","true");
    return tag;
}
function labelTag(element,labname){
    var lab = document.createElement(element);
    lab.setAttribute("for",labname);
    return lab;
}

var container = customTag("form","box","box");
var row=customTag("div","row","row1");
var col=customTag("div","col-4 offset-4","col1");

var firstName = customTag("input","form-control mt-1","fname");
firstName.setAttribute("name","/")
var ftitle = labelTag("label","fname");
ftitle.innerHTML="FirstName";

var lastName = customTag("input","form-control mt-1","lname");
var ltitle = labelTag("label","lname");
ltitle.innerHTML="LastName";

var mail = customTag("input","form-control mt-1","mlname");
mail.setAttribute("type","email");
var mtitle = labelTag("label","mlname");
mtitle.innerHTML="E-mail";

var num = customTag("input","form-control mt-1","num");
num.setAttribute("type","text");
var numtitle = labelTag("label","num");
numtitle.innerHTML="Mobile Number";

var m = customTag("input","btn btn-danger mt-1","male");
m.setAttribute("type","radio");
m.setAttribute("value","male");
m.setAttribute("name","gender");
var male = labelTag("label","male");
male.innerHTML="Male";

var line = document.createElement("div");
line.setAttribute("class","form-control mt-1");

var f = customTag("input","btn btn-danger mt-1","Female");
f.setAttribute("type","radio");
f.setAttribute("value","female");
f.setAttribute("name","gender");
var Female = labelTag("label","Female");
Female.innerHTML="Female";
line.innerHTML = "Gender : ";
line.append(f,Female,m,male);

var msg = customTag("textarea","form-control mt-1","msg");
var mstitle = labelTag("label","msname");
mstitle.innerHTML="Address";

var submit = customTag("input","btn btn-danger form-control mt-3","submit");
submit.setAttribute("type","submit");

col.append(ftitle,firstName,ltitle,lastName,line,mtitle,mail,numtitle,num,mstitle,msg,submit);
row.append(col);
container.append(row);
document.body.append(container);

container.addEventListener('submit',function (e){
    e.preventDefault();
    var out = document.getElementById("demo");
    var value= document.getElementById("fname").value;
    alert("Thank you "+ value);
    var row = document.createElement("tr");
    var cl1 = document.createElement("td");
    var cl2 = document.createElement("td");
    var cl3 = document.createElement("td");
    var cl4 = document.createElement("td");
    var cl5 = document.createElement("td");
    var cl6 = document.createElement("td");
    cl1.style.border ="2px solid black";
    cl2.style.border ="2px solid black";
    cl3.style.border ="2px solid black";
    cl4.style.border ="2px solid black";
    cl5.style.border ="2px solid black";
    cl6.style.border ="2px solid black";
    cl1.innerHTML = document.getElementById("fname").value;
    cl2.innerHTML = document.getElementById("lname").value;
    cl3.innerHTML = document.querySelector('input[name=gender]:checked').value;
    cl4.innerHTML = document.getElementById("mlname").value;
    cl5.innerHTML = document.getElementById("num").value;
    cl6.innerHTML = document.getElementById("msg").value;
    row.append(cl1,cl2,cl3,cl4,cl5,cl6);
    out.append(row);
    container.reset();
});