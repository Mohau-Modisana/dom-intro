
const callTotalSettings = document.querySelector(".cll");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");

//settings
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

const AddBtn = document.querySelector(".addB");


const updateSettingsbtn = document.querySelector(".updateSettings");



//initializing
var call_total=0;
var sms_total=0;
var F_total=0;

var callCost=0;
var smsCost=0;
var warning=0;
var critical=0;


updateSettingsbtn.addEventListener("click", function(){
    //values that has been set
         callCost=callCostSetting.value;
         smsCost=smsCostSetting.value;
         warning=warningLevelSetting.value;
         critical=criticalLevelSetting.value;
    
         console.log(callCost);
         console.log(smsCost);
         console.log(warning);
         console.log(critical);
    });

    var RadioBtns = document.querySelector(".rd");
 if (RadioBtns){
     var billItemType3 = RadioBtns.value;
 }

 var RadioBtns1 = document.querySelector(".rd1");
 if (RadioBtns1){
     var billItemType4 = RadioBtns1.value;
 }

function BillTotal(){
  
    console.log(billItemType3);
    if (billItemType3 === "call"){
        call_total += callCost;
        callTotalSettings.innerHTML = call_total;
    }
    else if (billItemType4 === "sms"){
        sms_total += smsCost;
        smsTotalSettings.innerHTML = sms_total;
    }
    
    F_total = call_total + sms_total;
    totalSettings.innerHTML = F_total;
    
    if (F_total >= warning){
        totalSettings.classList.add("danger");
    }
    else if (F_total >= critical){
        totalSettings.classList.add("warning");
    }
    
    console.log(call_total);
    console.log(sms_total);
}

AddBtn.addEventListener('click', BillTotal);

