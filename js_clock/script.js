function times(n){
    if(n<10){
        return "0"+n;
    }
    else{
        return n;
    }
}
function start(){
  let d = new Date();
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
    let hour = times(d.getHours());
    let min = times(d.getMinutes());
    let sec = times(d.getSeconds());
    let yr = d.getFullYear();
    let mnth = d.getMonth();
    let date = d.getDate();
    let day = days[d.getDay()];
    

    let time = `${hour} : ${min} : ${sec}`;
    let dates = `<u>${yr} - ${mnth} - ${date}</u><br>${day}<br>`;
    document.getElementById('btn').innerHTML=time;
 document.getElementById('button').innerHTML=dates;
}
setInterval(start,100);
