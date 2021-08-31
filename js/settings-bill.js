
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
var call_num=0;
var sms_total=0;
var sms_num=0;
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


 
function BillTotal(){
    var RadioBtns1 = document.querySelector("input[name='billItemTypeWithSettings']:checked");  
    if (RadioBtns1){
        var billItemType3 = RadioBtns1.value;

        if (billItemType3 === "call"){
            call_num ++;
            call_total = call_num*2.75;
        }
        else if (billItemType3 === "sms"){
            sms_num ++;
            sms_total = sms_num*0.75;
        }

    }

    callTotalSettings.innerHTML = call_total.toFixed(2);
    smsTotalSettings.innerHTML = sms_total.toFixed(2);
    F_total = call_total + sms_total;
    totalSettings.innerHTML = F_total.toFixed(2);
    
    if (F_total > critical ){
        totalSettings.classList.add("danger");
    }
    else if (F_total >= warning && F_total < critical){
        totalSettings.classList.add("warning");
    }
    console.log(billItemType3);
}

AddBtn.addEventListener('click', BillTotal);

