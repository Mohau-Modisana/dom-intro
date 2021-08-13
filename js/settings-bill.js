// get a reference to the sms or call radio buttons
var RadioBtns = document.querySelector(".billItemTypeWithSettings:checked");
    if (RadioBtns){
        var billItemType3 = RadioBtns.value
        // billItemType will be 'call' or 'sms'
    }
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");

// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
const AddBtn = document.querySelector(".button-primary");

//get a reference to the 'Update settings' button
const updateSettingsbtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callCost=callCostSetting.value;
var smsCost=smsCostSetting.value;
var warning=warningLevelSetting.value;
var critical=criticalLevelSetting.value;

// create a variables that will keep track of all three totals.
var call_total=0;
var sms_total=0;
var F_total=0;

//add an event listener for when the 'Update settings' button is pressed
updateSettingsbtn.addEventListener("click", function(){

//add an event listener for when the add button is pressed
AddBtn.addEventListener("click", function(){

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

function BillTotal(){
    // get the value entered in the billType textfield
    var billTypeEnter = billItemType3.value;
    // update the correct total
    if (billTypeEnter === "call"){
        callsTotal += callCost
    }
    else if (billTypeEnter === "sms"){
        smsTotal += smsCost;
    }
    
    //update the totals that is displayed on the screen.
    callTotalSettings.innerHTML = callsTotal.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalSettings.innerHTML = totalCost.toFixed(2);
    
    //color the total based on the criteria
    if (totalCost >= warning){
        // adding the danger class will make the text red
        totalSettings.classList.add("danger");
    }
    else if (totalCost >= critical){
        totalSettings.classList.add("warning");
    }
}



AddBtn.addEventListener('click', BillTotal);

});
});