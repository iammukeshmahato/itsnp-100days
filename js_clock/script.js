  
setInterval(function(){
  let d = new Date();
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let yr = d.getFullYear();
    let mnth = d.getMonth();
    let date = d.getDate();
    let day = days[d.getDay()];
    

    let final = `${hour} : ${min} : ${sec}`;
    let dates = `<u>${yr} - ${mnth} - ${date}</u><br>${day}<br>`;
    document.getElementById('btn').innerHTML=final;
 document.getElementById('button').innerHTML=dates;
},100);
