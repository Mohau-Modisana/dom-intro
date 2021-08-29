const calculateBtnElement = document.querySelector(".calculateBtn");

const billTotalElement = document.querySelector(".billTotal");

const billStringElement = document.querySelector(".billString");



function calculateBtnClicked(){
    var billString = billStringElement.value;
    var billItems = billString.split(",");
    var billTotal = 0;
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    if (billTotal >= 50){
        // adding the danger class will make the text red
        billTotalElement.classList.add("danger");
    }
    else if (billTotal >= 30){
        billTotalElement.classList.add("warning");
    }

}

calculateBtnElement.addEventListener('click', calculateBtnClicked);

