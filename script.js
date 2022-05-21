var today = new Date();
var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(); 
document.getElementById("currentDate").innerHTML = date;
 
 
 $( function() {
    $( "#sortable" ).sortable();
  } );