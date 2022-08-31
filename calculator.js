document.getElementById("m_button").addEventListener("click", mean_of_grades);
document.getElementById("w_button").addEventListener("click", weighted_grades);

function percent(which_A) {
    var percentage = document.getElementById("Percentage_a" + which_A);
    var numerator = document.getElementById("numerator_a" + which_A);
    var denominator = document.getElementById("denominator_a" + which_A);
  
    if(numerator.value && denominator.value !== "" && !isNaN(numerator.value) && !isNaN(denominator.value) && denominator.value !== "0") {
        if(numerator.value == "0" || parseFloat(numerator.value) == 0) {
            percentage.innerHTML = 0 + "%";
            return;
        }
        if ((parseFloat(numerator.value) && parseFloat(denominator.value)) !== 0 && parseFloat(denominator.value) !== 0) {
            percentage.innerHTML = ((numerator.value / denominator.value) * 100).toFixed(2) + "%";
        }
    }
    else {
        percentage.innerHTML = " ";
    }
}

function mean_of_grades_helper(which_A) {
    var numerator = document.getElementById("numerator_a" + which_A);
    var denominator = document.getElementById("denominator_a" + which_A);
    var percent = 0;
    var rounded = 0;
    if(numerator.value && denominator.value !== "" && !isNaN(numerator.value) && !isNaN(denominator.value) && denominator.value !== "0") {
        if(numerator.value == "0" || parseFloat(numerator.value) == 0) {
            percent = 0;
            return percent;
        }
        if ((parseFloat(numerator.value) && parseFloat(denominator.value)) !== 0 && parseFloat(denominator.value) !== 0) {
            rounded = Math.round(((numerator.value / denominator.value) * 100) * 100)
            percent =  rounded / 100;
        }
    }
    else {
        return -1;
    }

    return percent;
}

function mean_of_grades() {
    var total = 0;
    var div = 0;
    var rounded = 0;
    var result = document.getElementById("result");
    for(which_A = 1; which_A <= 4; which_A++) {
        if(mean_of_grades_helper(which_A) !== -1) {
            total += mean_of_grades_helper(which_A);
            div++;
        }
    }

    if(div == 0) {
        result.innerHTML = "Please fill the grade box(es)";
    }
    else {
        rounded = (total / div);
        result.innerHTML = rounded.toFixed(2) + "%";
    }
}

function weighted_grades() {
    var total = 0;
    var div = 0;
    var rounded = 0;
    var result = document.getElementById("result");
    for(which_A = 1; which_A <= 4; which_A++) {
        if(mean_of_grades_helper(which_A) !== -1) {
            var weight = document.getElementById("weight_a" + which_A);
            if(weight.value !== "" && !isNaN(weight.value)){
                total += (parseInt(weight.value) * mean_of_grades_helper(which_A));
                div += parseInt(weight.value);
            }
        }
    }

    if(div == 0) {
        result.innerHTML = "Please fill the weight box(es)";
    }
    else {
        rounded = (total / div);
        result.innerHTML = rounded.toFixed(2) + "%";
    }
}
