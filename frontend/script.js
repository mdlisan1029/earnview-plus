let balance = 0;
let adsToday = 0;

async function watchAd(){

try{

await showRewardedAd();

alert("Ad returned successfully");

}

catch(e){

alert("Error : " + e);

}

}
