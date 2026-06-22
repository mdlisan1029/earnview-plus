let balance = 0;
let adsToday = 0;

async function watchAd(){

try{

await showRewardedAd();

adsToday++;

document.getElementById("ads").innerText = adsToday;

alert("Ad completed!");

}

catch{

alert("Ad failed");

}

}

document.getElementById("balance").innerText =
balance.toFixed(2);
