let ok = confirm("Let's Hack NASA 😂");
let list = document.querySelector("#list");
if (ok==true){
    hack();
   
}
else{
    list.innerHTML="<h2> Hack Cancelled</h2>";
}
function hack(){
    setTimeout(start,1000);
    setTimeout(started,3000);
    setTimeout(c25,5000);
    setTimeout(c50,7000);
    setTimeout(c75,9000);
    setTimeout(c100,11000);
}
function start(){
    let txt = document.createElement('li');
    let txt1 = document.createTextNode("Initializing Hack...");
    let hi = txt.appendChild(txt1);
   list.appendChild(hi);
  list.appendChild(document.createElement('br'));
}
function started(){
    let txt = document.createElement('li');
    let txt1 = document.createTextNode("Connection Established. Hacking Started...");
    let hi = txt.appendChild(txt1);
   list.appendChild(hi);
   list.appendChild(document.createElement('br'));
}
function c25(){
    let txt = document.createElement('li');
    let txt1 = document.createTextNode("25% Hacking Completed...");
    let hi = txt.appendChild(txt1);
   list.appendChild(hi);
   list.appendChild(document.createElement('br'));
}
function c50(){
    let txt = document.createElement('span');
    let txt1 = document.createTextNode("50% Hacking Completed...");
    let hi = txt.appendChild(txt1);
   list.appendChild(hi);
   list.appendChild(document.createElement('br'));
}

function c75(){
    let txt = document.createElement('span');
    let txt1 = document.createTextNode("75% Hacking Completed...");
    let hi = txt.appendChild(txt1);
   list.appendChild(hi);
   list.appendChild(document.createElement('br'));
}
function c100(){
    let txt = document.createElement('span');
    let txt1 = document.createTextNode("100% Hacking Complete");
    let hi = txt.appendChild(txt1);
   list.appendChild(hi);
   img();
}
function img(){ 
document.querySelector("#img").style.display="block";
}
