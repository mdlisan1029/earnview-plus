Telegram.WebApp.ready();

alert(Telegram.WebApp.platform);

alert(JSON.stringify(Telegram.WebApp.initDataUnsafe));

let balance = 0;
let adsToday = 0;

async function watchAd(){

alert("Button clicked");

try{

await showRewardedAd();

alert("SDK finished");

}

catch(e){

alert("Error : " + JSON.stringify(e));

}

}
