var resultDisplayed = false;

function getResult() {
    try {
        var result = document.getElementById("output").innerHTML;
        var resultCalculated = eval(result);
        console.log(resultCalculated);
        document.getElementById("output").innerHTML = resultCalculated;
        resultDisplayed = true;
    } catch (e) {
        console.log("Invalid expression");
        document.getElementById("output").innerHTML = "Invalid expression";
        resultDisplayed = true;
    }
}

function getButtonPress() {
  
    var input = this.value;

    if (input === "=") {
        getResult();
    } else if (resultDisplayed && input < 10) {
        document.getElementById("output").innerHTML = input;
        resultDisplayed = false;
    } else {
        document.getElementById("output").innerHTML += input;
        resultDisplayed = false;
    }
}

window.onload = function () {
    [].slice.call(document.getElementsByClassName("button")).forEach(function (e) {
        e.addEventListener('click', getButtonPress);
    });
};
