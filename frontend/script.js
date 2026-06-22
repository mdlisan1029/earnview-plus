alert(window.Telegram?.WebApp?.initDataUnsafe?.user?.id);

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
