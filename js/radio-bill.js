// get a reference to the sms or call radio buttons
const callsTotalTwoElem = document.querySelector(".callTotalTwo");
const smsTotalTwoElem = document.querySelector(".smsTotalTwo");
const totalCostTwoElem = document.querySelector(".totalTwo");

//get a reference to the add button
const RadioTotalAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
var callsTotal2 = 0;
var smsTotal2 = 0;

//add an event listener for when the add button is pressed
RadioTotalAddBtn.addEventListener("click", function(){

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }

function RadioBillTotal(){

    // get the value entered in the billType textfield
    var billTypeEntered2 = billItemType
    // update the correct total
    if (billItemType === "call"){
        callsTotal2 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalTwoElem.innerHTML = callsTotal2.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    totalCostTwoElem.innerHTML = totalCost2.toFixed(2);

    
    //color the total based on the criteria
    if (totalCost2 >= 50){
        // adding the danger class will make the text red
        totalCostTwoElem.classList.add("danger");
    }
    else if (totalCost2 >= 30){
        totalCostTwoElem.classList.add("warning");
    }
}

RadioTotalAddBtn.addEventListener('click', RadioBillTotal);

});