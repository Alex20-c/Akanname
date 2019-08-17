var century,year,month,dayOfWeek,day;//Get input
function getinput(){
  century=parseInt(document.getElementById("century").value);
  year=parseInt(document.getElementById("year").value);
  month=parseInt(document.getElementById("month").value);
  dayOfMonth=parseInt(document.getElementById("monthday").value);


  if(century == ""){
    alert("input the correct gender");
    return false;
  }else if(year ==""){
    alert("input the correct year");
    return false;
  }else if(month ==""){
    alert("input the correct month");
    return false;
  }else if(dayOfMonth ==""){
    alert("input the correct date");
    return false;
  }
}
//Calculate func
function calculateDay(){
  getinput();
  dayOfWeek = ((((century/4)-2*century-1) + ((5*year/4) + ((26*(month+1)/10)) +
dayOfWeek)%7)-1;
console.log(dayOfWeek);//Test the calculateDay function
return(Math.floor(dayOfWeek));
if(dayOfWeek<0){
  dayOfWeek=dayOfWeek*-1;
  }
  else if(dayOfWeek>0){
    return dayOfWeek;
  }
}

//main caller func
function checkDayOfWeek(){
  day=calculateDay();
  checkGender();
  console.log("The function runs");//Test checkDayOfWeek function
}

//arrays
let daysOfWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let makeNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];


//get selected radio button
function checkGender(){
  var gen=document.getElementsByName("rads");
  if(gen[0].checked==true){
    var gender="male";
  }else if(gen[1].checked==true){
    var gender="female";
  }else{
    console.log("pass");//Test the radio buttons
  }
  switch(gender){
    case gender="male":
      switch(day){
        
      }
  }
}
