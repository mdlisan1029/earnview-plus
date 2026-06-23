let balance = 0;
let adsToday = 0;


async function watchAd(){

try{

await showRewardedAd();

adsToday++;

document.getElementById("ads").innerText = adsToday;

}

catch(e){

console.log(e);

}

}


document.getElementById("balance").innerText =
balance.toFixed(2);
