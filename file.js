 function generateName() {
var date = document.getElementById("date").value
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
var birthDay = new Date(year+'/'+month+'/'+date);

var dayOfWeek = birthDay.getDay();

var male = document.getElementById("male").checked;
var female = document.getElementById("female").checked;
 

  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  

 if(date<= 0 || date> 31){
  alert ("Please enter valid date")
}

 else if(month<=0 || month>12){
alert ("Please enter valid month")
 }
else if((female === false) && (male === false)){
 alert ("Please select gender")
}


  if (male === true){
       document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[birthDay]+ " and your name is " +  maleName[birthDay];
       }
  else if (female === true) {
           document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[birthDay]+ " and your name is " +  femaleName[birthDay];
       }
    
}







