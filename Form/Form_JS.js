function formValidation()
{

var email =  document.getElementById('email-input');
emailValidation(email, "* Please enter a valid email address *")

var number =  document.getElementById('mobile-input');
numberValidation(number, "* Please enter a valid phone number *")

var password = document.getElementById('password-input');
passwordValidation(password, "* Please enter a valid Password *")
}


function emailValidation(inputtext, alertMsg)
{
var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if(inputtext.value.match(emailExp))
{
  document.getElementById("p3").style.color = "green";
document.getElementById('p3').innerText = "* Entered Email Is Valid *"; 
}
else
{
  //document.getElementById('email-input').style.background =’#FF0000’;
  document.getElementById("p3").style.color = 'red';
document.getElementById('p3').innerText = alertMsg; 
}
}

function passwordValidation(password , alertMsg) {
    var pass = /^(?=.*\d).{8,}$/;

    if(password.value.match(pass)){
      document.getElementById('p1').style.color = "green";
      document.getElementById('p1').innerText = "Entered password is valid";
    }

    else{
      document.getElementById('p1').style.color = "red";
      document.getElementById('p1').style.color = alertMsg;
    }
}


function numberValidation(inputtext, alertMsg)
{
var numericExpression = /^[0-9]+$/;
if(inputtext.value.match(numericExpression)&&inputtext.value.length==10)
{
  document.getElementById("p2").style.color = "green";
document.getElementById('p2').innerText = "* Entered Number Is Valid *";
}
else
{
  //document.getElementById('mobile-input').style.background =’#FF0000’;
  document.getElementById("p2").style.color = 'red';
document.getElementById('p2').innerText = alertMsg;  
}
}
function show()
{
var d = new Date();
document.getElementById("demo").innerHTML = d;
}