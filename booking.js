document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenuIcon.addEventListener("click", function () {
        mobileMenu.classList.toggle("open");
    });
});




//Declaring the dom elements
const roomTypeInput =document.getElementById("roomType")
const numberOfRoomsInput =document.getElementById("numberOfRooms")
const numberOfAdultsInput =document.getElementById("numberOfAdults")
const numberOfChildrenInput =document.getElementById("numberOfChildren")
const extraBedsInput =document.getElementById("extraBeds")
const durationInput =document.getElementById("duration")
const promoCodeInput =document.getElementById("promoCode")
const loyalityPointsInput =document.getElementById("loyalityPoints")
const bookNowButton =document.getElementById("bookButton")
const checkLoyaltyButton = document.getElementById("checkLoyalty");

const foriegnAdultsInput =document.getElementById("numberOfForiegnAdults")
const foriegnKidsInput =document.getElementById("numberOfForiegnChildren")
const localizedAdultsInput =document.getElementById("numberOfLocalAdults")
const localKidsInput =document.getElementById("numberOfLocalChildren")
const guideAdultsInput =document.getElementById("guideForiegnAdults")
const guideKidsInput =document.getElementById("guideChildren")
const bookAdventureButton =document.getElementById("adventureButton")
const currentCost = document.getElementById("currentCostDisplay");
const currentAdvCost = document.getElementById("currentAdvCostDisplay");
const outputText =document.getElementById("output")

// //adding thre event listners
checkLoyaltyButton.addEventListener("click", checkloyal)
roomTypeInput.addEventListener("change",checkRoomType);
numberOfRoomsInput.addEventListener("change",checkNumberOfRooms);
numberOfChildrenInput.addEventListener("change",checkNumberOfChildren);
extraBedsInput.addEventListener("change",checkExtraBeds);
durationInput.addEventListener("change",checkDuration);
foriegnAdultsInput.addEventListener("change",checkNumberOfForiegnAdults);
foriegnKidsInput.addEventListener("change",checkNumberOfForiegnKids);
localKidsInput.addEventListener("change",checkNumberOfLocalKids);
localizedAdultsInput.addEventListener("change",checkNumberOfLocalAdults);
guideAdultsInput.addEventListener("change",checkGuideAdults);
guideKidsInput.addEventListener("change",checkGuideKids);
bookAdventureButton.addEventListener("click", checkAdvBtn);
addToFavoritesButton.addEventListener("click", addToFavorites);
bookNowButton.addEventListener("click", function() {
    updateTotalCostDisplay();
});



// let roomCost;let roomnumber;

let adultsnumber;
let kidsnumber;
let roomprice;
let roomtype;
let add;
let bed;
let duration;
let loyalty;
let promocode;
let totalcost2;
let cost;
let numberofrooms;


let advcost;
let fadults;
let fkids;
let ladults;
let lkids;
let gdadults ;
let gdkids ;
let checklo;






initialize();
//initialization
function initialize(){
    bed = 0;
    rnum = 0;
    value = 0;
    add = 0;
    kidsnumber = 0;
    duration = 0;
    fadults = 0;
    fkids = 0;
    ladults = 0;
    lkids = 0;
    gdadults = 0;
    gdkids = 0
    numberofrooms = 0;
    roomprice = 0;

    updateTotalCostDisplay();

    cost = (((numberofrooms * roomprice) + bed  + (add + kidsnumber)) * duration)// + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentCost.innerText = `Your current adventure cost is ${cost} LKR`

    

    advcost = fadults+fkids+ladults+lkids+gdadults+gdkids
    currentAdvCost.innerText = `Your current adventure cost is ${advcost} LKR`
    

    
}

// functions for current cost
function checkRoomType(){
    roomtype = roomTypeInput.value;
    if(roomtype == "single"){
        roomprice = 25000
        
    }else if(roomtype == "double"){
        roomprice = 35000

    }else if(roomtype == "triple"){
        roomprice = 40000 

    }else{
        roomprice = 0
    }

    cost = (((numberofrooms * roomprice) + bed + (add + kidsnumber)) * duration+fadults+fkids+ladults+lkids)// + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentCost.innerText =  `cost is ${cost}`;



}

function checkNumberOfRooms(){
    numberofrooms = parseInt(numberOfRoomsInput.value)

    cost = (((numberofrooms * roomprice) + bed + (add + kidsnumber)) * duration+fadults+fkids+ladults+lkids)// + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentCost.innerText = `cost is ${cost}`;
}

function checkExtraBeds(){
    bed = parseInt(extraBedsInput.value);
    bed = bed * 8000
  

    cost = (((numberofrooms * roomprice) + bed  + (add + kidsnumber)) * duration)// + (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentCost.innerText = `cost is ${cost}`;
}

function checkNumberOfChildren(){
    kidsnumber = parseInt(numberOfChildrenInput.value);
    kidsnumber = kidsnumber * 5000

    cost = (((numberofrooms * roomprice) + bed + (add + kidsnumber)) * duration) //+ (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentCost.innerText = `cost is ${cost}`;
}

function checkDuration(){
    duration = parseInt(durationInput.value);

    cost = (((numberofrooms * roomprice)+ bed  + (add + kidsnumber)) * duration) //+ (((adventure + adventure2) * duration2) +(guidead + guidead2));
    currentCost.innerText = `cost is ${cost}`;

}

function checkNumberOfForiegnAdults(){
    fadults = parseInt(foriegnAdultsInput.value) 
    fadults = fadults * 10000
 
 
     advcost = fadults+fkids+ladults+lkids+gdadults+gdkids
    currentAdvCost.innerText = `Your current adventure cost is ${advcost} LKR`
 }
 
 function checkNumberOfForiegnKids(){
     fkids = parseInt(foriegnKidsInput.value);
     fkids = fkids * 5000
     
 
     advcost = fadults+fkids+ladults+lkids+gdadults+gdkids
    currentAdvCost.innerText = `Your current adventure cost is ${advcost} LKR`
 }
 
 function checkNumberOfLocalAdults(){
     ladults = parseInt(localizedAdultsInput.value) 
     ladults = ladults * 5000
  
  
      advcost = fadults+fkids+ladults+lkids+gdadults+gdkids
    currentAdvCost.innerText = `Your current adventure cost is ${advcost} LKR`
  }
 
  function checkNumberOfLocalKids(){
     lkids = parseInt(localKidsInput.value);
     lkids = lkids * 2000
     
 
     advcost = fadults+fkids+ladults+lkids+gdadults+gdkids
    currentAdvCost.innerText = `Your current adventure cost is ${advcost} LKR`
 }

 function checkGuideAdults(){
    gdadults = parseInt(guideAdultsInput.value) 
    gdadults = gdadults * 1000
 
 
     advcost = fadults+fkids+ladults+lkids+gdadults+gdkids
    currentAdvCost.innerText = `Your current adventure cost is ${advcost} LKR`
 }
 
 function checkGuideKids(){
     gdkids = parseInt(guideKidsInput.value);
     gdkids = gdkids * 500
     
 
     advcost = fadults+fkids+ladults+lkids+gdadults+gdkids
    currentAdvCost.innerText = `Your current adventure  cost is ${advcost} LKR`
 }
 
 function calculateTotalCost() {
    let roomCost = ((numberofrooms * roomprice) + bed + (add + kidsnumber)) * duration;
    let adventureCost = fadults + fkids + ladults + lkids + gdadults + gdkids;

    return roomCost + adventureCost;
 }

 function updateTotalCostDisplay() {
    total = calculateTotalCost();
    outputText.innerText = `Total cost is ${total} LKR`;
 }

 
 function checkAdvBtn(){
    fadults = parseInt(foriegnAdultsInput.value) 
    fadults = fadults * 10000
    fkids = parseInt(foriegnKidsInput.value);
    fkids = fkids * 5000
    ladults = parseInt(localizedAdultsInput.value) 
    ladults = ladults * 5000
    lkids = parseInt(localKidsInput.value);
    lkids = lkids * 2000 
    gdadults = parseInt(guideAdultsInput.value) 
    gdadults = gdadults * 1000
    gdkids = parseInt(guideKidsInput.value);
    gdkids = gdkids * 500
    
    var advcost =fadults + fkids + ladults + lkids + gdadults + gdkids;
    alert(advcost);
 }

 function checkloyal(){
    numberofrooms = parseInt(numberOfRoomsInput.value)

    if(numberofrooms > 3){
        checklo = numberofrooms * 20
    }else{
        checklo = 0
    }
    alert(`You have eared ${checklo} Loyality points` )
 }
 




// Function to save the current booking as a favorite
function addToFavorites() {
    const favoriteBooking = {
        roomType: roomTypeInput.value,
        numberOfRooms: parseInt(numberOfRoomsInput.value),
        numberOfAdults: parseInt(numberOfAdultsInput.value),
        numberOfChildren: parseInt(numberOfChildrenInput.value),
        extraBeds: parseInt(extraBedsInput.value),
        duration: parseInt(durationInput.value),
        promoCode: promoCodeInput.value,

    };

    localStorage.setItem("favoriteBooking", JSON.stringify(favoriteBooking));

    alert("Booking added to Favorites!");
}
