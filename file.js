function generateName(){
  var date = document.getElementById('date').value;
  var month = document.getElementById('month').value;
  var yearOfBirth = document.getElementById('year').value; 
  var male = document.getElementById("male").checked; 
  var female=document.getElementById("female").checked;
   
  //male
  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  //female
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];

  var dayOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];

  var century = yearOfBirth.slice(0,2);
  var year = yearOfBirth.slice(2,4);
  
  //((CC/4)-2*CC-1) +((5*YY/4) )+ ((26*(MM+1)/10)) + DD )



  var dayOfBirth = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) +  dayOfWeek )
  var dayOfBirth = Math.floor(dayOfBirth);


  if (gender === "Male") {
       document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth -1]+ " and your name is " +  maleName[dayOfBirth -1];
       }
       else if (gender === "Female") {
           document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth -1]+ " and your name is " +  femaleName[dayOfBirth -1];
       }   
}


