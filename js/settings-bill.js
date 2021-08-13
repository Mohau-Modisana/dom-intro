
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");

//settings
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

const AddBtn = document.querySelector(".button-primary");


const updateSettingsbtn = document.querySelector(".updateSettings");

//values that has been set
var callCost=callCostSetting.value;
var smsCost=smsCostSetting.value;
var warning=warningLevelSetting.value;
var critical=criticalLevelSetting.value;

//initializing
var call_total=0;
var sms_total=0;
var F_total=0;

updateSettingsbtn.addEventListener("click", function(){

AddBtn.addEventListener("click", function(){
//converting the radio buttons
 var RadioBtns = document.querySelector(".billItemTypeWithSettings:checked");
    if (RadioBtns){
        var billItemType3 = RadioBtns.value
    }

function BillTotal(){
    
    if (billItemType3 === "call"){
        callsTotal += callCost
    }
    else if (billItemType3 === "sms"){
        smsTotal += smsCost;
    }
    
    callTotalSettings.innerHTML = callsTotal.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal.toFixed(2);
    F_total = callsTotal + smsTotal;
    totalSettings.innerHTML = totalCost.toFixed(2);
    
    if (totalCost >= warning){
        totalSettings.classList.add("danger");
    }
    else if (totalCost >= critical){
        totalSettings.classList.add("warning");
    }
}


AddBtn.addEventListener('click', BillTotal);

});

});