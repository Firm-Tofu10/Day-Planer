// var today = new Date();
// var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(); 


// document.getElementById("currentDay").textContent = date;
 // (This was my first attempt at adding the time. Later I was told by a tuitor that this was good but movment.js would work slitly better for this project. This ended up being good advise as I saw the why of this while writing in JS.)

setInterval(function(){
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
 },1000); //This is calling the time every millisecond


 $(".btn").on("click",function(){
   var userplan = $(this).siblings(".textBox").val()
   var currenthour = $(this).attr("id");
   console.log(userplan,currenthour);
   localStorage.setItem(currenthour,userplan);
 })//This funtion lets the user save there plan for the day to a certain time of day.
 var currentHour = moment().hours()
 for (let i = 6; i < 25; i++) {
   $("#"+ i).siblings(".textBox").val(localStorage.getItem(i))
   if(i<currentHour){
    $("#"+ i).siblings(".textBox").addClass("bg-danger")
   }else if(i == currentHour) {
    $("#"+ i).siblings(".textBox").addClass("bg-success")
   }else{
    $("#"+ i).siblings(".textBox").addClass("bg-primary")
   } //This is storing the users data to localStorage then calling that data after refreshing the page.
 };

 //$( function() {
 //   $( "#sortable" ).sortable();
 // } );