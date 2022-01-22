let url = "https://apis.ccbp.in/random-quote";
let quoteDisplayE = document.getElementById("quoteDisplay");
let spinnerE = document.getElementById("spinner");
let seconds = 0;
let serverText = "";
let resultE = document.getElementById("result");
let quoteInputE = document.getElementById("quoteInput");
let spanE = document.getElementById("spanE");
let intervalId = setInterval(function() {
    seconds = seconds + 1;
    spanE.textContent = seconds;
    console.log(seconds);

}, 1000);

spinnerE.classList.remove("d-none");
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        spinnerE.classList.add("d-none");

        quoteDisplayE.textContent = jsonData.content;
        serverText = jsonData.content;
    });
let resetBtnE = document.getElementById("resetBtn");
resetBtnE.addEventListener("click", function(event) {
    quoteDisplayE.textContent = "";
    resultE.textContent = "";
    seconds = 0;
    spinnerE.classList.remove("d-none");
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerE.classList.add("d-none");
            quoteDisplayE.textContent = jsonData.content;
            serverText = jsonData.content;
        });
})

let submitBtnE = document.getElementById("submitBtn");
submitBtnE.addEventListener("click", function(event) {
    let text = quoteInputE.value;
    if (text === serverText) {
        clearInterval(intervalId);
        resultE.textContent = "You did it in " + seconds + " seconds";
        console.log(seconds);
    } else {
        resultE.textContent = "You typed incorrect sentence";
    }

})