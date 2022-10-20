function century(){
var year = document.getElementById('year').value;
var month = document.getElementById('month').value;
var date = document.getElementById('date').value;
if(month > 12){
    alert('Enter a valid Month');
    return 0;
}
if(date > 32){
    alert('Emter a valid date');
    return 0;
}
    var century = year / 100;
    var result = Math.ceil(century);
    document.getElementById('century').innerText=result;
var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var d =new Date(year, month, date);
    //complete the function
  var result1 = names[d.getDay()];
    
   document.getElementById('day').innerText=result1;
   
