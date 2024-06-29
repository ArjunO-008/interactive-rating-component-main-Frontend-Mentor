const submitBtn = document.getElementById("submitBtn");
const rateDisplay = document.getElementById("rate");
const resultdisplay = document.getElementById("thankState");
const rateResult = document.getElementById('rateResult');

let rateTiles = document.querySelectorAll(".rateTiles");

let rateVal = 0;
let finalVal;

function setRating(rate){

    //To Check Whether the same tile is opted.
    if(rate !== rateVal){
    rateTiles.forEach(tiles => {
        //Traverse through classList to find alreday a tile is active.
        if(tiles.classList.contains('clicked')){
            tiles.classList.remove('clicked');   
                   
        }
    });
  }
  //Add or Remove "clicked" class to tile.
  rateTiles[rate - 1].classList.toggle("clicked");  
  rateVal = parseInt(rate);
    
}
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    //Finalize the rating value.
   for(const tiles of rateTiles){
    if(tiles.classList.contains('clicked')){
        finalVal = rateVal;
        break;
    }else{
        finalVal = 0;
    }    
   };

   rateDisplay.style.display = "none";
   resultdisplay.style.display = "flex";
   rateResult.innerText = `You selected ${finalVal} out of 5`;
})