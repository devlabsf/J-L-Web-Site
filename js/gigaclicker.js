
var autoWorkerStarted1 = false;
var autoWorkerStarted2 = false;
var autoWorkerStarted3 = false;
var score = 0;
var news_items = [
  "RIP Jayden",
  "RIP Jayden",
]

function clickPet(){
  score++;  
  update();
}

function autoWorkerStarter(amount){
 setInterval(function(){ clickPet(); } , amount);
 }
function enableBunny(){
if (score > 20 )
}


function update(){
  
  document.getElementById("playerScore").innerHTML = "Coins: " + score;
  if (score > 20 && autoWorkerStarted1 == false){
    autoWorkerStarted1 = true
    document.getElementById("info").innerHTML = "Unlocked clicker!";
    autoWorkerStarter(10000)
    
  } else if (score > 45 && autoWorkerStarted2 == false) {
    autoWorkerStarted2 = true
    document.getElementById("info").innerHTML = "Unlocked clicker 2!";
    autoWorkerStarter(7000)
    
  } else if (score > 75 && autoWorkerStarted3 == false) {
    autoWorkerStarted3 = true
    document.getElementById("info").innerHTML = "Unlocked clicker 3!";
    autoWorkerStarter(6500)
    
  }
}

setInterval(function(){ update(); } , 1000);

