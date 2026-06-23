async function watchAd(){

    const result = await showRewardedAd();

    if(result && result.done){

        alert("Reward granted");

    }

}
