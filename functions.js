
tip_percent.oninput = function() {
    percent_number.innerHTML = this.value;
    total_tip.innerHTML = (parseFloat(bill.value) * (parseFloat(percent_number.innerHTML) / 100)).toFixed(2);
    total_bill.innerHTML = (parseFloat(bill.value) + parseFloat(total_tip.innerHTML)).toFixed(2);
    total_split.innerHTML = parseFloat(total_bill.innerHTML) / parseFloat(split_number.innerHTML).toFixed(2);
    
    if (parseInt(percent_number.innerHTML) >= 10 && parseInt(percent_number.innerHTML) < 20) {
        mood_text.innerHTML = `:|`;
    } else if (parseInt(percent_number.innerHTML) >= 20){
        mood_text.innerHTML = `:D`;
    } else {
        mood_text.innerHTML = `:(`;
    }

}

tip_split.oninput = function() {
    split_number.innerHTML = this.value;
}
