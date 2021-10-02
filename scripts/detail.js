
function totalPay(){
    let adultNumber = document.getElementById("adult_no");
let totalAmount = document.getElementById("total");
let fromDate = document.getElementById("from_date");
let toDate = document.getElementById("to_date");

const diffInMilliseconds = Math.abs(new Date(fromDate.value) - new Date(toDate.value));
let final = diffInMilliseconds/86400000;
totalAmount.value ="Rs."+ (parseInt(adultNumber.value) + parseInt(final))*1000;
}


