let balance = Number(localStorage.getItem("balance")) || 0;
let adsToday = Number(localStorage.getItem("adsToday")) || 0;

updateUI();

async function watchAd(){

if(adsToday >= 100){
alert("Daily limit reached!");
return;
}

try{

await showRewardedAd();

balance += 0.05;
adsToday++;

localStorage.setItem("balance", balance);
localStorage.setItem("adsToday", adsToday);

updateUI();

alert("Ad completed! +0.05 BDT");

}

catch{

alert("Ad failed");

}

}

function updateUI(){

document.getElementById("balance").innerText =
balance.toFixed(2);

document.getElementById("ads").innerText =
adsToday;

}
