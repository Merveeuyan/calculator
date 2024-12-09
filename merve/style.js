
let resultField = document.getElementById("result");


function clearResult() {
    resultField.value = "";
}


function appendValue(value) {
    resultField.value += value;
}


function calculateResult() {
    try {
        let result = eval(resultField.value);
        if (result === Infinity || isNaN(result)) {
            alert("Bölme işleminde 0 hatası!");
            clearResult();
        } else {
            resultField.value = result;
        }
    } catch (error) {
        alert("Geçersiz işlem!");
        clearResult();
    }
}