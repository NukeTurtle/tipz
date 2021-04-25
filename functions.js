const totalBill = total_bill;
function billCost() {
    totalBill.innerHTML = bill.value;
}
 
tip_percent.oninput = function () {
    percent_number.innerHTML = this.value;
}

tip_split.oninput = function () {
    split_number.innerHTML = this.value;
}