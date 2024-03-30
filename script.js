let displayValue = '';

function appendToDisplay(value) {

    var displayValue = document.getElementById('display').value;

    if(displayValue === "Error"){
        document.getElementById('display').value = "";
    }

    if ((displayValue.length > 0) &&((value === "+" || value === "-" || value === "*" || value === "/" || value === "%"))) {
        var lastVal = displayValue.charAt(displayValue.length - 1);
        if (lastVal === "+" || lastVal === "-" || lastVal === "*" || lastVal === "/" || lastVal === "%") {
            displayValue = displayValue.substring(0, displayValue.length - 1); // Remove the last character
        }
    }

    if((displayValue.length === 0 || displayValue === "") && (value === "+" || value === "-" || value === "*" || value === "/" || value === "%" || value === "0")) 
    {
    }else{
        displayValue += value;
    }

    document.getElementById('display').value = displayValue;    
}

function clearSingleValue(){
    var displayValue = document.getElementById('display').value;
    if(displayValue.length > 0){
        displayValue = displayValue.substring(0, displayValue.length - 1);
        document.getElementById('display').value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {

    var displayValue = document.getElementById('display').value;
    
    if((displayValue !== "Error") || (displayValue !== "") ){
        try {
            const result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
            displayValue = result.toString();
        } catch (error) {
            console.log("error: " + error);
            document.getElementById('display').value = 'Error';
            displayValue = '';
        }    
    }else{
        document.getElementById('display').value = "";
    }


}
