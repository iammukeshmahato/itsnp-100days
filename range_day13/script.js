function change(){
let input = document.getElementById('in').value;
    var size =input * 2;
  document.getElementById("value").innerText=input;
  let img = document.getElementById("img");
  img.height=size;
  img.width=size;
}
