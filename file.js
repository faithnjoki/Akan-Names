 function generateName() {
var date = document.getElementById("date").value
var year = document.getElementById("year").value;
var birthDay = newDate(year+'/'+month+'/'+date);
var dayOfWeek = birthDay.getDay();
var male = document.getElementById("male").checked;
var female = document.getElementById("female").checked;


//syntax for getting data from selections;
var month = document.getElementById("month").value;
//var gender = genders.options[genders.selectedIndex].text

var century = yearOfBirth.slice(0,2);
//let year = yearOfBirth.slice(2,4);


 //formulagiven
 var dayOfBirth = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
 var dayOfBirth = Math.floor(dayOfBirth);
 


  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

 if(date<= 0 || date> 31){
 document.getElementById("Error").innerHTML = "Please enter valid date"
}
else if(month<=0 || month>12){
  document.getElementById("Error").innerHTML = "Please enter valid Month"
}
else if((female === false) && (male === false)){
  document.getElementById("Error").innerHTML = "Please select gender"
}


  else if (male === true){
       document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[birthDay]+ " and your name is " +  maleName[birthDay];
       }
  else if (female === true) {
           document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[birthDay]+ " and your name is " +  femaleName[birthDay];
       }
    
}







