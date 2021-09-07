function generateName(){
  var name =document.getElementById("name").value;
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value;
  var genders = document.getElementById("gender");
   
  //male
  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


  //female
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];







  var dayOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];

   var genders = document.getElementById("gender");
   var gender = genders.options[genders.selectedIndex].text;

  var century = yearOfBirth.slice(0,2);
  var year = yearOfBirth.slice(2,4);

  
  var gender = genders.options[genders.selectedIndex].text;

  
  
  var dayOfBirth = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date )%7;
  var dayOfBirth = Math.floor(dayOfBirth);


  if (gender === "Male") {
       document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth]+ " and your name is " +  maleName[dayOfBirth];
       }
       else if (gender === "Female") {
           document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth]+ " and your name is " +  femaleName[dayOfBirth];
       }   
}
