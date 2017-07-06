// console.log( document.getElementById("sun1").innerHTML)

var months=["january","february","march","april","may","june","july","august","september","october","november","december"]
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
var daysinWeek=["sun","mon","tue","wed","thu","fri","sat"];
var span=document.getElementById("today's");


// var forward_month=docuemnt.getElementById("forward_month");
var today=document.getElementById("today");
var forward_month=document.getElementById("forward_month");
var today_date =new Date();

number=setInterval(function(){
  var today_date =new Date();

  span.innerHTML=today_date.toString();

},1000)







function genCal(month,year){
  var table_data=document.getElementsByTagName("td");
  for(i=0;i<table_data.length;i++){
    table_data[i].innerHTML="";
  }
  // console.log(table_data);
  document.getElementById("month").innerHTML=month;
  document.getElementById("year").innerHTML=year;

  month=months.indexOf(month)
  for(var i=1;i<=daysInMonth[month];i++){
    // console.log(i);
    var tempDate=new Date(year,month,i);
    var tempDay=tempDate.getDay();
    var tempDay=daysinWeek[tempDay];
    // console.log(tempDay);
    if(document.getElementById("sat1").innerHTML==""){
      var weekCounter=1;
    }
    else{var weekCounter=2;}
    while(weekCounter<=6){
      var cell=document.getElementById(tempDay+weekCounter);
      var testDate =new Date();
      // console.log(testDate);
      // console.log(tempDate);
      // console.log(testDate.getDate()==tempDate.getDate());
      // if(tempDate.getDate()==testDate.getDate() && tempDate.getDay()==testDate.getDay()&&tempDate.getFullYear()==testDate.getFullYear()){
      //   console.log(tempDate);
      //   console.log("i am here");
      //   cell.style.color="red";
      // }        //displays that cell in red which corresponds to today's date
      // console.log(cell);
      if (cell.innerHTML==""){
        cell.innerHTML=i;
        break;
        // console.log(cell.innerHTML=i);
      }

      weekCounter++;
    }

  }

};

function DisplayToday(){
  var todayDate= new Date();
  var todayMonth= todayDate.getMonth();

  var todayMonth=months[todayMonth];
  var todayYear=todayDate.getFullYear();
  // console.log(todayMonth);
  // console.log(todayYear);
  genCal(todayMonth,todayYear);
}
DisplayToday();
today.addEventListener("click",function(){
  var todayDate= new Date();
  var todayMonth= todayDate.getMonth();
  span.innerHTML=todayDate.toString();
  var todayMonth=months[todayMonth];
  var todayYear=todayDate.getFullYear();
  // console.log(todayMonth);
  // console.log(todayYear);
  var tempDate=new Date();
  var tempDay=tempDate.getDay();
  var tempDay=daysinWeek[tempDay]
  // console.log(tempDay);
  // cell.document.getElementById('id')
  genCal(todayMonth,todayYear);
});
forward_month.addEventListener("click",function(){
  var current_month=document.getElementById("month").innerHTML;
  var current_month=months.indexOf(current_month);
  var current_year=parseFloat(document.getElementById("year").innerHTML);
  if (current_month==11){
    var next_month=0;
  }else{next_month=current_month+1;};
  next_month=months[next_month];
  genCal(next_month,current_year);

})

rewind_month.addEventListener("click",function(){
  var current_month=document.getElementById("month").innerHTML;
  var current_month=months.indexOf(current_month);
  var current_year=parseFloat(document.getElementById("year").innerHTML);
  if (current_month==0){
    var next_month=11;
  }else{next_month=current_month-1;};
  next_month=months[next_month];
  genCal(next_month,current_year);

})

forward_year.addEventListener("click",function(){
  var current_month=document.getElementById("month").innerHTML;
  var current_month=months.indexOf(current_month);
  var current_month=months[current_month];
  var current_year=parseFloat(document.getElementById("year").innerHTML);
  genCal(current_month,current_year+1);

})

rewind_year.addEventListener("click",function(){
  var current_month=document.getElementById("month").innerHTML;
  var current_month=months.indexOf(current_month);
  var current_month=months[current_month];
  var current_year=parseFloat(document.getElementById("year").innerHTML);
  genCal(current_month,current_year-1);

})
