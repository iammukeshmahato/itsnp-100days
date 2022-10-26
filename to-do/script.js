function add(){
let input = document.getElementById("input").value;
if(input.length==0){
    alert("Enter Task");
    return false;
}
let elem = document.createElement('li');
document.querySelector("#list").appendChild(elem);
let txt = document.createTextNode(input); elem.appendChild(txt);
input.value=" ";
         }
