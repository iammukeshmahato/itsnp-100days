function calculate(){
    let a = document.getElementById('principal').value;
    let b = document.getElementById('rate').value;
     let c = document.getElementById('time').value;
     var d = (a*b*c)/100;
     document.getElementById('result').innerText = "Interest: " + d;
     
}
