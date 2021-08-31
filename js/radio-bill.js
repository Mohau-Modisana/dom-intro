const callsTotalTwoElem = document.querySelector(".callTotalTwo");
const smsTotalTwoElem = document.querySelector(".smsTotalTwo");
const totalCostTwoElem = document.querySelector(".totalTwo");

const RadioTotalAddBtn = document.querySelector(".radioBillAddBtn");

var callsTotal2 = 0;
var numcall=0;
var smsTotal2 = 0;
var numsms=0;



function RadioBillTotal(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");


    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value
        if (billItemType === "call"){
            numcall ++;
            callsTotal2 = numcall*2.75;
        }
        else if (billItemType === "sms"){
            numsms ++;
            smsTotal2 = numsms*0.75;
        }
    }

    
    callsTotalTwoElem.innerHTML = callsTotal2.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    totalCostTwoElem.innerHTML = totalCost2.toFixed(2);

    //color the total based on the criteria
    if (totalCost2 >= 50){
        totalCostTwoElem.classList.add("danger");
    }
    else if (totalCost2 >= 30){
        totalCostTwoElem.classList.add("warning");
    }

    console.log(callsTotal2);
    console.log(smsTotal2);
    console.log(billItemType);
}

RadioTotalAddBtn.addEventListener('click', RadioBillTotal);
