function clickedOnNo(clickedNo){

    document.getElementById(clickedNo).style.visibility="hidden";

    // let random=Math.floor((Math.random()*(6-1))+1);
    // let randomGifPosition="gifOfNo-"+random;
    // let previousGifPosition;

    let randomLeft= Math.floor((Math.random()*(85-0))+0);
    let randomTop= Math.floor((Math.random()*(85-0))+0);
    let positionLeft= randomLeft+"vw";
    let positionTop= randomTop+"vh";
    document.getElementById("no2").style.visibility="visible";
    document.getElementById("no2").style.left=positionLeft;
    document.getElementById("no2").style.top=positionTop;

    // document.getElementById(previousGifPosition).style.visibility="hidden";
    // document.getElementById(randomGifPosition).style.visibility="visible";
    // previousGifPosition=randomGifPosition;
    // document.getElementById("gifOfNO").style.left=positionLeft;
    // document.getElementById("gifOfNO").style.top=positionTop;
    // document.querySelector("#gifOfNo").classList.toggle("hidden");
 
    let gifRandomLeft= Math.floor((Math.random()*(85-0))+0);
    let gifRandomTop= Math.floor((Math.random()*(85-0))+0);
    let gifPositionTop= gifRandomTop+"vh";
    let gifPositionLeft=gifRandomLeft+"vw";
    document.getElementById("gifOfNo-1").style.visibility="visible";
    document.getElementById("gifOfNo-1").style.left=gifPositionLeft;
    document.getElementById("gifOfNo-1").style.top=gifPpositionTop;
}

// function gifInterval(){

//     let random=Math.floor((Math.random()*(6-1))+1);
//     let randomGifPosition="gifOfNo-"+random;
//     document.getElementById(randomGifPosition).style.visibility="visible";
//     let randomLeft= Math.floor((Math.random()*(85-0))+0);
//     let randomTop= Math.floor((Math.random()*(85-0))+0);
//     let positionLeft= randomLeft+"vw";
//     let positionTop= randomTop+"vh";
//     document.getElementById("gifOfNo-1").style.visibility="visible";
//     document.getElementById("gifOfNo-1").style.left=positionLeft;
//     document.getElementById("gifOfNo-1").style.top=positionTop;

// }
//  setInterval(gifInterval,3000);

function clickedOnYes(){
    document.getElementById("tab1").style.visibility="hidden";
    document.getElementById("no1").style.visibility="hidden";
    document.getElementById("no2").style.visibility="hidden";
    document.getElementById("gifOfNo-1").style.visibility="hidden";

    document.getElementById("tab2").style.visibility="visible";
}