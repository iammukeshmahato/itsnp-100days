let ok = confirm("Let's Hack NASA 😂");
let list = document.querySelector("#list");
if (ok == true) {
    hack();
}
else {
    list.innerHTML = "<h2> Hack Cancelled</h2>";
}
function hack() {
    setTimeout(updateProgress, 1000, "Initializing Hack...");
    setTimeout(updateProgress, 3000, "Connection Established. Hacking Started...");
    setTimeout(updateProgress, 5000, "25% Hacking Completed...");
    setTimeout(updateProgress, 7000, "50% Hacking Completed...");
    setTimeout(updateProgress, 9000, "75% Hacking Completed...");
    setTimeout(updateProgress, 11000, "100% Hacking Complete");
}

function updateProgress(message) {
    let txt = document.createElement('li');
    let txt1 = document.createTextNode(message);
    let hi = txt.appendChild(txt1);
    list.appendChild(hi);
    list.appendChild(document.createElement('br'));
    if (list.lastChild.previousSibling.textContent.includes("100%")) {
        img();
    }
}
function img() {
    document.querySelector("#img").style.display = "block";
}
