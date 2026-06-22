async function showRewardedAd(){

alert("Calling Monetag");

try{

let result = await show_11176239();

alert("Returned : " + JSON.stringify(result));

return result;

}

catch(e){

alert("Error : " + JSON.stringify(e));

throw e;

}

}
