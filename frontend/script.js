let balance =
Number(localStorage.getItem("balance"))
|| 0;


let adsToday =
Number(localStorage.getItem("adsToday"))
|| 0;


updateUI();



async function watchAd(){


if(adsToday>=100){

return;

}


try{


await showRewardedAd();


adsToday++;


localStorage.setItem(

"adsToday",

adsToday

);


updateUI();


}


catch(e){


console.log(e);


}


}



function updateUI(){


document.getElementById(

"balance"

).innerText=

balance.toFixed(2);



document.getElementById(

"ads"

).innerText=

adsToday;


}
