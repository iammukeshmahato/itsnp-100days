var audio = document.getElementById('audio');  
var title = document.getElementById("title");
let song ={
    peaches:"https://connectloaded.com/wp-content/uploads/2021/03/Justin-Bieber-Peaches-ft.-Daniel-Caesar-Giveon.mp3?_=3",
whatdoyoumean: "https://muxicplays.com/wp-content/uploads/2022/07/Justin-Bieber-What-Do-You-Mean.mp3?_=1",
};    
function pausesong(){
    audio.pause();
}
function nextsong(){
     title.innerText="What Do you Mean"
    audio.src=song.whatdoyoumean;
    audio.play();
}
function previoussong(){
title.innerText="Peaches";
    audio.src=song.peaches;
    audio.play();
}



function playsong(){
    audio.play();   
}
