// var today = new Date();
// var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(); 


// document.getElementById("currentDay").textContent = date;
 setInterval(function(){
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
 },1000);


 $(".btn").on("click",function(){
   var userplan = $(this).siblings(".textBox").val()
   var currenthour = $(this).attr("id");
   console.log(userplan,currenthour);
   localStorage.setItem(currenthour,userplan);
 })
 var currentHour = moment().hours()
 for (let i = 6; i < 25; i++) {
   $("#"+ i).siblings(".textBox").val(localStorage.getItem(i))
   if(i<currentHour){
    $("#"+ i).siblings(".textBox").addClass("bg-danger")
   }else if(i == currentHour) {
    $("#"+ i).siblings(".textBox").addClass("bg-success")
   }else{
    $("#"+ i).siblings(".textBox").addClass("bg-primary")
   }
 };

 $( function() {
    $( "#sortable" ).sortable();
  } );