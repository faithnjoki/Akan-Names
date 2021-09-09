 function generateName() {
let tarehe = document.getElementById("date").value;
let mwezi = document.getElementById("month").value;
let mwaka = document.getElementById("year").value;
let genders = document.getElementById("gender").value;
//syntax for getting data from selections
let gender = genders.options[genders.selectedIndex].text

let century = yearOfBirth.slice(0,2);
let year = yearOfBirth.slice(2,4);


 //formulagiven
 var dayOfBirth = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
  var dayOfBirth = Math.floor(dayOfBirth);
 

if(date<= 0 || date> 31){
  alert("Invalid day");
}
if(month<=0 || month>12){
  alert ("Invalid month")
}

  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

  

  if (gender === "Male") {
       document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  maleName[dayOfBirth -1];
       }
       else if (gender === "Female") {
           document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  femaleName[dayOfBirth -1];
       }
    
}







