
const billTypeText = document.querySelector(".billTypeText");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");

const textTotalAddBtn = document.querySelector(".addToBillBtn");

var callsTotal = 0;
var callnum=0;
var smsTotal = 0;
var smsnum=0;
var totalCost = 0;

function textBillTotal(){
    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "call"){
        callnum ++;
        callsTotal = callnum*2.75;
    }
    else if (billTypeEntered === "sms"){
        smsnum ++;
        smsTotal =smsnum*0.75;
    }
    
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
      totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    
    if (totalCost >= 50){
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);
