const AdController = window.Adsgram.init({
    blockId: "36003"
});

async function showRewardedAd() {

    try {

        const result = await AdController.show();

        return result;

    }

    catch(error){

        return null;

    }

}
