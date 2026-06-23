let adsToday = 0;

async function watchAd(){

    try{

        await showRewardedAd();

        adsToday++;

        document.getElementById("ads").innerText = adsToday;

    }

    catch(e){

    }

}
