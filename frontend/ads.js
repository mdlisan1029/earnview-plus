async function showRewardedAd() {

alert("Calling Monetag");

setTimeout(() => {
alert("Still waiting...");
}, 5000);

try {

let result = await show_11176239();

alert("Ad Finished");

return result;

}

catch(e){

alert("Error");

alert(JSON.stringify(e));

}

}
