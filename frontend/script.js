let balance = 0;
let adsToday = 0;

async function watchAd() {

    try {

        await showRewardedAd();

        adsToday++;

        document.getElementById("ads").innerText = adsToday;

        document.getElementById("balance").innerText =
        balance.toFixed(2);

    }

    catch (e) {

        // কিছুই দেখাবে না

    }

}
