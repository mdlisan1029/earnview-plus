async function watchAd(){

try{

alert("Calling Popup");

await showRewardedAd();

alert("Popup Opened");

}

catch(e){

alert("Popup Failed");

}

}
