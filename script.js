// var today = new Date();
// var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(); 


// document.getElementById("currentDay").textContent = date;
 setInterval(function(){
$("#currentDay").textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
 },1000);


 $(".btn").on("click",function(){
   var userplan = $(this).siblings(".textBox").val()
   var currenthour = $(this).attr("id");
   console.log(userplan,currenthour);
 })

 $( function() {
    $( "#sortable" ).sortable();
  } );